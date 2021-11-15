import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import ProfileInfo from './Pages/ProfileInfo';
import AllCheliks from './Pages/AllCheliks'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import axios from "axios";
import {useProfs} from "./Hooks/useProfs";
import ProfsService from "./API/ProfsService";

const App = () => {

    const [cheliks, setChecliks] = useState([])
    const [filter,setFilter] = useState({sort: '',query: ''})
    const sortedsAndSerchedProfs = useProfs(cheliks, filter.sort, filter.query)

    const selectDepartment = (department) => {
        setChecliks([...cheliks].filter(ch => ch.department === department.toLowerCase()))
    }
    useEffect( () => {
        fetchCheliks()
    }, [])
    async function fetchCheliks() {
        const cheliks = await ProfsService.getAll()
        setChecliks(cheliks)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllCheliks valueSerch ={filter.query}
                                                     onChangeSerch = {e => setFilter({...filter, query: e.target.valueSerch})}
                                                     value = {filter.sort}
                                                     onCahnge = {selectedSort => setFilter ({...filter, sort: selectedSort})}
                                                     filter ={filter}
                                                     setFilter = {setFilter}
                                                     selectDepartment = {selectDepartment}
                                                     CheliksData = { sortedsAndSerchedProfs }/>}/>
                <Route exact path={'/person/:id'} element={<ProfileInfo CheliksData = { cheliks } />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
