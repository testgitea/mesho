// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './Routing';
import Footer from './Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routing></Routing>
      </BrowserRouter>
     <Footer></Footer>
    </div>
  );
}

export default App;
