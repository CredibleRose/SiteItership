import React from 'react';
import MyInput from "./MyInput/MyInput";
import MySelect from "./MySelect/MySelect";
import Filter from "./ProfsFilter.module.css"

const ProfsFilter = ({filter,setFilter, props}) => {
    return (
        <div className = {Filter.filter}>
            <MyInput  value={filter.query}
                     onChange={e => setFilter({...filter, query: e.target.valueSerch})}
                     placeholder="Поиск по сайту"/>

            <MySelect
                onChange={selectedSort => setFilter ({...filter, sort: selectedSort})}
                value={filter.sort}
                defoultValue="Сортировка"
                option={[
                    {value: "firstName", name: "По алфавиту"},
                    {value: "birthday", name: "По возрасту"},
                ]}
            /></div>
    );
};

export default ProfsFilter;