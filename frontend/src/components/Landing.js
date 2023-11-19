import React, { useState } from 'react';
import { Button, Card, CardBody, Container, Modal, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

function Landing() {
  const [cardData, setCardData] = useState([
    {
      id: 1,
      title: 'Revenge of the Mummy',
      themePark: 'Universal Studios',
      imageSrc: 'https://imgs.search.brave.com/ERgXSZvORUifqHAJiDgv5yxC6e3Q9WDSP9KQF4LpLC8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3Lmhl/eW9ybGFuZG8uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9yZXZl/bmdlLW9mLXRoZS1t/dW1teS5qcGc_Zml0/PTEyMDAsNjAwJnNz/bD0x',
      content: "'Prepare to forfeit your souls!'",
      reviews: [],
    },
    {
      id: 2,
      title: 'Men in Black: Alien Attack',
      themePark: 'Universal Studios',
      imageSrc: 'https://imgs.search.brave.com/K0CXilYYVd32sXJ1yKRIdf9rCrkZycGHqpxPUCPlFgk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmRpc2NvdmVydW5p/dmVyc2FsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ni9NRU4tSU4tQkxB/Q0stQWxpZW4tQXR0/YWNrLVJpZGUuanBn',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      reviews: [],
    },
    {
      id: 3,
      title: 'Hollywood Rip Ride Rockit',
      themePark: 'Hollywood Studios',
      imageSrc: 'https://imgs.search.brave.com/s3sT4q7UDtXSDPFrH36IuzozZ5tth16-iY6G0kWielY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU2/YjkyZmQ2Zjg1MDgy/NDljYWJlZmYwYS8x/NDYwMjMzMTkwMDQ0/LVhLSVhVUldNWVNU/RkI5VkZZNFFVL3Jp/cC1yaWRlLXJvY2tp/dC1jbGltYi1hbmQt/ZHJvcC5qcGc',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      reviews: [],
    },
    {
      id: 4,
      title: 'Hollywood Rip Ride Rockit',
      themePark: 'Hollywood Studios',
      imageSrc: 'https://picsum.photos/300',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      reviews: [],
    },
    {
      id: 5,
      title: 'Hollywood Rip Ride Rockit',
      themePark: 'Hollywood Studios',
      imageSrc: 'https://picsum.photos/300',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      reviews: [],
    },
    {
      id: 6,
      title: 'Hollywood Rip Ride Rockit',
      themePark: 'Hollywood Studios',
      imageSrc: 'https://picsum.photos/300',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      reviews: [],
    },
    {
      id: 7,
      title: 'Hollywood Rip Ride Rockit',
      themePark: 'Hollywood Studios',
      imageSrc: 'https://picsum.photos/300',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      reviews: [],
    },
    {
      id: 8,
      title: 'Hollywood Rip Ride Rockit',
      themePark: 'Hollywood Studios',
      imageSrc: 'https://picsum.photos/300',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      reviews: [],
    },
    {
      id: 9,
      title: 'Hollywood Rip Ride Rockit',
      themePark: 'Hollywood Studios',
      imageSrc: 'https://picsum.photos/300',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      reviews: [],
    },

  ]);

  const [modalShow, setModalShow] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    author: '',
    comment: '',
  });

  const handleModalShow = (id) => {
    setModalShow(id);
  };

  const handleModalHide = () => {
    setModalShow(null);
  };

  const handleReviewChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleReviewSubmit = (e, cardId) => {
    e.preventDefault();
    const updatedCardData = cardData.map((card) =>
      card.id === cardId
        ? { ...card, reviews: [...card.reviews, newReview] }
        : card
    );

    setCardData(updatedCardData);

    setNewReview({
      author: '',
      comment: '',
    });
  };

  return (
    <div id="landingDiv">
      <div id="Cards" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {cardData.map((card, index) => (
          <Col key={card.id} xs={12} md={4} style={{ marginBottom: '20px' }}>
            <Card style={{ width: '90%' }}>
              <Card.Img variant="top" src={card.imageSrc}  style={{ height: '200px', objectFit: 'cover' }} />
              <CardBody>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.content}</Card.Text>
                <Card.Text>Average Rating: {calculateAverageRating(card.reviews)}</Card.Text>
                <Button variant="primary" onClick={() => handleModalShow(card.id)}>
                  Rate It!
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow === card.id}
                  onHide={handleModalHide}
                  title={card.title}
                  content={card.content}
                  imageSrc={card.imageSrc}
                  reviews={card.reviews}
                  newReview={newReview}
                  handleReviewChange={handleReviewChange}
                  handleReviewSubmit={(e) => handleReviewSubmit(e, card.id)}
                />
              </CardBody>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
}

function calculateAverageRating(reviews) {
  console.log('Reviews:', reviews);
  
  if (reviews.length === 0) {
    return 'No Ratings';
  }

  const totalRating = reviews.reduce((sum, review) => {
    console.log('Review:', review);
    return sum + parseInt(review.rating, 10);
  }, 0);
  
  const averageRating = totalRating / reviews.length;
  console.log('Total Rating:', totalRating);
  console.log('Average Rating:', averageRating);

  return averageRating.toFixed(1);
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={4}>
              <img src={props.imageSrc} alt={props.title} className="img-fluid" />
            </Col>
            <Col md={8}>
              <h4>{props.title}</h4>
              <h5>{props.themePark}</h5>
              <p>{props.content}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
              <h5>Reviews</h5>
              {props.reviews.map((review, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                  <Row>
                    <Col>
                      <strong>{review.author}</strong>
                    </Col>
                    <Col>
                      <div style={{ textAlign: 'right' }}>
                        Rating: {review.rating}
                      </div>
                    </Col>
                  </Row>
                  <div>{review.comment}</div>
                </div>
              ))}

              <Form onSubmit={props.handleReviewSubmit}>
                <Form.Group controlId="author">
                  <Form.Label>Your Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="author"
                    value={props.newReview.author}
                    onChange={props.handleReviewChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="rating">
                  <Form.Label>Rating (1-5):</Form.Label>
                  <Form.Control
                    type="number"
                    name="rating"
                    value={props.newReview.rating}
                    onChange={props.handleReviewChange}
                    min="1"
                    max="5"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="comment">
                  <Form.Label>Your Review:</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="comment"
                    value={props.newReview.comment}
                    onChange={props.handleReviewChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">Submit Review</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Landing;