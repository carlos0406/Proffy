import React, { TextareaHTMLAttributes } from 'react'
import './style.css'
interface textareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    label: string
}

const TextArea: React.FC<textareaProps> = ({ name, label, ...rest }) => {

    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    )
}

export default TextArea;