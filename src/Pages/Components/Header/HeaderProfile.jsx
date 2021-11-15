import React from 'react';
import Navigator from './Header.module.css'
import {useNavigate} from "react-router-dom";

const HeaderProfile =(props) => {
    const navigate = useNavigate()
    return(
        <header className={Navigator.topProfile}>
            <button onClick = { () => navigate(`/`) }>
                Назад
            </button>
            <img className={Navigator.Prof} src={props.url}/>
            <div className={Navigator.ProfAll}>
                <div className={Navigator.Prof}>{props.name}</div>
                <div className={Navigator.Prof}>{props.lastn}</div>
                <div className={Navigator.Proftag}>{props.tag}</div>
            </div>
            <div className={Navigator.Profpos}>{props.pos}</div>
        </header>
    )
}
export default HeaderProfile