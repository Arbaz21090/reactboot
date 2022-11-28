import React from 'react';
import { Col} from 'react-bootstrap';
import slider1 from '../images1/slider1.avif';
import slider2 from '../images1/slider2.avif';
import slider3 from '../images1/slider3.avif';
function Slider() {
    return (
        <div>
<section>
    {/* <Row style="overflow-x:'hidden'"> */}
        <Col>
        
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={slider1} class="d-block" alt="..." style={{height:'500px', width:'100vw'}}/>
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={slider2} class="d-block" alt="..." style={{height:'500px', width:'100vw'}}/>
    </div>
    <div class="carousel-item">
      <img src={slider3} class="d-block" alt="..." style={{height:'500px', width:'100vw'}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div> 
        </Col>
    {/* </Row> */}
</section>

        </div>
    );
}

export default Slider;

