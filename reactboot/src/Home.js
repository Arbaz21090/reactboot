import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
 
export const Home = () => {
  return (
    <div>
     <Container>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to= "/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    
                </ul>
            </nav>
        </header>

        <section>
       
        <Row>
        <Col>
            <h2>Welcome to Home Page</h2>
            <p>The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right voert he lzy dog. The quick brown fox jumps right over the lazy dog. The quick brown fox jumps right over the </p>
            <p>The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy 
        The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy dog. The </p>
            </Col>
            </Row>
           
        </section>
        </Container>
    </div>
  )
}
