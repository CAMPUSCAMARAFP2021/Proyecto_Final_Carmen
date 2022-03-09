import Card from 'react-bootstrap/Card';

import OrderList from '../orderlist';

const styles = {
    title:{
      textAlign : "center",
      color : "#006B46",
      fontSize: 30,
      
    },
    card:{
      margin:" 0 auto" ,/* Added */
        float:"none" , /* Added */
        marginBottom: "10px" , /* Added */
        width: '50rem', 
        textAlign: "center",
        
    }
  }

const Customer = ({ customer}) =>  
    <Card style={styles.card}>
        <Card.Body style={{ alignItems: "center", backgroundColor : "#DCF7E3"}}>
            <Card.Title style={styles.title}>{customer.name}</Card.Title>
            <Card.Text>{customer.subName}</Card.Text>
            <Card.Text>{customer.email}</Card.Text>
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