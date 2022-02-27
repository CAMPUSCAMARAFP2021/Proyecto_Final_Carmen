import Card from 'react-bootstrap/Card';
import Button from "./buttons";


const Jewel = ({jewel, onDelete}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{jewel.name}</Card.Title>
            <Card.Text>{jewel.size}</Card.Text>
            <Card.Text>{jewel.description}</Card.Text>
            { <Button variant="primary" onClick={onDelete}>Eliminar</Button> }
        </Card.Body>
    </Card>

export default Jewel;