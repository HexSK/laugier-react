import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  const LAUGIER_API_URL = import.meta.env.VITE_LAUGIER_API_URL;
  console.log(LAUGIER_API_URL)
  return (
    <Container fluid className="contact-section py-5 align-items-center" id="contact">
      <Row className="justify-content-center my-5 mx-xs-2">
        <Col xs={12} md={8}>
          <h1 className="contact-title mb-1">Contact Us</h1>
          <p className="contact-subtitle mb-4">Reach us on <a href="https://discord.gg/7fRHDDtPEK" className="contact-link" target="_blank" rel="noreferrer">Discord</a> or <a href="https://truckersmp.com" className="contact-link" target="_blank" rel="noreferrer">TruckersMP</a>, or send a message below.</p>
          <Form onSubmit={
            async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const data = new FormData(form);

              console.log(data.get("name"));
              console.log(data.get("email"))
              console.log(data.get("subject"));
              console.log(data.get("message"));
              const res = await fetch(LAUGIER_API_URL + "/website/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: data.get("name"),
                  email: data.get("email"),
                  subject: data.get("subject"),
                  message: data.get("message"),
                }),
              });

              if (res.ok) {
                console.log("is gud");
              } else {
                console.log("is not gud");
              }
            }
          }>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="contact-name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" name="name"/>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="contact-email">
                  <Form.Label>E-Mail Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter E-Mail" name="email"/>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="contact-subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter Subject" name="subject"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact-text">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message here" name="message"/>
            </Form.Group>
            <Button type="submit" className="contact-submit w-100">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;