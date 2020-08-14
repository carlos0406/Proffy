import db from '../database/connection';
import converteHourToMinute from '../utils/converteHourToMinutes';
import { Request, Response } from 'express'


interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}
export default class ClassesController {

    async index(req: Request, res: Response) {
        const filter = req.query;

        const subject = filter.subject as string
        const week_day = filter.week_day as string
        const time = filter.time as string

        if (!filter.week_day || !filter.subject || !filter.time) {
            return res.status(400).json({ error: "Missing filters to search classes" })

        }

        const timeInMinutes = converteHourToMinute(time);


        const classes = await db('classes')
            .whereExists(function () {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id`=`classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day`=??', [Number(week_day)])
                    .whereRaw('`class_schedule`.`from`<=??', [timeInMinutes])
                    .whereRaw('`class_schedule`.`to`>??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', "=", "users.id").select(['classes.*', 'users.*'])

        res.json(classes);



    }



    async create(req: Request, res: Response) {
        const {
            name,
            whatsapp,
            avatar,
            bio,
            subject,
            cost,
            schedule
        } = req.body;


        const trx = await db.transaction();
        try {

            const insertedUserId = await trx('users').insert(
                {
                    name,
                    whatsapp,
                    avatar,
                    bio

                }
            );

            const user_id = insertedUserId[0];


            const insertedClassesId = await trx('classes').insert(
                {
                    subject,
                    cost,
                    user_id
                }
            )

            const class_id = insertedClassesId[0];

            const classSchedule = schedule.map(
                (scheduleItem: ScheduleItem) => {
                    return {
                        class_id,
                        week_day: scheduleItem.week_day,
                        from: converteHourToMinute(scheduleItem.from),
                        to: converteHourToMinute(scheduleItem.to)
                    }
                }
            )

            await trx('class_schedule').insert(classSchedule)


            await trx.commit();

            return res.status(201).send();


        } catch (error) {
            trx.rollback();
            return res.status(400).json({
                error: "Unexpected erro while creating a new class"
            })
        }



    }
}