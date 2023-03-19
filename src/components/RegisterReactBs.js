import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app); 

const RegisterReactBs = () => {
  const [success, setSuccess] = useState(false);

  const handleRegister = event => {
    
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setSuccess(true);
      form.reset();
    })
    .catch(error => {
      console.error('error', error);
      // setPasswordError(error.message)
    })

  }
    return (
        <div className='w-50 mx-auto mt-5'> 
      <Form onSubmit={handleRegister}> 

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>
      {success && <p className='text-success'>Registered successfully</p>}
      
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
        </div>
    );
};

export default RegisterReactBs;