import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
import GetData from './GetData';
import Electromics from './Electronics';
import Watchs from './Watchs';
import Shoes from './Shoes';
import Cloths from './Cloths';
import Login from './Login';
import Logout from './Logout';
import Mobile from './Mobile';
import Leptop from './Leptop';
import Upload from './Upload';

function Routing()
{
    return(
        <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Mobile">Mobile</Nav.Link>
            <Nav.Link href="/Cloths">Cloths</Nav.Link>
            <Nav.Link href="/Leptop">Leptop</Nav.Link>
            <Nav.Link href="/watchs">Watchs</Nav.Link>
            <Nav.Link href="/shoes">Shoes</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
            <Nav.Link href="/upload">Upload</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<GetData></GetData>}></Route>
        <Route path='/Mobile' element={<Mobile></Mobile>}></Route>
        <Route path='/Leptop' element={<Leptop></Leptop>}></Route>
        <Route path='/watchs' element={<Watchs></Watchs>}></Route>
        <Route path='/shoes' element={<Shoes></Shoes>}></Route>
        <Route path='/Cloths' element={<Cloths></Cloths>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
        <Route path='/upload' element={<Upload></Upload>}></Route>
      </Routes>
        </div>
    )
}
export default Routing