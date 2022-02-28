import Order from "./order"
import OrderForm from './orderform';

import { useState, useEffect } from 'react';
import {getOrder,  createOrder,  deleteOrder } from "../api/order";



const OrderList = ({jwt}) => {
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateOrder = (order, jwt) => {
        setIsLoading(true);
        createOrder(order)
            .then((newOrder) => {
                 setOrder((prevState) => [...prevState, newOrder]);
                 setIsLoading(false);       
            }); 
    };
    const doDeleteOrder = (order, jwt) => {
        setIsLoading(true);
        deleteOrder(order)
        .then(loadData);
    };
    const loadData = () => {
        setIsLoading(true);
        getOrder(jwt).then((order) => {    
            setIsLoading(false);
            setOrder(order);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
   
    
    return <>
        {isLoading ? 
            <p>cargando...</p> : 
            order.map(order => 
                <Order 
                    key={order._id} 
                    order={order} 
                    onDelete={() => doDeleteOrder(order)}
                />)}
        <orderform createOrder={doCreateOrder}></orderform>
    </>
        
}
    

export default OrderList;