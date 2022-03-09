import { ButtonToolbar, Button , Card, ButtonGroup ,  Stack} from 'react-bootstrap';



const styles = {
    card:{
        alignItems: "center",
        backgroundColor : "#DCF7E3"
      
    }
  }

const Order = ({order, onDelete, addJewel}) =>  
    <Card style={styles.card}>
        <Card.Body style={{ alignItems : "center", backgroundColor:"#DCF7E3" }}>
            <Card.Title>{order.title}</Card.Title><br></br>
            <ButtonToolbar>
            <Stack direction="horizontal" gap={3}>
            <ButtonGroup aria-label="Third group">
            <Button variant="success" onClick={onDelete}>Eliminar</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Third group">
            <Button variant="outline-success" onClick={addJewel}>Añadir Joya</Button>
            </ButtonGroup>
            </Stack>
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