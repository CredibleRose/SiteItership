import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import ProfileInfo from './Pages/ProfileInfo';
import AllCheliks from './Pages/AllCheliks'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import axios from "axios";

const App = () => {

    const [cheliks, setChecliks] = useState([])

    const selectDepartment = (department) => {
        setChecliks([...cheliks].filter(ch => ch.department === department.toLowerCase()))
    }
    useEffect( () => {
        fetch()
    }, [])
    async function fetch() {
        const respone = await axios.get('https://stoplight.io/mocks/kode-education/trainee-test/25143926/users')
        setChecliks(respone.data.items)
    }

    const [selectedSort, setSelectedSort] =useState('')
    const sortProfs =(sort) => {
        setSelectedSort(sort)
    }
    const sortedProfs = useMemo(() => {
        if(selectedSort){
            return [...cheliks].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return cheliks;
    },[selectedSort,cheliks])
    const [serchQuery, setSerchQuery] = useState('')
    const sortedsAndSerchedProfs = useMemo(()=>{
        return sortedProfs/*.filter(cheliks => cheliks.name.includes(serchQuery))*/
    },[serchQuery,sortedProfs])


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllCheliks valueSerch ={serchQuery}
                                                     onChangeSerch = {e => setSerchQuery(e.target.valueSerch)}
                                                     value = {selectedSort}
                                                     onCahnge = {sortProfs}
                                                     selectDepartment = {selectDepartment}
                                                     CheliksData = { sortedsAndSerchedProfs }/>}/>
                <Route exact path={'/person/:id'} element={<ProfileInfo CheliksData = { cheliks } />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
