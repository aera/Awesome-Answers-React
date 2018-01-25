import React, {Component} from 'react';
import {Token} from '../requests/tokens';

class SignInPage extends Component {
  render () {
    return (
      <main
        className="SignInPage"
        style={{
          padding: '0 20px'
        }}
      >
        <h2>Sign In</h2>
        <form>
          <div>
            <label htmlFor='email'>Email</label> <br />
            <input type='email' id='email' name='email' />
          </div>

          <div>
            <label htmlFor='password'>Password</label> <br />
            <input type='password' id='password' name='password' />
          </div>

          <div>
            <input type='submit' value='Sign In'/>
          </div>
        </form>
      </main>
    )
  }
}

export {SignInPage};
