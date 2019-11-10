import React from 'react';
import './Home.css';
import withAuth from '../hoc/withAuth';

const Home = props => {
  const { user, history } = props;
  const handleClickLogout = () => {
    localStorage.removeItem('myhome-user');
    history.push('/signin');
  }
  return (
    <div>
      <h2>Home</h2>
      <div>
        <div>
          <p>{user.username}</p>
          <button type="button" className="btn btn-secondary" onClick={handleClickLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Home);