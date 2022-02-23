import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JewelList from './components/jewelslist';
import {Container} from 'react-bootstrap';


function App() {
  return <Container className="p-3">
  <Container className="p-5 mb-4 bg-light rounded-3">
    <h1 className="header">Welcome To CarmenJewels</h1>
      <JewelList/>
  </Container>
</Container> 
}

export default App;