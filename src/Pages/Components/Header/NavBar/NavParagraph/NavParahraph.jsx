import React from 'react';
import Paragraph from './NavParagraph.module.css'

const NavParagraph =(props) => {
    let selectpunktik = props.punkt

    const kek = () => {
      props.selectDepartment(selectpunktik)
    }
    return(
        <button className={Paragraph.NavParagraph} onClick={ kek } >
        {/*<NavLink to = {props.punkt}>*/}
            {console.log(selectpunktik)}
                <li className = {Paragraph.IdialPdaragraph}>
                    {props.punkt}
                </li>

    {/*</NavLink>*/}
        </button>
    )
}

export default NavParagraph;