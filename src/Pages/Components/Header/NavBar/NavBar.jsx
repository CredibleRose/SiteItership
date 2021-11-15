import React from 'react';
import Navigator from './NavBar.module.css'
import NavParagraph from './NavParagraph/NavParahraph'

const NavBar = (props) => {
    return (
        <ul className={`${Navigator.hr} ${Navigator.NavParagraph}`}>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="All"/>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="Android"/>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="IOS"/>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="Design"/>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="HR"/>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="PR"/>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="QA"/>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="Back_Office"/>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="Frontend"/>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="Backend"/>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="Support"/>
            <NavParagraph selectDepartment={props.selectDepartment} punkt="Analytics"/>

        </ul>
    )
}

export default NavBar;