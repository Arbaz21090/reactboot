import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Table from 'react-bootstrap/Table';

function Lable() {
    return (
        <div>
        <Container>
        <Row className='m-5'>
        <Col>
        <Table striped hover>
        <thead style={{backgroundColor: "#0ccc"}}>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          </tbody>
          </Table>
        </Col>
        </Row>
        </Container>
        </div>
    );
}

export default Lable;