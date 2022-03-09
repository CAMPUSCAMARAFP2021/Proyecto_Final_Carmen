import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerList from './components/customer/customerList';

import {Container} from 'react-bootstrap';


import { useState } from 'react';
// import LogOutButton from './components/LogOutButton';

const styles = {
  headertitle:{
    textAlign : "center",
    color : "#F7BC8D",
    fontSize: 50,
    fontFamily: "fantasy"
  },

  container:{
    textAlign : "center",
    position : "center",
    
  },
}

const App = () =>{
  const [jwt, setJwt] = useState(false);
 
  // const onLoginClick = (user, password) => {
  //   login(user,password)
  //    .then((jwt)=> setJwt(jwt))
  //    .catch((error) => console.log('falla'))
  // }
   
  return <Container className="p-3" style={styles.container}>
     <Container className="p-5 mb-4 bg-light rounded-3" style={styles.container}>
       <h1 className="headertitle" style={styles.headertitle}>Welcome To CarmenJewels</h1>
       <hr></hr>
        <br></br>
      
    
         {/* <LogOutButton onLogOut={() => setJwt(false)}></LogOutButton> */}
         
         <CustomerList jwt={jwt}/>
       
      {/* <Login onLoginClick={onLoginClick}/> */}
       
      
     </Container>
   </Container> 
 }
 
 export default App;