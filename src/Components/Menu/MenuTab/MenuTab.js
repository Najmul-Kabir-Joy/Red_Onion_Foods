import React, { useEffect, useState } from 'react';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useMenu from '../../Hooks/useMenu';
import Items from '../Items/Items';

const MenuTab = () => {
    const { breakfast, dinner, lunch } = useMenu();
    return (
        <div>
            <Container>
                <Tabs defaultActiveKey="home" variant="tabs" id="uncontrolled-tab-example" className="mb-3" style={{ display: "flex", justifyContent: "center" }}>
                    <Tab eventKey="home" title="Breakfast">
                        <Row xs={1} md={3} className="g-5 mb-5">
                            {
                                breakfast.map(item => <Items key={item.id} item={item}></Items>)
                            }
                        </Row>
                    </Tab>
                    <Tab eventKey="profile" title="Lunch">
                        <Row xs={1} md={3} className="g-5 mb-5">
                            {
                                lunch.map(item => <Items key={item.id} item={item}></Items>)
                            }
                        </Row>
                    </Tab>
                    <Tab eventKey="contact" title="Dinner">
                        <Row xs={1} md={3} className="g-5 mb-5">
                            {
                                dinner.map(item => <Items key={item.id} item={item}></Items>)
                            }
                        </Row>
                    </Tab>
                </Tabs>
                <Link className='btn btn-danger rounded-pill px-5' to='/menu'>See All</Link>
            </Container>
        </div>
    );
};

export default MenuTab;