import React from 'react';
import img1 from './images/10001.jpg'
import img2 from './images/10002.jpg'
import img3 from './images/10003.jpg'
import img4 from './images/10004.jpg'
import {Row, Col, Container}  from 'react-bootstrap';
function ImgComponent1() {
    return (
        <div>
        <Container>
<Row className='my-5'>
<Col>
<img src={img4} class="img-thumbnail" alt="..."></img>
<p>Earthen Bottle</p>
<span class="fw-bolder">$48</span>
</Col>
<Col>
<img src={img3} class="img-thumbnail" alt="..."></img>
<p>NoMod Tumbler</p>
<span class="fw-bolder">$35</span>
</Col>
<Col>
<img src={img2} class="img-thumbnail" alt="..."></img>
<p>Focus Paper Refill</p>
<span class="fw-bolder">$89</span>
</Col>
<Col>
<img src={img1} class="img-thumbnail" alt="..."></img>
<p>Mochined Mechanical Pancil</p>
<span class="fw-bolder">$38</span>
</Col>
</Row>

</Container>
</div>  
    );
}

export default ImgComponent1;