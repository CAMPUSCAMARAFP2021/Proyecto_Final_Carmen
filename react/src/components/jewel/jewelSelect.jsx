import { useEffect } from "react";

const JewelSelect = () => {
    const [isLoading, setIsLoading] = useState(false);
    const loadData = () => {
        setIsLoading(true);
        getCustomers(jwt).then((customers) => {    
            setIsLoading(false); 
            setCustomers(customers);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]);
    return <>Hola Mundo</>
}

export default JewelSelect;