import Jewel from "./jewel"
import JewelForm from './jewelform';
import Button from "./buttons";

import { useState, useEffect } from 'react';
import { getJewels, createJewels} from "../api/jewels";



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
    // const doDeleteTask = (team, jwt) => {
    //     setIsLoading(true);
    //     deleteTeam(team)
    //     .then(loadData);
    // };
    const loadData = () => {
        setIsLoading(true);
        getJewels(jwt).then((jewels) => {    
            setJewels(jewels);
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
                    // onDelete={() => doDeleteTask(jewel)}
                />)}
        <JewelForm createJewel={doCreateJewel}></JewelForm>
    </>
        
}
    

export default JewelList;