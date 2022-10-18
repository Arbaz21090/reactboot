import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Row, Col, Card} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Counter() {
    return (
        <div>
        <Container>
        <Row className='justify-content-evenly'>
        <Col xs={4}>
        <p className='text-justify'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
        <Col xs={4} className='mb-4'>
        <Card className='shadow-lg'>
        <Card.Header className='bg-success lead text-white'>
        <h4>Registration</h4>
        </Card.Header>
        <Card.Body style={{backgroundColor: '#ffc'}}>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
          <Form.Text className="text-muted" required value='date=new Date()'>
          </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  value='arbazkhan61@gmial.com' />
          <Form.Text className="text-muted" required aria-readonly>
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone no:</Form.Label>
        <Form.Control type="number" placeholder="Enter email" />
        <Form.Text className="text-muted" required>
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className='m-1'>
      Submit
    </Button>
        </Form>
      
        <Button variant="primary" type="submit" className='m-1'>
        Submit
      </Button>
      <Button variant="info" type="text" className='m-1'>
      Update
    </Button>
    
    <Button variant="info" type="reset" className='m-1'>
    Fetch
  </Button>
  
  <Button variant="info" type="delete" className='m-1'>
Delete
</Button>

        </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        </div>
    );
}

export default Counter;