import React from 'react'
import { Link } from 'react-router-dom'

const Section7 = () => {
  return (
    <div>
   
   <div className="text-center bg-body-tertiary  mt-5" style={{paddingTop:"100px"}}>
  <h1>Contact</h1>
  <nav aria-label="breadcrumb" className="d-flex justify-content-center mt-2">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/" style={{textDecoration:  'none' }}><strong>Home</strong> </Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
       <strong>Contact</strong> 
      </li>
    </ol>
  </nav>
</div>
<div className='container-fluid mt-5'>
  <div className='row text-center justify-content-center '>
    <div className='col-12 col-md-4 col-lg-3 border rounded p-4 mx-3'>
      <h3 className='mt-4'>Email Address</h3>
      <p>info@estorepakistan.com</p>
    </div>
    <div className='col-12 col-md-4 col-lg-3 border rounded p-4 mx-3'>
      <h3 className='mt-4'>Phone Number</h3>
      <p>+11 222 33333</p>
    </div>
    <div className='col-12 col-md-4 col-lg-3 border rounded p-4 mx-3'>
      <h3>Office Address</h3>
      <p>Suit# 338, 3rd Floor, Star City Mall, Abdullah Haroon Road, Karachi, Pakistan</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Section7
