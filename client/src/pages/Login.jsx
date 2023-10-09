import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginBody'>
       <div class="mainlogin">
        <input type="checkbox" id="check" aria-hidden="true"/>

        {/* <!-- SIGN UP --> */}
        <div class="signup">
            <form>
                {/* <!-- CHECK & SIGN UP --> */}
                <label for="check" aria-hidden="true">Sign up</label>
                  <div className='signupName' styles="">
                      <input type="text" name="text" placeholder="First Name" required/>
                      <input type="text" name="text" placeholder="Last Name" required/>
                  </div>
                <input type="email" name="email" placeholder="Email" required/>
                <input type="password" name="Password" placeholder="Password" required/>
                <button>Sign up</button>
            </form>

        </div>

        {/* <!-- Log in --> */}
        <div class="login">
            <form>
                {/* <!-- CHECK & Log in --> */}
                <label for="check" aria-hidden="true">Log in</label>
                <input type="text" name="text" placeholder="User name" required/>
                {/* <input type="email" name="email" placeholder="Email" required/> */}
                <input type="password" name="Password" placeholder="Password" required/>
                <button>Log in</button>
            </form>

            <Link to="/reset-password">
              Forgot Password
            </Link>

        </div>
    </div>
    </div>
  )
}

export default Login