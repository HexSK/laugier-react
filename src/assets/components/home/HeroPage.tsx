import {Container, Col, Row} from 'react-bootstrap';
import laugierLogo from '../../images/Normal/Laugier NB.png';
import './HeroPage.css';

function HeroPage(){
    return(
        <Container fluid className="h-100 hero-section" id="home">
          <Row className="h-100 align-items-center">
            <Col xs={12} md={6} className="text-center text-md-end mb-4 mb-md-0 d-flex justify-content-center justify-content-md-end">
              <img src={laugierLogo} alt="Laugier Trans Logo" className="hero-logo" />
            </Col>
            <Col xs={12} md={6}>
              <h1 className="hero-title">Laugier Trans</h1>
              <p className="hero-subtitle">Agricultural Contracting</p>
              <div className="button-group">
                <button className="hero-button">Get Started</button>
                <button className="hero-button">Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
    );
}

export default HeroPage;