import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Css/Login.css';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home');
    };

    return (
        <div className="login-page">
            <form className="login-form">
                <h1 className="login-title">Hi, Welcome Back! 👋</h1>
                <label className="login-label">Email</label>
                <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="login-input"
                />
                <label className="login-label">Password</label>
                <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="login-input"
                />
                <div className="options-container">
                    <div className="remember-me-container">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className="remember-label">Remember Me</label>
                    </div>
                    <span className="forgot-password">Forgot Password?</span>
                </div>
                <button type="button" className="login-button" onClick={handleLogin}>
                    Login
                </button>

                <div className="divider">
                    <span>Or With</span>
                </div>

                <button type="button" className="google-button">
                    <img 
                        src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" 
                        alt="Google logo" 
                    />
                    Login with Google
                </button>

                <p className="signup-link">
                    Don’t have an account? <a href="/register" className="signup-anchor">Sign Up</a>
                </p>
            </form>
        </div>
    );
}

export default Login;
