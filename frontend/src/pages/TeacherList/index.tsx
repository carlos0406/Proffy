import React, { FormEvent, useState } from 'react';
import './style.css'
import PagesHeader from '../../components/PagesHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input';
import Select from '../../components/select';
import api from '../../services/api';
function TecherList() {

    const [teachers, setTeachers] = useState([])
    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }

        });


        setTeachers(response.data);
    }


    return (

        < div id="page-teacher-list" className="container" >
            <PagesHeader title="Esses são os Proffys disponiveis." >
                <form id="search-teacher" onSubmit={searchTeachers} >
                    <Select
                        value={subject}
                        onChange={e => { setSubject(e.target.value) }}
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Educação Fisica', label: 'Educação Fisica' },
                            { value: 'Fisica', label: 'Fisica' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Portugues', label: 'Portugues' },
                            { value: 'Historia', label: 'Historia' },
                            { value: 'Quimica', label: 'Quimica' }

                        ]}
                    />

                    <Select
                        name="Dia"
                        label="Dia da semana"
                        value={week_day}
                        onChange={e => { setWeekDay(e.target.value) }}
                        options={[

                            { value: '1', label: 'Segunda-feira' },
                            { value: '2 Fisica', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                            { value: '0', label: 'Domingo' }


                        ]}
                    />
                    <Input type="time" name="time" label="Hora"
                        value={time}
                        onChange={e => { setTime(e.target.value) }

                        }
                    />
                    <button type="submit">Buscar</button>

                </form>
            </PagesHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem teacher={teacher} key={teacher.id}></TeacherItem>
                }
                )

                }

            </main>


        </div >


    )
}

export default TecherList