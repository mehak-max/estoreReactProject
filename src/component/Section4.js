import React from 'react'
import { Link } from 'react-router-dom'

const Section4 = () => {
  return (
    <div>
         <div className="container-fluid text-center mt-5 py-5">
          <h2>Featured Collection</h2>
        </div>
       <div className="container mt-2 ">  
  <div className="row">
    {/* 6st card */}
    <div className="col-6 col-md-3 col-sm-6">
      <div className="card">
        <img src="/eimage/card 6.webp" alt="" className="imgh" />
        <div className="content">
          <ul className="sci">
            <li>
            {/* <i className="fa-solid fa-cart-shopping"></i> */}
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
    {/* 7 card */}
    <div className="col-6 col-md-3 col-sm-6">
      <div className="card">
        <img src="/eimage/card 7.webp" alt="" className="imgh" />
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
    
    {/* 8 card */}
    <div className="col-6 col-md-3 col-sm-6">
      <div className="card">
        <img src="/eimage/card 8.webp" alt="" className="imgh" />
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
    {/* 9 card */}
    <div className="col-6 col-md-3 col-sm-6"> 
      <div className="card">
        <img src="/eimage/card 9.webp" alt="" className="imgh" />
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

export default Section4
