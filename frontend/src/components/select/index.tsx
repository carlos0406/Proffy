import React, { SelectHTMLAttributes } from 'react'
import './style.css'
interface selectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label: string
    options: Array<{
        value: string,
        label: string
    }>
}

const Select: React.FC<selectProps> = ({ name, label, options, ...rest }) => {

    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest} >
                <option value="" disabled hidden >Selecione uma opção</option>
                {options.map(
                    option => {
                        return <option value={option.value} key={option.value}> {option.label}</option>
                    }
                )}

            </select>
        </div>
    )
}

export default Select;