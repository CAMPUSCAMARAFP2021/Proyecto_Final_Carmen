import Jewel from "./jewel"
import JewelForm from './jewelform';
import Button from "./buttons";

import { useState, useEffect } from 'react';
import { getJewels, createJewels, deleteJewels} from "../api/jewels";



const JewelList = ({jwt}) => {
    const [jewels, setJewels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

 

    const doCreateJewel = (jewel) => {
        setIsLoading(true);
        createJewels(jewel)
            .then((newJewel) => {
                 setJewels((prevState) => [...prevState, newJewel]);
                 setIsLoading(false);       
            }); 
    };

    const doDeleteJewel = (jewel) => {
        setIsLoading(true);
        deleteJewel(jewel)
        .then(loadData);
        setIsLoading(false)
    };
    
    const loadData = () => {
        setIsLoading(true);
        getJewels(jwt).then((jewel) => {    
            setJewels(jewel);
            setIsLoading(true)
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
   
    
    return <>
        {isLoading ? 
            <p>cargando...</p> : 
            jewels.map(jewel => 
                <Jewel 
                    key={jewel._id} 
                    jewel={jewel} 
                    onDelete={() => doDeleteJewel(jewel)}
                />)}
        <JewelForm createJewel={doCreateJewel}></JewelForm>
    </>
        
}
    

export default JewelList;