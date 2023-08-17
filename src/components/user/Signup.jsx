import React from 'react'

function SignUp() {
  return (
    <div className="container">
      <header className="d-flex gap-3 p-5 align-items-center">
        <img className="w-40 h-40" alt="" src="/images/logo.jpg" />
        <div>
          <h1 className="text-success fs-4">BZAR APP</h1>
          <p className="m-0">Welcome to Bazar! Please enter your details to register...</p>
        </div>
      </header>
      <div className="col-md-6 m-auto pt-6">
        <div>
          <h1 className="mb-5 fs-4">Enter your details to register</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-success fw-bold">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-success fw-bold">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-success fw-bold">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp