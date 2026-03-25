import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  const LAUGIER_API_URL = import.meta.env.VITE_LAUGIER_API_URL;

  const getField = (data: FormData, key: string): string => {
    const value = data.get(key);
    return typeof value === 'string' ? value.trim() : '';
  };

  const buildContactUrl = (): string => {
    if (import.meta.env.DEV) {
      return '/api/website/contact';
    }

    const baseUrl = (LAUGIER_API_URL ?? '').trim().replace(/\/+$/, '');
    return `${baseUrl}/website/contact`;
  };

  return (
    <Container fluid className="contact-section py-5 align-items-center" id="contact">
      <Row className="justify-content-center my-5 mx-xs-2">
        <Col xs={12} md={8}>
          <h1 className="contact-title mb-1">Contact Us</h1>
          <p className="contact-subtitle mb-4">Reach us on <a href="https://discord.gg/7fRHDDtPEK" className="contact-link" target="_blank" rel="noreferrer">Discord</a> or <a href="https://truckersmp.com/vtc/78030" className="contact-link" target="_blank" rel="noreferrer">TruckersMP</a>, or send a message below.</p>
          <Form onSubmit={
            async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const data = new FormData(form);
              const name = getField(data, 'name');
              const email = getField(data, 'email');
              const subject = getField(data, 'subject');
              const message = getField(data, 'message');
              const endpoint = buildContactUrl();

              if (!import.meta.env.DEV && !LAUGIER_API_URL) {
                console.error('Missing VITE_LAUGIER_API_URL.');
                return;
              }

              if (!name || !email || !subject || !message) {
                console.error('Contact form validation failed: all fields are required.');
                return;
              }

              const payload = { name, email, subject, message };

              try {
                const res = await fetch(endpoint, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  },
                  body: JSON.stringify(payload),
                });

                if (res.ok) {
                  console.log('Contact request succeeded.');
                  form.reset();
                  return;
                }

                const errorBody = await res.text();
                console.error(`Contact request failed with ${res.status}.`, errorBody);
              } catch (error) {
                console.error('Contact request failed before reaching the server.', error);
              }
            }
          }>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="contact-name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" name="name" required />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="contact-email">
                  <Form.Label>E-Mail Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter E-Mail" name="email" required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="contact-subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter Subject" name="subject" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact-text">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message here" name="message" required />
            </Form.Group>
            <Button type="submit" className="contact-submit w-100">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
