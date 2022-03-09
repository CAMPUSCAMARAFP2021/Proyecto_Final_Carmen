import {  Button , Card} from 'react-bootstrap';
import JewelList from './jewel/jewellist';



const styles = {
    card:{
        alignItems: "center",
        backgroundColor : "#DCF7E3"
      
    }
  }

const Order = ({order, jwt, onDelete, addJewel}) =>  
    <Card style={styles.card}>
        <Card.Body style={{ alignItems : "center", backgroundColor:"#DCF7E3" }}>
            <Card.Title>{order.title}</Card.Title><br></br>
            

            <Button variant="success" onClick={onDelete}>Eliminar</Button>
            
            
            
            <JewelList order={order} jwt={jwt}></JewelList>
        </Card.Body>
    </Card>
   


    // <div>
    //     <input type="checkbox"></input>
    //     <p className="title">{task.title}</p>
    //     <p className="author">{task.author}</p>
    //     <Button variant="primary" onClick={onDelete}>Eliminar</Button>
    // </div>

export default Order;