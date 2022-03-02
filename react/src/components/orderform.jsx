import { useState } from "react";
import Button from './buttons';


const OrderForm = ({createOrder}) => {
    const [order, setOrder] = useState(
        {
            "title": "",
            "jewels": [],
           
            
        }
    );

    const setTitle = ({target}) => {
        const title = target.value;
        setOrder( lastValue => ({...lastValue, title}))
    }


    const setJewels = ({target}) => {
        const jewel = target.value;
        setOrder( lastValue => ({...lastValue,  jewel}))
    }

    

    return <>
        <form>
            <input type="text" name="title" onChange={setTitle} value={order.title}></input>
        </form>
        <Button name="enviar" onClick={() => createOrder(order)}></Button>
        <div> 
            {JSON.stringify(order)}
        </div>
    </>;
}

export default OrderForm;