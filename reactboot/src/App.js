import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import banner from './images/banner.jpg';
import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import Counter from './components/counter';
import Lable from './components/table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './components/style.css';


function App() {
  return (
    <div>

      
        
          <nav class="navbar navbar-expand-lg  bg-dark">
            <div class="container">
              <a class="navbar-brand text-white" href="#"><div class="text-xl font-extrabold ...">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                GOOGLE
              </span>
            </div></a>
              <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
        <i class="fas fa-bars fs-1 text-white"></i>
                </span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                  <a class="nav-link text-white " aria-current="page" href="#"><div class="text-sm font-extrabold ...">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                    HOME
                  </span>
                </div></a>
                  <a class="nav-link text-white" href="#"><div class="text-sm font-extrabold ...">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                    ABOUT
                  </span>
                </div></a>
                  <a class="nav-link text-white" href="#"><div class="text-sm font-extrabold ...">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                    CONTACT
                  </span>
                </div></a>
                  <a class="nav-link text-white"><div class="text-sm font-extrabold ...">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                    SERVICES
                  </span>
                </div></a>
                </div>
              </div>
            </div>
          </nav>
    
       
<div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100" id='slider1'
            src={image1}
            alt="First slide"
            style={{ height: '100vh' }} />
          <Carousel.Caption style={{ color: 'black' }}>
            <h3>SAMSUNG MOBILE</h3>
            <p>This Mobile is Best for the Users</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" id='slider1'
            src={image2}
            alt="First slide"
            style={{ height: '100vh' }} />
          <Carousel.Caption style={{ color: 'black' }}>
            <h3>DELL LAPIE</h3>
            <p>Dell is good lapie for the order</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" id='slider1'
            src={image3}
            style={{ height: '100vh' }}
            alt="Second slide" />

          <Carousel.Caption style={{ color: 'white' }}>
            <h3>BURGER</h3>
            <p>|</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
</div>
      <div>
        <Container>
          <Row className='my-4'>
            <Col sm={7}>
              <img src={banner} class="img-fluid" alt="..." width={900} height={400}></img>
            </Col>
            <Col sm={5}>
              <Card className='mt-2'>

                <Card.Body>
                  <Card.Title>
                    <div class="text-xl font-extrabold ...">
                      <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        Apple: "Think Different"
                      </span>
                    </div>
                  </Card.Title>
                  <Card.Text style={{ text: 'justify' }}>
                    The quick brown fox jumps right over the lazy dog. The quick
                    bronw fox jumps right over the lazy dog. The quick brown fox jumps
                    The quick broewn fox jumps right over the lazy dog. The quick brown fox


                  </Card.Text>
                  <Button variant="primary">Call to Actor</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row id='strip'>
            <Col>
              <p>The quick brown fox jumsps right over the lazy dog. The quick brown fox jumsp right over the lazy dog.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div class='my-5'>
        <Container>
          <Row className='mx-3 g-5 justify-content-evenly'>
            <Col>
              <Card className='shadow-lg'>
                <Card.Img variant="top" src={card2} />
                <Card.Body>
                  <Card.Title>
                    <div class="text-2xl font-extrabold ...">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        Development
                      </span>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='shadow-lg'>
                <Card.Img variant="top" src={card2} />
                <Card.Body>
                  <Card.Title><div class="text-2xl font-extrabold ...">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                      Health
                    </span>
                  </div></Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='shadow-lg'>
                <Card.Img variant="top" src={card3} />
                <Card.Body>
                  <Card.Title><div class="text-2xl font-extrabold ...">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                      Technical
                    </span>
                  </div></Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    <div className='bg-dark text-white d-grid text-center my-3 pt-4'>
        <Container>
          <Row>
            <Col>
              <p>Copyright &copy; Your Website 2021</p>
            </Col>
          </Row>
        </Container>
      </div>
    

    </div>

    //   <div>
    //     <div class="text-5xl font-extrabold ...">
    //      <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    //     Hello world! 
    //  </span>
    //  </div>
    //      <Navbar bg="dark" variant="dark">
    //      <Container>
    //        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //      <Nav className="ms-auto">
    //          <Nav.Link href="#home"  className='text-white'>Home</Nav.Link>
    //          <Nav.Link href="#features"  className='text-white'>Features</Nav.Link>
    //          <Nav.Link href="#pricing"  className='text-white'>Pricing</Nav.Link>
    //       </Nav>
    //     </Container>
    //        </Navbar>


    //     <Container>
    //     <Row className='mt-3'>
    //     <Col>
    //     <p className='bg-info p-5 bg-gradient'>
    //     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    //     Lorem Ipsum has been the industry's standard dummy text ever since the
    //     1500s, when an unknown printer took a galley of type and scrambled it to
    //     make a type specimen book. It has survived not only five centuries, but
    //     also the leap into electronic typesetting, remaining essentially
    //     unchanged. It was popularised in the 1960s with the release of Letraset
    //     sheets containing Lorem Ipsum passages, and more recently with desktop
    //     publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    //     </p>
    //     </Col>
    //     <Col>
    //     <p className='bg-primary p-5 bg-gradient'>
    //     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    //     Lorem Ipsum has been the industry's standard dummy text ever since the
    //     1500s, when an unknown printer took a galley of type and scrambled it to
    //     make a type specimen book. It has survived not only five centuries, but
    //     also the leap into electronic typesetting, remaining essentially
    //     unchanged. It was popularised in the 1960s with the release of Letraset
    //     sheets containing Lorem Ipsum passages, and more recently with desktop
    //     publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    //     </p>
    //     </Col>
    //     </Row>
    //     </Container>
    //     <Container>
    //     <Alert variant="danger">
    //     <Alert.Heading>Hey, nice to see you</Alert.Heading>
    //     <p>
    //       Aww yeah, you successfully read this important alert message. This
    //       example text is going to run a bit longer so that you can see how
    //       spacing within an alert works with this kind of content.
    //     </p>
    //     </Alert>
    //     </Container>
    //     <Counter/>
    //     <Lable/>
    //     <Container>
    //     <Row className='d-flex justify-content-center mb-4'>
    //     <Col sm={4}>
    //     <Form.Group controlId="formFile" className="mb-3">
    //     <Form.Label>Default file input example</Form.Label>
    //     <Form.Control type="file" className='bg-info' />
    //   </Form.Group>
    //   <Form.Select aria-label="Default select example">
    //   <option>Open this select menu</option>
    //   <option value="1">One</option>
    //   <option value="2">Two</option>
    //   <option value="3">Three</option>
    // </Form.Select>
    // <Form.Check 
    // type="switch"
    // id="custom-switch"
    // label="Check this switch"
    // />
    //   </Col>
    //   </Row>
    //   </Container>
    //     </div>

  );
}

export default App;
