import Order from "./order"
import OrderForm from './orderform';
import { useState, useEffect } from 'react';
import {getOrders,  createOrderbycustomer,  deleteOrder } from "../api/order";




const OrderList = ({jwt, customer}) => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [showJewelForm , setShowJewelForm]= useState(false);
    // const [Jewels , setJewels]= useState(false);
    

    const doCreateOrder = (order) => {
        setIsLoading(true);
        createOrderbycustomer(order, jwt , customer)
            .then((newOrder) => {
                 setOrders((prevState) => [...prevState, newOrder]);
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
        getOrders(jwt,customer).then((orders) => {    
            setIsLoading(false);
            setOrders(orders);
        }).catch(() => setIsLoading(false));
    }
    // const doCreateJewel = (jewel) => {
    //     setIsLoading(true);
    //     createJewels(jewel)
    //         .then((newJewel) => {
    //              setJewels((prevState) => [...prevState, newJewel]);
    //              setIsLoading(false);       
    //         }); 
    // };

//     const doAddJewel = (order) =>{
//         setShowJewelForm(order)
// }


    useEffect(loadData,[customer]); 
    
    return <>
    <p>comienza order list de customer</p>
        {isLoading ? 
            <p>cargando...</p> : 

             orders.length ? 

            orders.map(order => 
                <Order 
                    key={order._id} 
                    order={order} 
                    onDelete={() => doDeleteOrder(order)}
                    jwt={jwt}
                    // addJewel={()=> doAddJewel(order)}
                />)
                : <p>No hay ordenes!!!</p>
            }
        <OrderForm createOrderbycustomer={doCreateOrder}></OrderForm>

    </>
        
}
    

export default OrderList;