import { useState } from "react";
import Button from 'react-bootstrap/Button';



const CustomerForm = ({createCustomer}) => {
    const [customer, setOrder] = useState(
        {
            "name": "",
            "subName": "",
            "email": "",
            "orders": [],
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setOrder( lastValue => ({...lastValue, name}))
    }

    const setSubName = ({target}) => {
        const subName = target.value;
        setOrder( lastValue => ({...lastValue,  subName}))
    }

    const setEmail = ({target}) => {
        const email = target.value;
        setOrder( lastValue => ({...lastValue,  email}))
    }


    return <>
        <form>
            <input type="text" name="title" onChange={setName} value={customer.name}></input>
            <input type="text" name="subname" onChange={setSubName} value={customer.subName}></input>
            <input type="text" name="jewel" onChange={setEmail} value={customer.email}></input><br /><br />
            
        </form>
        
        <Button name="enviar" onClick={() => createCustomer(customer)}>Crear Cliente</Button>
        <div> 
            {JSON.stringify(customer)}
        </div>
    </>;
}

export default CustomerForm;