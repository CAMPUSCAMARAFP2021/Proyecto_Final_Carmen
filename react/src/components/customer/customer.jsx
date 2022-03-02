import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OrderList from '../orderlist';



const Customer = ({ customer}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{customer.name}</Card.Title>
            <Card.Text>{customer.subName}</Card.Text>
            <Card.Text>{customer.email}</Card.Text>
           { customer.orders ? <Card.Text>{customer.orders.map(order=>order.title )}</Card.Text> : <Card.Text>No hay ordenes</Card.Text>}
           <OrderList customer={customer}></OrderList>
        </Card.Body>
    </Card>


    // <div>
    //     <input type="checkbox"></input>
    //     <p className="title">{task.title}</p>
    //     <p className="author">{task.author}</p>
    //     <Button variant="primary" onClick={onDelete}>Eliminar</Button>
    // </div>

export default Customer;