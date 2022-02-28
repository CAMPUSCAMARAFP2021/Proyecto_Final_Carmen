import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Order = ({order, onDelete}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{order.title}</Card.Title>
            <Card.Text>{order.customer}</Card.Text>
            <Card.Text>{order.jewel}</Card.Text>
            <Card.Text>{order.material}</Card.Text>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>


    // <div>
    //     <input type="checkbox"></input>
    //     <p className="title">{task.title}</p>
    //     <p className="author">{task.author}</p>
    //     <Button variant="primary" onClick={onDelete}>Eliminar</Button>
    // </div>

export default Order;