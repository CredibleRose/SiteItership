import React from 'react';
import Navigator from './Header.module.css'
import NavBar from './NavBar/NavBar'
import Ico from '../../../Ico/Lupa.png'
import ProfsFilter from "./ProfsFilter";

const Header = (props) => {

    return (
        <header className={Navigator.top}>
            <div className={Navigator.SerchText}>Поиск</div>
            <body className={Navigator.poisk}>

            <form className={Navigator.poisk}>
                <img className={Navigator.ico} src={Ico}/>
                <ProfsFilter filter = {props.filter}
                             setFilter={props.setFilter}
                             props = {props}/>

            </form>

            </body>
            <nav>
                <NavBar selectDepartment={props.selectDepartment}/>
            </nav>
        </header>
    )
}

export default Header;