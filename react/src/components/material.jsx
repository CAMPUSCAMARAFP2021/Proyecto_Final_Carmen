import Card from 'react-bootstrap/Card';
import Button from "./buttons";


const Material = ({material, onDelete}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{material.oro}</Card.Title>
            <Card.Text>{material.plata}</Card.Text>
            <Card.Text>{material.oroblanco}</Card.Text>
            { <Button variant="primary" onClick={onDelete}>Eliminar</Button> }
        </Card.Body>
    </Card>

export default Material;