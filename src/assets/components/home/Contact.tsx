import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <Container fluid className="contact-section py-5 align-items-center" id="contact">
      <Row className="justify-content-center my-5 mx-xs-2">
        <Col xs={12} md={8}>
          <h1 className="contact-title mb-1">Contact Us</h1>
          <p className="contact-subtitle mb-4">Reach us on <a href="https://discord.gg/yourserver" className="contact-link" target="_blank" rel="noreferrer">Discord</a> or <a href="https://truckersmp.com" className="contact-link" target="_blank" rel="noreferrer">TruckersMP</a>, or send a message below.</p>
          <Form>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="contact-name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="contact-email">
                  <Form.Label>E-Mail Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter E-Mail" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="contact-subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter Subject" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact-text">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message here" />
            </Form.Group>
            <Button type="submit" className="contact-submit w-100">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;