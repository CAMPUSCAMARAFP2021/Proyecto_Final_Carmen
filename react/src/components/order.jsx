import { ButtonToolbar, Button , Card, ButtonGroup ,  Stack} from 'react-bootstrap';



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
            <Stack direction="horizontal" gap={3}>
            <ButtonGroup aria-label="Third group">
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Third group">
            <Button variant="outline-info" onClick={addJewel}>Añadir Joya</Button>
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