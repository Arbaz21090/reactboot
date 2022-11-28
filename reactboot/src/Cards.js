import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import alen from './images1/alen.jpg';
function Cards() {
    return (
        <div>
            <Container>
            <Row class="justify-content-evenly"><h3 class='text-info'>Bio Data of the Employee:-</h3></Row>
                <Row className='my-5'>
                    <Col>
                    <div class="card-group">
  <div class="card">
    <img src={alen} class="card-img-top" alt="..." style={{height:'250px', width:'250px'}}/>
    <div class="card-body text-primary" style={{height:'250px', width:'250px'}}>
      <h5 class="card-title text-primary">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={alen} class="card-img-top" alt="..." style={{height:'250px', width:'250px'}}/>
    <div class="card-body text-primary" style={{height:'250px', width:'250px'}}>
      <h5 class="card-title text-primary">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={alen} class="card-img-top" alt="..." style={{height:'250px', width:'250px'}}/>
    <div class="card-body text-primary" style={{height:'250px', width:'250px'}}>
      <h5 class="card-title text-primary">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cards;
