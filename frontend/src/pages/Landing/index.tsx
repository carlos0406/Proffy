import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import logoIMG from '../../assets/images/logo.svg'
import landingIMG from '../../assets/images/landing.svg'
import studyICON from '../../assets/images/icons/study.svg'
import giveClassICON from '../../assets/images/icons/give-classes.svg'
import purpleHeartICON from '../../assets/images/icons/purple-heart.svg'

import "./style.css"
import api from '../../services/api'

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('/connections').then(res => {
            const { total } = res.data
            setTotalConnections(total)
        })

    }, [])
    return (
        <div id="page-landing">

            <div id="page-landing-content" className="container">

                <div className="logo-container">
                    <img src={logoIMG} alt="Logo" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingIMG}
                    alt="Plataforma de estudos"
                    className="hero-image" />

                <div className="buttons-container">

                    <Link to="/study" className="study">
                        <img src={studyICON} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassICON} alt="Dar Aulas" />
                        Dar Aulas
                    </Link>



                </div>

                <span className="total-connection">
                    Total de {totalConnections} conexões já realizadas
                    <img src={purpleHeartICON} alt="Coração roxo" />
                </span>

            </div>

        </div>
    )
}

export default Landing