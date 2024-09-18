import React from 'react'
import { Link } from 'react-router-dom'

const Section2 = () => {
  return (
    <div>

  <div className="container mt-4  ">
    <div className="d-flex flex-column flex-md-row justify-content-between">
      <div>
        <h2>Best Selling</h2>
      </div>
      <div className=" mt-md-0">
        <ul className="list-unstyled d-flex flex-column flex-md-row flex-sm-row">
          <li className="px-md-4 py-2 py-md-0 px-sm-2 transition-hover">Google</li>
          <li className="px-md-4 py-2 py-md-0 px-sm-2 transition-hover">Oneplus</li>
          <li className="px-md-4 py-2 py-md-0 px-sm-2 transition-hover">Apple</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container mt-2 ">  
    <div className="row">
      {/* 1st card */}
      <div className="col-6 col-md-3 col-sm-6">
        <div className="card">
          <img src="eimage/card2.webp" alt=""  className="imgh" />
          <div className="content">
            <ul className="sci">
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-eye" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>          
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-cart-shopping" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>        
              <li>
                <Link to="#" className="check">
                <i className="fa-regular fa-heart" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>           
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-circle-info" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body text-body">
          <p> <strong>Google Pixel 12 </strong></p>
          <p className="mar">Rs 28,0000</p>
        </div>
      </div> 
      {/* snd card */}
      <div className="col-6 col-md-3 col-sm-6">
        <div className="card">
          <img src="eimage/card3.webp" alt="" className="imgh" />
          <div className="content">
            <ul className="sci">
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-eye" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>          
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-cart-shopping" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>        
              <li>
                <Link to="#" className="check">
                <i className="fa-regular fa-heart" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>           
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-circle-info" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-body">
          <p> <strong>Google Pixel 8 </strong></p>
          <p className="mar">Rs 145,0000</p>
        </div>
      </div>
      {/* 3rd card */}
      <div className="col-6 col-md-3 col-sm-6">
        <div className="card">
          <img src="/eimage/card4.webp" alt="" className="imgh" />
          <div className="content">
            <ul className="sci">
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-eye" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>          
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-cart-shopping" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>        
              <li>
                <Link to="#" className="check">
                <i className="fa-regular fa-heart" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>           
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-circle-info" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-body">
          <p> <strong>Google Pixel 6 Pro </strong></p>
          <p className="mar"> Rs 147,0000</p>
        </div>
      </div>
      {/* 4th card */}
      <div className="col-6 col-md-3 col-sm-6"> 
        <div className="card">
          <img src="eimage/card5.webp" alt="card2" className="imgh" />
          <div className="content">
            <ul className="sci">
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-eye" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>          
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-cart-shopping" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>        
              <li>
                <Link to="#" className="check">
                <i className="fa-regular fa-heart" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>           
              <li>
                <Link to="#" className="check">
                <i className="fa-solid fa-circle-info" style={{color: '#000000', width:'20px'}}></i>
                </Link>
              </li>
            </ul>
          </div>        
        </div>
        <div className="text-body">
          <p> <strong>Google Pixel 7 Pro </strong></p>
          <p className="mar"> Rs 47,0000</p>
        </div>
      </div>
    </div> 
  </div>
  

    </div>
  )
}

export default Section2
