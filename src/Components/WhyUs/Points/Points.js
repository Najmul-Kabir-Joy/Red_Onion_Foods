import React from 'react';
import imgOne from '../../../Images/Image/adult-blur-blurred-background-687824.png';
import imgTwo from '../../../Images/Image/chef-cook-food-33614.png';
import imgThree from '../../../Images/Image/architecture-building-city-2047397.png';
import iconOne from '../../../Images/ICON/Group 204.png';
import iconTwo from '../../../Images/ICON/Group 1133.png';
import iconThree from '../../../Images/ICON/Group 245.png';
import { Col, Container, Row } from 'react-bootstrap';
const Points = () => {
    return (
        <div>
            <Container>
                <Row xs={1} md={3}>
                    <Col>
                        <div className="img-container">
                            <img src={imgOne} alt="" className='img-fluid' />
                        </div>
                        <div className='ms-4 mt-3' style={{ display: "flex", flexDirection: "row" }}>
                            <div className='me-3'>
                                <img src={iconOne} alt="" />
                            </div>
                            <div style={{ textAlign: "start" }}>
                                <h6>Fast Delivery</h6>
                                <p>Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our future</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="img-container">
                            <img src={imgTwo} alt="" className='img-fluid' />
                        </div>
                        <div className='ms-4 mt-3' style={{ display: "flex", flexDirection: "row" }}>
                            <div className='me-3'>
                                <img src={iconTwo} alt="" />
                            </div>
                            <div style={{ textAlign: "start" }}>
                                <h6>A Good Auto Responder</h6>
                                <p>Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our future</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="img-container">
                            <img src={imgThree} alt="" className='img-fluid' />
                        </div>
                        <div className='ms-4 mt-3' style={{ display: "flex", flexDirection: "row" }}>
                            <div className='me-3'>
                                <img src={iconThree} alt="" />
                            </div>
                            <div style={{ textAlign: "start" }}>
                                <h6>Home Delivery</h6>
                                <p>Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our future</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Points;