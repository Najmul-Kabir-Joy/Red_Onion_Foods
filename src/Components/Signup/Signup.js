import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg from '../../Images/bannerbackground.png';
import logo from '../../Images/logo2.png';

const Signup = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, minHeight: '100vh', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src={logo} alt="" width="25%" className='my-5' />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="danger" type="submit" style={{ width: '100%' }}>
                        Sign Up
                    </Button>
                    <Button variant="danger" type="submit" className='my-5' style={{ width: '100%' }}>
                        <i className="fab fa-google me-2"></i> Google Sign in
                    </Button>
                    <Link to='/login' className='text-danger'>Already have an account? Try login</Link>
                </Form>

            </div>
        </div>
    );
};

export default Signup;