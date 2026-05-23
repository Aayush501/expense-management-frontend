import React, { useState } from 'react'
// import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import AppContext from '../AppContext';
import { loginSuccessful } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {

  // const {setUsername, setPassword} = useContext(AppContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(formUsername.trim()==="" || formPassword.trim()===""){
      alert("please enter the correct values");
      return;
    }

    fetch('/data/Users.json').then(async(res) => await res.json()).then((j) => {
      for(let obj of j){
        if(obj.username===formUsername && obj.password===formPassword){
          dispatch(loginSuccessful({username: formUsername, password : formPassword}));
        }
        else if(obj.username===formUsername && obj.password!==formPassword){
          alert("Invalid Password");
        } else {
          alert("User Not Found");
        }
      }
    });
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