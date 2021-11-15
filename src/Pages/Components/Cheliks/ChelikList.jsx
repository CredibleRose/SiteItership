import React from "react";
import cheliki from './ChelikList.module.css'
import Personal from './Personal/Personal'
import selectPunkt from '../Header/NavBar/NavParagraph/NavParahraph'

const ChelikList = (props) => {

    let ChelikElement = props.CheliksData.map((ChelikInf) => <Personal
        key={ChelikInf.id}
        id={ChelikInf.id}
        name={ChelikInf.firstName}
        position={ChelikInf.position}
        url={ChelikInf.avatarUrl}
        LastName={ChelikInf.lastName}
        userTag={ChelikInf.userTag}
        department={ChelikInf.department}/>)
    return (
        <div>
            {ChelikElement}
        </div>
    );
}
export default ChelikList;