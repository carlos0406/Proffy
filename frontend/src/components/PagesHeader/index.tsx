import React from 'react'
import { Link } from 'react-router-dom'
import backICOn from '../../assets/images/icons/back.svg'
import logoIMG from '../../assets/images/logo.svg'
import './style.css'

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backICOn} alt="voltar" />
                </Link>

                <img src={logoIMG} alt="logo" />

            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}
                {props.children}

            </div>

        </header>
    );
}

export default PageHeader;
