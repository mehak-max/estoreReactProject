import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='mt-3 pt-3'>
     {/* Footer */}
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}
    {/* Right */}
    <div>
      <Link to className="me-4 text-reset">
        <i className="fab fa-facebook-f" />
      </Link>
      <Link to className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </Link>
      <Link to className="me-4 text-reset">
        <i className="fab fa-google" />
      </Link>
      <Link to className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </Link>
      <Link to className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </Link>
      <Link to className="me-4 text-reset">
        <i className="fab fa-github" />
      </Link>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />About Us
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Quick Link
          </h6>
          <p>
            <Link to="#!" className="text-reset" style={{textDecoration:  'none' }}>Home</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset" style={{textDecoration:  'none' }}>Products</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset" style={{textDecoration:  'none' }}>Categories</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset" style={{textDecoration:  'none' }}>Contact Us</Link>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to="#!" className="text-reset" style={{ textDecoration: 'none' }}>Pricing</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset" style={{textDecoration:  'none' }}>Settings</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset" style={{textDecoration:  'none' }}>Orders</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset" style={{textDecoration:  'none' }}>Help</Link>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
          <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
          <p> 
            <i className="fas fa-envelope me-3" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <Link className="text-reset fw-bold" to="https://mdbootstrap.com/">estorepakistanofficial.com</Link>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}

    </div>
  )
}

export default Footer
