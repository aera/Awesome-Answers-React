import React from 'react';
import {CurrentDateTime} from './CurrentDateTime';
import {Link} from 'react-router-dom';

function NavBar (props) {
  const {user} = props;

  return (
    <nav
      style={{
        padding: '10px',
        display: 'flex',
      }}
    >
      <Link style={{marginRight: '20px'}} to="/">Home</Link>
      <Link style={{marginRight: '20px'}} to="/questions/new">New Question</Link>
      <Link to="/questions">Questions</Link>
      {
        user ? (
          <span
            style={{marginLeft: 'auto', marginRight: '20px'}}
          >
            Hello, {user.full_name}
          </span>
        ) : (
          <Link
            style={{marginLeft: 'auto', marginRight: '20px'}}
            to="/sign_in"
          >
              Sign In
          </Link>
        )
      }
      <CurrentDateTime />
    </nav>
  );
}

export {NavBar};
