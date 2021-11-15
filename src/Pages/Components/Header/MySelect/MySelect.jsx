import React from 'react';
import select from './MySelect.module.css'

const MySelect =({option , defoultValue, value, onChange}) => {
    return(
        <select className={select.select}
            value ={value}
            onChange={event => onChange(event.target.value)}
        >
            <option key ={option.value} disabled value ="">{defoultValue}</option>
            {option.map(option => <option value={option.value} >{option.name}</option>)}
        </select>
    )

}
export default MySelect;