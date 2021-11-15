import React from 'react';
import Navigator from './Header.module.css'
import NavBar from './NavBar/NavBar'
import Ico from '../../../Ico/Lupa.png'
import MySelect from "./MySelect/MySelect";
import MyInput from "./MyInput/MyInput";

const Header = (props) => {

    return (
        <header className={Navigator.top}>
            <div className={Navigator.SerchText}>Поиск</div>
            <body className={Navigator.poisk}>

            <form className={Navigator.poisk}>
                <img className={Navigator.ico} src={Ico}/>
                <MyInput value={props.valueSerch}
                         onChange={props.onChangeSerch}
                         placeholder="Поиск по сайту"/>

                <MySelect
                    onChange={props.onChange}
                    value={props.value}
                    defoultValue="Сортировка"
                    option={[
                        {value: "firstName", name: "По алфавиту"},
                        {value: "birthday", name: "По возрасту"},
                    ]}
                />

            </form>

            </body>
            <nav>
                <NavBar selectDepartment={props.selectDepartment}/>
            </nav>
        </header>
    )
}

export default Header;