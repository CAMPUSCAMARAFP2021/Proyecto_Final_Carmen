import { useState } from "react";
import {Form , Button} from "react-bootstrap";



//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const JewelForm = ({createJewel}) => {
    const [jewel, setJewel] = useState(
        {
            "name": "",
            "material": [],
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setJewel(lastValue => ({ ...lastValue, name }))
    }

    const setMaterial = ({ target }) => {
        const material = target.value;
        setJewel(lastValue => ({ ...lastValue, material }))
    }

    // const setDescription = ({target}) => {
    //     const description = target.value;
    //     setTeam( lastValue => ({...lastValue, description}))
    // }

    return <>
    <br></br>
        <form>
            <input type="text" name="name" onChange={setName} value={jewel.name}></input>
           
<br></br>
            {/* <textarea onChange={setDescription} value={team.description}></textarea> */}
            {/* <DatePicker selected={task.dueDate} onChange={setDate} ></DatePicker> */}
        </form>
        <Button name="enviar" onClick={() => createJewel(jewel)}>Agregar joya</Button>
        <div>
            {JSON.stringify(jewel)}
        </div>
    </>;
}

export default JewelForm; 