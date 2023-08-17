import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column">
        <header className="d-flex gap-3 p-5 align-items-center">
          <img className="w-40 h-40" alt="" src="/images/logo.jpg" />
          <div>
            <h1 className="text-success fs-5">BAZAR APP</h1>
            <p className="m-0">Welcome to Bazar! Please login to proceed...</p>
          </div>
        </header>
        <div className="col-md-6 m-auto pt-6">
          <div>
            <h1 className="mb-5 fs-4">Enter your details to login</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label font-weight-bold text-success mb-1">Email</label>
                <input
                  className="form-control mb-2"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label font-weight-bold text-success mb-1">Password</label>
                <input
                  className="form-control mb-2"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary me-2"
                  type="submit"
                >
                  Log In
                </button>
                <Link className="btn btn-light" to="/sign_up">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;