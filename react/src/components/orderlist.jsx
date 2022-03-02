import Order from "./order"
import OrderForm from './orderform';
import Button from "./buttons";
import { useState, useEffect } from 'react';
import {getOrders,  createOrderbycustomer,  deleteOrder } from "../api/order";



const OrderList = ({jwt, customer}) => {
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateOrder = (order) => {
        setIsLoading(true);
        createOrderbycustomer(order, jwt , customer)
            .then((newOrder) => {
                 setOrder((prevState) => [...prevState, newOrder]);
                 setIsLoading(false);       
            }); 
    };
    const doDeleteOrder = (order) => {
        setIsLoading(true);
        deleteOrder(order , jwt , customer)
        .then(loadData);
    };
    const loadData = () => {
        setIsLoading(true);
        getOrders(jwt,customer).then((order) => {    
            setIsLoading(false);
            setOrder(order);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[customer]); 
    
   
    
    return <>
        {isLoading ? 
            <p>cargando...</p> : 
            order.map(order => 
                <Order 
                    key={order._id} 
                    order={order} 
                    onDelete={() => doDeleteOrder(order)}
                />)}
        <OrderForm createOrderbycustomer={doCreateOrder}></OrderForm>

    </>
        
}
    

export default OrderList;