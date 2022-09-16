import React from 'react'

interface Props {
    type?: string,
    value: string,
    name?: string,
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void,
    maxLength?: number
}

const TextField: React.FC<Props> = ({ type, name, value, onChange, maxLength }) => {
    return <input type={type} name={name} value={value} onChange={onChange} maxLength={maxLength}/>
}

export default TextField;