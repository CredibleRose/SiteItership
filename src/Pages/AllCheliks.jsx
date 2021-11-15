import React from 'react';
import Header from './Components/Header/Header.jsx';
import ChelikList from './Components/Cheliks/ChelikList'

const AllCheliks = (props) => {

  return (
    <div className="App">
        <Header onChangeSerch = {props.onChangeSerch}
                valueSerch ={props.valueSerch}
                onChange = {props.onCahnge}
                value ={props.value}
                selectDepartment = {props.selectDepartment} />
        <ChelikList CheliksData = {props.CheliksData}/>
    </div>
  );
}

export default AllCheliks;
