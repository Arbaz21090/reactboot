import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
 import './components/style.css';
function Car() {
    
    return (
        <div>
        <Container>
        <Row>
        <Col>
       
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-caption">
        <h3>The Quick Brown</h3>
        <p>The quick brown fox jumps right over the lazy dog.</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-caption">
        <h3>Diane L</h3>
        <p>TEXT</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-caption">
        <h3>Randall L</h3>
        <p>TEXT</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-caption">
        <h3>John D.</h3>
        <p>TEXT</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-caption">
        <h3>Jody B.</h3>
        <p>TEXT</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> 
</Col>
</Row>
</Container>
</div>
    );
}

export default Car;