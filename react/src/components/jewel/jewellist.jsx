import Jewel from "./jewel"
import JewelForm from './jewelform';


import { useState, useEffect } from 'react';
import { getJewels, createJewels , deleteJewel} from "../api/jewels";



const JewelList = ({jwt}) => {
    const [jewels, setJewels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


   
    const doDeleteJewel = (jewel, jwt) => {
         setIsLoading(true);
         deleteJewel(jewel)
         .then(loadData);
     };
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
                     onDelete={() => doDeleteJewel(jewel)}
                />)}
        <JewelForm createJewel={doCreateJewel}></JewelForm>
    </>

}


export default JewelList; 