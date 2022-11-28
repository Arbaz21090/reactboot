import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
export const About = () => {
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

        <h2>About Page</h2>
        <p>The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy 
        The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy The quick brown fox jumps right over the alzy dog. The quick brown fox jumps right over the lazy dog. The </p>
        </Container>
    </div>
  )
}
