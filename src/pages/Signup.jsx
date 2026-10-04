import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

const Signup = () => {

    const navigate = useNavigate();

    return (
        <> 
        <div className='signupmain'>
            <div className='signupform'>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder='Enter First Name' autoComplete='FirstName' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder='Enter Last Name' autoComplete='LastName' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder='Enter Username' autoComplete='username' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" autoComplete='current-password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" autoComplete='Enter Email' placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" autoComplete='Enter Phone Number' placeholder="Phone" />
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