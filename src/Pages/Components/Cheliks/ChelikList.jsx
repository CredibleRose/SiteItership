import React from "react";
import Personal from './Personal/Personal'

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