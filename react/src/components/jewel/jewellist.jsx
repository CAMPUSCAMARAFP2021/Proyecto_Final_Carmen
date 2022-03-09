import Jewel from "./jewel"
import JewelForm from './jewelform';


import { useState, useEffect } from 'react';
import { getJewels, createJewels , deleteJewel} from "../../api/jewels";



const JewelList = ({jwt, order}) => {
    const [jewels, setJewels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const doCreateJewel = (jewel) => {
        setIsLoading(true);
        createJewels(jewel, jwt, order)
            .then((newJewel) => {
                 setJewels((prevState) => [...prevState, newJewel]);
                 setIsLoading(false);       
            }); 
    };
   
    const doDeleteJewel = (jewel) => {
         setIsLoading(true);
         deleteJewel(jewel, jwt)
         .then(loadData);
     };
    const loadData = () => {
        setIsLoading(true);
        getJewels(jwt,order).then((jewels) => {    
            setJewels(jewels);
            setIsLoading(true)
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[order]); 



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