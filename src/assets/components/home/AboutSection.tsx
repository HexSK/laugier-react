import {Container, Row, Col} from 'react-bootstrap';
import './AboutSection.css';
import laugierVid from '../../vids/LaugierAlpha.webm';

function AboutSection(){
    return(
        <section className="about-section" id="about">
        <Container fluid>
          <Row className="align-items-center g-5">
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <video
                src={laugierVid}
                autoPlay
                loop
                muted
                playsInline
                className="about-image"
              />
            </Col>
            <Col xs={12} md={6}>
              <h2 className="section-title">About Us</h2>
              <p className="section-description">
                Founded by FSimulation, our virtual company was created to bring an extra layer of authenticity to your American Truck Simulator (ATS) and Euro Truck Simulator 2 (ETS2) adventures. Whether it's tracking jobs, managing a fleet, or simulating a company's economic situation, we're here to elevate your trucking experience.
              </p>
              
              <h3 className="subsection-title mt-5">What do we offer?</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <h4>🚚 Realistic Roleplay</h4>
                  <p>Dive into our immersive RP concept! From managing your fleet to tracking jobs, Laugier Trans mirrors the operations of a real-world company.</p>
                </div>
                <div className="feature-card">
                  <h4>🛠 Our Technology</h4>
                  <p>Our DriveConnect system lets you oversee your own profile and all information related. This tool provides realistic features such as a chronotachygraph and bank account.</p>
                </div>
                <div className="feature-card">
                  <h4>📋 Join the Team</h4>
                  <p>Be ready to embrace the RP vision of our company and own a legal copy of ETS2/ATS on Steam.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default AboutSection;