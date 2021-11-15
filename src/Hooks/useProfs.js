import {useMemo} from "react";

export const useSortedProfs = (cheliks,sort) =>{
    const sortedProfs = useMemo(() => {
        if(sort){
            return [...cheliks].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return cheliks;
    },[sort,cheliks])
    return sortedProfs
}
export const useProfs = (cheliks,sort, query) => {
    const sortedProfs = useSortedProfs(cheliks,sort)
    const sortedsAndSerchedProfs = useMemo(()=>{
        return sortedProfs.filter(chel => chel.firstName.toLowerCase().includes(query))
    },[query,sortedProfs])
    return sortedsAndSerchedProfs;
}