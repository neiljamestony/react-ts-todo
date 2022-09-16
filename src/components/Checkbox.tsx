import React from 'react'

interface Props {
    type: string,
    name: string,
    checked?: boolean,
    onClick: (event: React.FormEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<Props> = ({ name, type, checked, onClick }) => {
  return <input type={type} name={name} checked={checked} onClick={onClick}/>
}

export default Checkbox;