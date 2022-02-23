import Card from 'react-bootstrap/Card';
import Button from "./buttons";


const Jewel = ({jewel}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{jewel.name}</Card.Title>
            <Card.Text>{jewel.description}</Card.Text>
            {/* <Button variant="primary" onClick={onDelete}>Eliminar</Button> */}
        </Card.Body>
    </Card>


    // <div>
    //     <input type="checkbox"></input>
    //     <p className="title">{task.title}</p>
    //     <p className="author">{task.author}</p>
    //     <Button variant="primary" onClick={onDelete}>Eliminar</Button>
    // </div>

export default Jewel;