import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import { texts } from '../application-texts/ApplicationTexts';

const Signup = () => {

    const navigate = useNavigate();

    return (
        <> 
        <div className='signupmain'>
            <div className='signupform'>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>{texts.signupPage.firstNameLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.signupPage.firstNamePlaceholder} autoComplete='FirstName' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>{texts.signupPage.lastNameLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.signupPage.lastNamePlaceholder} autoComplete='LastName' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>{texts.signupPage.usernameLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.signupPage.usernamePlaceholder} autoComplete='username' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>{texts.signupPage.passwordLabel}</Form.Label>
                        <Form.Control type="password" placeholder={texts.signupPage.passwordPlaceholder} autoComplete='current-password' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{texts.signupPage.emailLabel}</Form.Label>
                        <Form.Control type="email"  placeholder={texts.signupPage.emailPlaceholder} autoComplete='Enter Email' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>{texts.signupPage.phoneLabel}</Form.Label>
                        <Form.Control type="tel" placeholder={texts.signupPage.phonePlaceholder} autoComplete='Enter Phone Number' />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        {texts.signupPage.submitButton}
                    </Button>
                    <Button className='mx-2' variant="warning" type="button" onClick={() => navigate("/")} >
                        {texts.signupPage.loginButton}
                    </Button>
                </Form>
            </div>
        </div>
        </>
    )
}

export default Signup