import { useState } from "react";
import Button from "./buttons";

//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const Materialform = ({createJewel}) => {
    const [material, setMaterial] = useState(
        {
            "oro": "",
            "plata": "",
            "oro blanco": ""
        }
    );

    const setOro = ({target}) => {
        const oro = target.value;
        setMaterial(lastValue => ({ ...lastValue, oro }))
    }
    const setPlata = ({target}) => {
        const plata = target.value;
        setMaterial(lastValue => ({ ...lastValue, plata }))
    }

    const setOroBlanco = ({ target }) => {
        const oroBlanco = target.value;
        setMaterial(lastValue => ({ ...lastValue, oroblanco }))
    }

    // const setDescription = ({target}) => {
    //     const description = target.value;
    //     setTeam( lastValue => ({...lastValue, description}))
    // }

    return <>
        <form>
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                 <option value={material.oro}>Oro</option>
                 <option value={material.plata}>Plata</option>
                <option value={material.oroblanco}>Oro Blanco</option>
            </select>
            {/* <textarea onChange={setDescription} value={team.description}></textarea> */}
            {/* <DatePicker selected={task.dueDate} onChange={setDate} ></DatePicker> */}
        </form>
        <Button name="enviar" onClick={() => createMaterial(material)}></Button>
        <div>
            {JSON.stringify(material)}
        </div>
    </>;
}

export default Materialform;