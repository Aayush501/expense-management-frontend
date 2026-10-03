import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/userSlice';
import { fetchBanks } from '../redux/slices/banksSlice';

function Login() {

  // const {setUsername, setPassword} = useContext(AppContext);
  const navigate = useNavigate();
  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(formUsername.trim()==="" || formPassword.trim()===""){
      alert("please enter the correct values");
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
              <Form.Label>Name</Form.Label>
              <Form.Control value={formUsername} onChange={(e) =>{ setFormUsername(e.target.value)
              }}  type="text" placeholder='Enter Username' autoComplete='username' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={formPassword} placeholder="Password" onChange={(e) => {
                setFormPassword(e.target.value);
              }} autoComplete='current-password' />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
            <Button className='mx-2' variant="warning" type="button" onClick={() => navigate("/signup")} >
              Signup
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Login