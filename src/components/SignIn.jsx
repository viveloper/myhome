import React, { useState } from 'react';
import './SignIn.css';
import Services from '../services';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkMeOut, setCheckMeOut] = useState(false);

  const handleChange = e => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    }
    else if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
    else if (e.target.type === 'checkbox') {
      setCheckMeOut(e.target.checked);
    }
    else {

    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const user = await Services.signIn(email, password);
      localStorage.setItem('myhome-user', JSON.stringify(user));
      console.log(user.data);
      console.log('signin sueccess');
    }
    catch(error){
      console.error(error.response.data);
      console.log('signin failure');
    }
  }

  return (
    <div className="signin container">
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={checkMeOut}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default SignIn;