import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Container, Row, Col } from 'react-bootstrap';

export default function BadgeMax() {
  return (
    <div>
    <Container>
    <Row className="m-4">
    <Col>
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={99} anchorOrigin= {{vertical:'top', horizontal:'left'}}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100} anchorOrigin= {{vertical:'bottom', horizontal:'left'}}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999}>
        <MailIcon />
    
      </Badge>
    </Stack>
    </Col>
    <Col>
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
      </Stack>
    </Stack>
    </Col>
    </Row>
    </Container>
    </div>
  );
}
