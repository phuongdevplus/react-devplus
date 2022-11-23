import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import OurMainContainer from './styles';


function OurMain() {
  return (
    <OurMainContainer className="our__main">
      <Container className="our__main-container">
        <Row className="our__main-title">
          <h1>Our main campus</h1>
        </Row>
        <Row className="content__courses-item">
          <Col lg={4} className="courses__item reveal">
            <img src="https://devplus.edu.vn/assets/images/devplus/One_plus.png" alt="" />
            <span>One plus (+) Programing foundation</span>
          </Col>
          <Col lg={4} className="courses__item reveal">
            <img src="https://devplus.edu.vn/assets/images/devplus/Two_plus.png" alt="" />
            <span>Two plus (++) Skill up to to get ready</span>
          </Col>
          <Col lg={4} className="courses__item reveal">
            <img src="https://devplus.edu.vn/assets/images/devplus/Three_plus.png" alt="" />
            <span>Three plus (+++) How to become a senior</span>
          </Col>
        </Row>
      </Container>
    </OurMainContainer>
  );
}

export default OurMain;