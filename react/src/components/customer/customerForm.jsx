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
    const styles = {
        h1: {
        textAlign : "center",
        color : "#B84DEA",
        fontSize: 50,
        }
    }

    
    return <>
    <br></br><br></br>
    <h1 style={styles.h1}>Crear Clientes</h1>
    <hr></hr>
        <form>
            <input type="text" name="title"   onChange={setName} value={customer.name} ></input>
            <input type="text" name="subname" onChange={setSubName} value={customer.subName}></input>
            <input type="text" name="email" onChange={setEmail} value={customer.email}></input><br /><br />
            
        </form>
        
        <Button name="enviar" onClick={() => createCustomer(customer)}>Crear</Button>
        <div> 
            {JSON.stringify(customer)}
        </div>
    </>;
}

export default CustomerForm;