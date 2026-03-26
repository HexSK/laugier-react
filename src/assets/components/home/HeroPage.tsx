import {Container, Col, Row} from 'react-bootstrap';
import laugierLogo from '../../images/Big/Laugier White.png';
import './HeroPage.css';

function HeroPage(){
    return(
        <Container fluid className="h-100 hero-section" id="home">
          <Row className="h-100 align-items-center justify-content-center">
            <Col xs={12} md={12} className="text-center mb-4 d-flex flex-column align-items-center">
              <img src={laugierLogo} alt="Laugier Trans Logo" className="hero-logo" />
              <div className="button-group justify-content-center">
                <button className="hero-button">Get Started</button>
                <button className="hero-button">Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
    );
}

export default HeroPage;