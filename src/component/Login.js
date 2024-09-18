import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="d-flex min-vh-100 justify-content-center align-items-center" style={{paddingTop:"100px"}}>
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%', backgroundColor:"#004874" }}>
        <h2 className="text-center mb-4" style={{color:"white"}}>Sign in to your account</h2>
        <form>
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

          <div className="d-flex justify-content-between mb-3">
            <Link to="#" className="text-primary text-white">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{backgroundColor: "#85cdfa"}}
          >
            Sign in
          </button>

          <div className="text-center mt-3">
            <p className="mb-0 text-white">
              Don't have an account?{' '}
              <Link to="/Register" className="text-primary">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
