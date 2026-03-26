import {Container, Row, Col} from 'react-bootstrap';
import './AboutSection.css';
// import laugierVid from '../../vids/LaugierAlpha.webm';
import laugierLogo from '../../images/Normal/Laugier Small NB.png';

function AboutSection(){
    return(
        <section className="about-section" id="about">
        <Container fluid>
          <Row className="align-items-center g-5">
            <Col xs={12} md={6} className="d-flex justify-content-center">
              {/* <video
                src={laugierVid}
                autoPlay
                loop
                muted
                playsInline
                className="about-image"
              /> */}
              <img 
                src={laugierLogo}
                className = "about-image"
              />
            </Col>
            <Col xs={12} md={6}>
              <h2 className="section-title">About Us</h2>
              <p className="section-description">
                <b>In a world that never stops moving, agriculture remains the backbone of human life — and we are proud to support it virtually.</b> <br/><br/>From grain silos in the heart of France to vast American farmlands, we specialize in agricultural activity within Euro Truck Simulator 2 and American Truck Simulator. Whether it’s bulk crops, farming equipment, or seasonal deliveries, we operate with realism, discipline, and pride.
              </p>
              
              <h3 className="subsection-title mt-5">What do we offer?</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <h4>🚚 Realistic Roleplay</h4>
                  <p>Dive into our <b>immersive RP concept!</b> From managing your fleet to tracking jobs, Laugier Trans mirrors the operations of a real-world company.</p>
                </div>
                <div className="feature-card">
                  <h4>🛠 Our Technology</h4>
                  <p>Our <b>TMS</b> lets you oversee your own profile and all information related. This tool provides realistic features such as a chronotachygraph and bank account.</p>
                </div>
                <div className="feature-card">
                  <h4>❌ What do we NOT require from you?</h4>
                  <ul>
                    <li>To use our company paintjob since you drive your <b>own truck not ours.</b></li>
                    <li>To use our company tag, no matter the multiplayer mode, <b>it's our role to advertise, not yours.</b></li>
                    <li>To complete a monthly quota, <b>your're more than just numbers.</b></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default AboutSection;