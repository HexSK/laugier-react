import {Container, Nav, Navbar} from 'react-bootstrap';
import laugierLogo from '../../images/Normal/Laugier NB.png';
import './Navigation.css';

function Navigation() {
    return (
        <Navbar expand="lg" className="navbar-custom sticky-top">
            <Container fluid>
                <Navbar.Brand href="/" className="navbar-brand-custom">
                    <img src={laugierLogo} alt="Laugier Trans Logo" height={50}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#home" className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link href="/#about" className="nav-link-custom">About</Nav.Link>
                        <Nav.Link href="/#gallery" className="nav-link-custom">Gallery</Nav.Link>
                        <Nav.Link href="/#contact" className="nav-link-custom">Contact</Nav.Link>
                        <Nav.Link href="/tracking" className="nav-link-custom">Tracking</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;