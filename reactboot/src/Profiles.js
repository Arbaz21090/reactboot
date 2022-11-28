import React from 'react';
import { Space, Typography } from 'antd';

import { Container } from 'react-bootstrap';
import alen from './images1/alen.jpg';

import {Row, Col} from 'react-bootstrap';
const { Text, Link } = Typography;
function Profile() {
    return (
        <div>
            <Container>
                <Row className='mt-4'>
                    <div class="col-md-4">
                    <img src={alen} class="img-thumbnail rounded-circle mx-auto d-block" alt="..." style={{width:'125px', height:'125px'}}/>
                    <Text><h4 class="text-center text-warning">James Anderson</h4></Text>

                 
                    <p class='text-center lh-sm'>Software Developer<br/>
                    UI Designer<br/>
                New York, USA</p>
                    </div>
                    <Col>
                    
                    <img src={alen} class="img-thumbnail rounded-circle mx-auto d-block" alt="..." style={{width:'125px', height:'125px'}}/>
                   <Text><h4 class='text-center  text-warning'>Kevin Klein</h4></Text> 
                    <p class='text-center lh-sm'>Software Developer<br/>
                    UI Designer<br/>
                  New York, USA</p>
                
                    </Col>
                    <Col>
                    <img src={alen} class="img-thumbnail rounded-circle mx-auto d-block" alt="..." style={{width:'125px', height:'125px'}}/>
                  <Text>  <h4 class='text-center text-warning'>Alen Musk</h4></Text>
                    <p class='text-center lh-sm'>Software Developer<br/>
                    UI Designer<br/>
                New York, USA</p>
                    </Col>
                    <Col>
                    <img src={alen} class="img-thumbnail rounded-circle mx-auto d-block" alt="..." style={{width:'125px', height:'125px'}}/>
                   <Text> <h4 class='text-center text-warning'>Dick and Herry</h4></Text>
                    <p class='text-center lh-sm'>Software Developer<br/>
                    UI Designer<br/>
             New York, USA</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;
