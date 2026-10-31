import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/userSlice';
import { fetchBanks } from '../redux/slices/banksSlice';
import { texts } from '../application-texts/ApplicationTexts';

function Login() {
  const navigate = useNavigate();
  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(formUsername.trim()==="" || formPassword.trim()===""){
      alert(texts.loginPage.alertMessage);
      return;
    }

    await dispatch(loginUser({username : formUsername, password : formPassword}));
    await dispatch(fetchBanks({}));
  }

  return (
    <>
      <div className='signupmain'>
        <div className='signupform'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{texts.loginPage.usernameOrEmailLabel}</Form.Label>
              <Form.Control 
                value={formUsername} 
                onChange={(e) => { 
                  setFormUsername(e.target.value)
                }}  
                type="text" 
                placeholder={texts.loginPage.usernameOrEmailControlPlaceholder} 
              />
            </Form.Group>
            <Form.Group 
              className="mb-3" 
              controlId="formBasicPassword"
            >
              <Form.Label>{texts.loginPage.passwordLabel}</Form.Label>
              <Form.Control 
                type="password" 
                value={formPassword} 
                placeholder={texts.loginPage.passwordControlPlaceholder} 
                onChange={(e) => {
                  setFormPassword(e.target.value);
                }} 
                autoComplete='current-password' 
              />
            </Form.Group>
            <Button 
              variant="primary" 
              type="submit" 
            >
              {texts.loginPage.submitButton}
            </Button>
            <Button 
              className='mx-2' 
              variant="warning" 
              type="button" 
              onClick={() => navigate("/signup")} 
            >
              {texts.loginPage.signupButton}
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Login