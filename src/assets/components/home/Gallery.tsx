import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css';

function Gallery(){
    const images = import.meta.glob("../../images/gallery/*.jpg", {eager: true, as: 'url'});
  const imagesObj = Object.fromEntries(
    Object.entries(images).map(([path, url]) => [path.split('/').pop(), url])
  );
  const imageArray = Object.values(imagesObj);
  return(
    <Container fluid className="gallery-section" id="gallery">
        <div className="gallery-grid">
          {Array.from({ length: Math.ceil(imageArray.length / 3) }).map((_, i) => (
            <Row key={i} className="gallery-row justify-content-center">
              {imageArray.slice(i * 3, (i + 1) * 3).map((imgSrc, j) => (
                <Col key={j} xs={12} sm={6} md={4} className="gallery-col">
                  <img src={imgSrc as string} className="gallery-item"/>
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </Container>
  );
}
export default Gallery;