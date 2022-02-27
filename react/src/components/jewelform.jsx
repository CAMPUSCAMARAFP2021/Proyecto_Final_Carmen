import { useState } from "react";
import Button from "./buttons";

//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const JewelForm = ({createJewel}) => {
    const [jewel, setJewel] = useState(
        {
            "name": "",
            "talla": "",
            "marerial": ""
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setJewel(lastValue => ({ ...lastValue, name }))
    }
    const setSize = ({target}) => {
        const size = target.value;
        setJewel(lastValue => ({ ...lastValue, size }))
    }

    const setdescription = ({ target }) => {
        const description = target.value;
        setJewel(lastValue => ({ ...lastValue, description }))
    }

    // const setDescription = ({target}) => {
    //     const description = target.value;
    //     setTeam( lastValue => ({...lastValue, description}))
    // }

    return <>
        <form>
            <input type="text" name="name" onChange={setName} value={jewel.name}></input>
            <input type="text" name="talla" onChange={setSize} value={jewel.size}></input>
            <input type="text" name="player" onChange={setdescription} value={jewel.description}></input>
            
            {/* <textarea onChange={setDescription} value={team.description}></textarea> */}
            {/* <DatePicker selected={task.dueDate} onChange={setDate} ></DatePicker> */}
        </form>
        <Button name="enviar" onClick={() => createJewel(jewel)}></Button>
        <div>
            {JSON.stringify(jewel)}
        </div>
    </>;
}

export default JewelForm;