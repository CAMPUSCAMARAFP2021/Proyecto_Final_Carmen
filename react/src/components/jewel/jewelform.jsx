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
        <form>
            <input type="text" name="name" onChange={setName} value={jewel.name}></input>
            <Form.Group  controlId="my_multiselect_field">
            <Form.Label>My multiselect</Form.Label>
            <Form.Control as="select" multiple value={"jewel"}>
        <option value="field1">Field 1</option>
        <option value="field2">Field 2</option>
        <option value="field3">Field 3</option>
      </Form.Control>
    </Form.Group>

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