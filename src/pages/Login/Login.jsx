import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup, login, resetPass } from '../../config/firebase'

const Login = () => {

    const [currState, setCurrState] = useState("Sign Up")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (currState === "Sign Up") {
            signup(userName, email, password);
        } else {
            login(email, password)
        }
    }

    return (
        <div className='login'>
            <img src={assets.logo_big} alt="" className="logo" />
            <form onSubmit={onSubmitHandler} action="" className='login-form'>
                <h2>{currState}</h2>
                {currState === "Sign Up" ? <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder='username' className="form-input" required />
                    : null
                }
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email-address' className="form-input" required />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='password' className="form-input" required />
                <button type='submit'>{currState === "Sign Up"
                    ? "Create Account"
                    : "Login Now"
                }</button>
                <div className="login-term">
                    <input required type="checkbox" />
                    <p>Agree to the terms of use & privacy policy.
                    </p>
                </div>
                <div className="login-forgot">
                    {
                        currState === "Sign Up"
                            ? <p className="login-toggle">
                                Already have an account ? <span onClick={() => setCurrState("Login")}>
                                    Login Here
                                </span>
                            </p>
                            : <p className="login-toggle">
                                Create an account. <span onClick={() => setCurrState("Sign Up")}>
                                    Click here
                                </span>
                            </p>
                    }
                    {currState === "Login"
                        ? <p className="login-toggle">
                            Forgot password? <span onClick={() =>resetPass(email)}>
                                Reset Here
                            </span>
                        </p>
                        : null
                         }

                </div>
            </form>
        </div>
    )
}

export default Login
