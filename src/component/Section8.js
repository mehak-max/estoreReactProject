import React from 'react'

const Section8 = () => {
  return (
    <div>
   
   <div className="container mt-5 px-3 py-5 border shadow" style={{backgroundColor:"#7c8a8f", borderRadius:"50px"}}>
   <div className='py-4 '>
        <h2>Send Message</h2>
    </div>
  <form>
    <div className="row mb-4 justify-content-center">
      <div className="col-md-6">
        <div className="input-group mt-2">
          <input type="text" className="form-control p-3" placeholder="Enter your Full Name" />
          <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
        </div>
      </div>
      <div className="col-md-6">
        <div className="input-group mt-2">
          <input type="text" className="form-control p-3 " placeholder="Enter Email Address" />
          <span className="input-group-text "><i className="fa-solid fa-envelope"></i></span>
        </div>
      </div>
    </div>

    <div className="row mb-4 justify-content-center">
      <div className="col-md-6">
        <div className="input-group mt-2">
          <input type="text" className="form-control p-3" placeholder="Enter Phone Number" />
          <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
        </div>
      </div>
      <div className="col-md-6">
        <div className="input-group mt-2">
          <input type="text" className="form-control p-3" placeholder="Enter Subject" />
          <span className="input-group-text"><i className="fa-solid fa-book"></i></span>
        </div>
      </div>
    </div>

    <div className="row mb-4 justify-content-center">
      <div className="col-md-12">
        <div className="input-group">
          <textarea className="form-control p-3" rows="4" placeholder="Enter Message"></textarea>
          <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
        </div>
      </div>
    </div>

    <div className="">
      <button type="submit" className="btn p-2 text-white" style={{backgroundColor:" rgb(0, 52, 80)"}}>Submit</button>
    </div>
  </form>
</div>

  
    </div>
  )
}

export default Section8
