import {useState} from 'react'

const useLocalStore = (key, initialValue) => {
    const[items, setNewItem] = useState(()=>{
        try{
            console.log("local store callback called");
            return window.localStorage.getItem(key) ?
                JSON.parse(window.localStorage.getItem(key)) : initialValue;
        }catch(error){
            console.log("local error store callback called"+error);
            return initialValue;
        }
    });

    const setTolocalStore = value => {
        setNewItem(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [items, setTolocalStore]
}

export default useLocalStore