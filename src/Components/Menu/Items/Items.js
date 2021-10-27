import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Items = (props) => {
    const { id, img, price, description, food } = props.item;

    return (
        <div>
            <div>
                <Link to={`/item/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img} height="320px" className='p-3' />
                            <Card.Body>
                                <Card.Title>{food}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Card.Text className='fw-bold fs-'>
                                    ${price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Link>
            </div>
        </div>
    );
};

export default Items;