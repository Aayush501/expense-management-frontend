import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

const Signup = () => {

    const navigate = useNavigate();

    return (
        <> 
        <div className='signupmain'>
            <div className='signupform'>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder='Enter Name' autoComplete='name' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder='Enter Username' autoComplete='username' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" autoComplete='current-password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Select Start Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                    <Button className='mx-2' variant="warning" type="button" onClick={() => navigate("/")} >
                        Login
                    </Button>
                </Form>
            </div>
        </div>
        </>
    )
}

export default Signup