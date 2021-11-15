import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import HeaderProfile from "./Components/Header/HeaderProfile.jsx";
import head from "./Components/Header/Header.module.css"
import IcoStar from '../Ico/Star.png'
import IcoTele from '../Ico/Telephone.png'


const ProfileInfo = (props) => {
    const params = useParams()

    const [chelik, setChelik] = useState({})

    useEffect(() => {
        setChelik(props.CheliksData.find(x => x.id === params.id))
    })

    const getBir = (birthday) => {
        var birthdate = new Date(birthday)
        var cur = new Date();
        var diff = cur - birthdate
        var age = Math.floor(diff / 31557600000);
        return age
    }

    return (
        <div>

            <HeaderProfile url={chelik.avatarUrl}
                            name={chelik.firstName}
                             lastn={chelik.lastName}
                              pos={chelik.department}
                               tag={chelik.userTag}/>
            <img src={IcoStar}/>
            <div className={head.Profbirth}>{chelik.birthday}</div>
            <div className={head.Profage}>{getBir(chelik.birthday)} лет</div>
            <p></p>
            <img className={head.ico} src={IcoTele}/>
            <div className={head.ProfTele}>{chelik.phone}</div>

        </div>
    );
}

export default ProfileInfo;
