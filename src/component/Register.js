import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="d-flex min-vh-100 justify-content-center align-items-center " style={{paddingTop:"100px"}}>
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%', backgroundColor:"#004874" }}>
        <h2 className="text-center mb-4" style={{color:"white"}}>Register your account</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100" style={{backgroundColor:"#85cdfa"}}
          >
            Register
          </button>

          <div className="text-center mt-3">
            <p className="mb-0 text-white">
              Already have an account?{' '}
              <Link to="/Login" className="text-primary">
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
