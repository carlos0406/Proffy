import db from '../database/connection';
import converteHourToMinute from '../utils/converteHourToMinutes';
import { Request, Response } from 'express'
export default class UsersController {
    async index(req: Request, res: Response) {
        const allUsers = await db('users').select('*');



        return res.json(allUsers);

    }
}