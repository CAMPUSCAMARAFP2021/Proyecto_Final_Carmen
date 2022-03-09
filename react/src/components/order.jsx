import { ButtonToolbar, Button , Card, ButtonGroup } from 'react-bootstrap';



const styles = {
    card:{
        alignItems: "center",
      
    }
  }
 


const Order = ({order, onDelete, addJewel}) =>  
    <Card style={styles.card}>
        <Card.Body style={{ alignItems : "center" }}>
            <Card.Title>{order.title}</Card.Title><br></br>
            <ButtonToolbar>
            <ButtonGroup aria-label="Third group">
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Third group">
            <Button variant="outline-info" oonClick={jewelShow}>Añadir Joya</Button>
            
            </ButtonGroup>
            </ButtonToolbar>
        </Card.Body>
    </Card>


    // <div>
    //     <input type="checkbox"></input>
    //     <p className="title">{task.title}</p>
    //     <p className="author">{task.author}</p>
    //     <Button variant="primary" onClick={onDelete}>Eliminar</Button>
    // </div>

export default Order;