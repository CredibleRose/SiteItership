import React from 'react';
import Paragraph from './NavParagraph.module.css'

const NavParagraph =(props) => {
    let selectpunktik = props.punkt

    const kek = () => {
      props.selectDepartment(selectpunktik)
    }
    return(
        <button className={Paragraph.NavParagraph} onClick={ kek } >
            {console.log(selectpunktik)}
                <li className = {Paragraph.IdialPdaragraph}>
                    {props.punkt}
                </li>
        </button>
    )
}

export default NavParagraph;