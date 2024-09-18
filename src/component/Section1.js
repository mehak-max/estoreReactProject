import React from 'react'

const Section1 = () => {
  return (
    <div className="container-fluid  pt-5" style={{backgroundColor: '#aee8ff', marginTop:"7%"}}>
  <div className="row no-gutters">
     {/* Section 1: Image  */}
    <div className="col-12 col-md-6 col-sm-6 img-section d-flex justify-content-center align-items-center py-5" style={{backgroundColor: '#aee8ff'}}>
      <img src="eimage/midimage.webp" alt="Descriptive Alt Text" style={{width: '80%', maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto', cursor:"pointer"}} className="d-block imgh" />
    </div>
     {/* Section 2: Text  */}
    <div className="col-12 col-md-6 col-sm-6 text-section d-flex align-items-center justify-content-center  py-3" style={{backgroundColor: '#aee8ff'}}>
      <div className="text-center ">
        <h1>Google Pixel Series</h1>
        <p>Elevate Your Everyday with photographic aesthetic.</p>
        <button className="btn text-white" style={{backgroundColor: '#004874'}}>Shop Now</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Section1
