import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerList from './components/customer/customerList';
import OrderList from './components/orderlist';
import {Container} from 'react-bootstrap';


import { useState } from 'react';
// import LogOutButton from './components/LogOutButton';



const App = () =>{
  const [jwt, setJwt] = useState(false);
 
  // const onLoginClick = (user, password) => {
  //   login(user,password)
  //    .then((jwt)=> setJwt(jwt))
  //    .catch((error) => console.log('falla'))
  // }
   
  return <Container className="p-3">
     <Container className="p-5 mb-4 bg-light rounded-3">
       <h1 className="headertitle">Welcome To CarmenJewels</h1>
       <hr></hr>
        <br></br>
      
         {/* <LogOutButton onLogOut={() => setJwt(false)}></LogOutButton> */}
         
         <CustomerList jwt={jwt}/>
       
      {/* <Login onLoginClick={onLoginClick}/> */}
       
      
     </Container>
   </Container> 
 }
 
 export default App;