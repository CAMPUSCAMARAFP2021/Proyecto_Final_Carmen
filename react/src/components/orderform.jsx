import { useState } from "react";
import Button from './Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OrderForm = ({createOrder}) => {
    const [order, setOrder] = useState(
        {
            "title": "",
            "customer": "",
            "jewel": "",
            "material": "",
            
        }
    );

    const setTitle = ({target}) => {
        const title = target.value;
        setOrder( lastValue => ({...lastValue, title}))
    }

    const setCustomer = ({target}) => {
        const customer = target.value;
        setOrder( lastValue => ({...lastValue, customer}))
    }

    const setJewel = ({target}) => {
        const jewel = target.value;
        setOrder( lastValue => ({...lastValue,  jewel}))
    }

    const setMaterial = ({target}) => {
        const material = target.value;
        setOrder( lastValue => ({...lastValue, material}))
    }

    return <>
        <form>
            <input type="text" name="title" onChange={setTitle} value={order.title}></input>
            <input type="text" name="customer" onChange={setCustomer} value={order.customer}></input>
            <input type="text" name="jewel" onChange={setJewel} value={order.jewel}></input>
            <input type="text" name="material" onChange={setMaterial} value={order.material}></input>
        </form>
        <Button name="enviar" onClick={() => createOrder(order)}></Button>
        <div> 
            {JSON.stringify(order)}
        </div>
    </>;
}

export default OrderForm;