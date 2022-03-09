import Customer from "./customer"
import CustomerForm from './customerForm';
import { useState, useEffect } from 'react';
import {getCustomers,  createCustomer } from "../../api/customer";
import { Container } from "react-bootstrap";




const CustomerList = ({jwt}) => {
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateCustomer = (customer, jwt) => {
        setIsLoading(true);
        createCustomer(customer)
            .then((newCustomer) => {
                 setCustomers((prevState) => [...prevState, newCustomer]);
                 setIsLoading(false);       
            }); 
    };
    
    const loadData = () => {
        setIsLoading(true);
        getCustomers(jwt).then((customers) => {    
            setIsLoading(false);
            setCustomers(customers);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
   
    
    return <>
        {isLoading ? 
            <p>cargando...</p> : 
            <Container>
            {customers.map(customer => 
                <Customer 
                    key={customer._id} 
                    customer={customer} 
                   
                />)}
                 
        <CustomerForm createCustomer={doCreateCustomer}></CustomerForm>
        </Container>}
    </>
        
}
    

export default CustomerList;