import React from "react";
import Persona from './Personal.module.css'
import {useNavigate} from "react-router-dom";

const Personal = (props) => {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => {
            navigate(`/person/${props.id}`)
        }}>

            <ul className={Persona.chelik}>
                <li>
                    <img src={props.url}/>
                    <div className={Persona.name}>{props.name}</div>
                    <div className={Persona.name}>{props.LastName}</div>
                    <div>{props.userTag}</div>
                    <p></p>
                    <div className={Persona.position}>{props.position}</div>
                </li>
            </ul>
        </div>);
}
export default Personal;