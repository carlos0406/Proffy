import React from 'react'
import './style.css'
import wppICON from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

export interface Teacher {

    id: number,
    name: string,
    whatsapp: string,
    avatar: string,
    bio: string,
    subject: string,
    cost: number,


}

interface teacherItemProps {
    teacher: Teacher
}



const TeacherItem: React.FC<teacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Carlos" />
                <div>
                    <strong>
                        {teacher.name}
                    </strong>
                    <span> {teacher.subject}</span>

                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    preço/hora
                            <strong>R$  {teacher.cost}</strong>

                </p>

                <a href={`https://wa.me/${teacher.whatsapp}`} onClick={createNewConnection}>
                    <img src={wppICON} alt="Whatsapp" />
                            Entrar em contato
                        </a>

            </footer>

        </article>
    );
}
export default TeacherItem;