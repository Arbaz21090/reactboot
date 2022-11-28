import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Container,Row, Col } from 'react-bootstrap';

export default function Avatar1() {
  return (
    <div>
    <Container>
    <Row className='m-5'>
    <Col>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1657214059388-a35554015a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
      <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1666694421187-75957423ee77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
      <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1666526320312-d07111a23bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
    </Stack>
    </Col>
    </Row>
    </Container>
    </div>
  );
}
