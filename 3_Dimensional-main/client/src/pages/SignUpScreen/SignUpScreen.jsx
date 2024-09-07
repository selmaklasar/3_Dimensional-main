import React, { useState } from 'react';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import style from './SignUpScreen.module.css';

const SignUpScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${style.signup_bg}`}
    >
      <Container className={`${style.signup_container}`}>
        <Row className="p-3 h-100 bg-white rounded-4 d-flex justify-content-center align-items-center shadow-sm">
          <Col lg={6} className="px-4">
            <center>
              <h5 className={`${style.signupheading}`}>Sign Up</h5>
            </center>
            <div className="form-group py-1">
              <label>User Name</label>
              <input
                type="text"
                name="name"
                className={`form-control py-2 ${style.input_field}`}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group py-1 ">
              <label>Contact Number</label>
              <input
                type="text"
                name="contact"
                className={`form-control py-2  ${style.input_field}`}
                placeholder="Enter your number"
              />
            </div>
            <div className="form-group py-1">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className={`form-control py-2  ${style.input_field}`}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group py-1">
              <label>Password</label>
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                className={`form-control py-2  ${style.input_field}`}
                placeholder="Enter your password"
              />
            </div>
            <div className="form-check py-1 mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={togglePasswordVisibility}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Show Password
              </label>
            </div>
            <Button variant="primary" className="w-100 mb-1 mt-2">
              Create account
            </Button>
            <div className={style.divider}>Or</div>
            <button type="button" className={`mt-2 ${style.login_google}`}>
              <img
                className={style.google_icon}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
                alt="Google Icon"
              />
              Sign up with Google
            </button>
          </Col>
          <Col
            className={`${style.signup_img} d-none d-lg-block  rounded-4`}
          ></Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpScreen;
