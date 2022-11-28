import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import alen from './images1/alen.jpg';
function Profile() {
    return (
        <div>
            <Container>
                <Row className='mt-5'>
                <h2 className='text-info border-bottom'>
Profile:-
                </h2>
                </Row>
<Row className='my-5 sm:Col'>
                    <Col>

<h5 class="text-primary">Calvin Klein</h5>
<p class="text-secondary">Software Developer
Software Developer</p>
<h5 class="text-primary">Calvin Klein</h5>
<p class="text-secondary">Software Developer
Software Developer</p>
<h5 class="text-primary">Calvin Klein</h5>
<p class="text-secondary">Software Developer
Software Developer</p>                
  </Col>
                    <Col>
<h4 class="text-primary">About</h4>
<p class="text-secondary">The quick brown fox
The quick brown fox</p>
<h4 class="text-primary">About</h4>
<p class="text-secondary">The quick brown fox
The quick brown fox</p>
<h4 class="text-primary">About</h4>
<p class="text-secondary">The quick brown fox
The quick brown fox</p>
                    </Col>
                    <Col>
<img src={alen} style={{height:'250px', borderRadius:'10%'}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;
