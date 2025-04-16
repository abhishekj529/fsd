import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import CMR_LOGO from "../assets/CMR_LOGO.png";
const Layout=()=>{
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                <img alt="" src={CMR_LOGO} width="30" height="30"
                className="d-inline-block align-top"/>{''}
                REACT SPA
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="Profile">Profile</Nav.Link>
                    <Nav.Link href="Contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Outlet/>
        </>

    );
};
export default Layout;