import React from 'react'
import chrome from '../images/chrome.svg'
import dots from '../images/dots.svg'
import firefox from '../images/firefox.svg'
import opera from '../images/opera.svg'
const Cardcom = () => {
  return (
      <div>
        <div className="container-sm">
          <div className="row justify-content-center align-items-center">

            <div id='one' className="col-sm-8 col-lg-4 col-md-6 col-xl-3 ca">
            <div class="card border-0">
                        <div class="card-body text-center">
                          <h5 class="card-title"><img src={chrome} alt="" /></h5>
                          <p class="card-text">Add to Chrome</p>
                          <p class="d-none d-lg-block mx-3">Minimum Version 62</p>
                           <img style={{width:'100%'}} src={dots} alt="" />
                          <button className='button'>Add & Install Extension</button>
                        </div>
                      </div>
            </div>
            

            <div id='two' className="col-sm-8 col-lg-4 col-md-6 col-xl-3 ca">
            <div class="card border-0">
                        <div class="card-body text-center">
                          <h5 class="card-title"><img src={firefox} alt="" /></h5>
                          <p class="card-text">Add To Firefox</p>
                          <p class="d-none d-lg-block mx-3">Minimum Version 56</p>
                          <img style={{width:'100%'}} src={dots} alt="" />
                          <button className='button'>Add & Install Extension</button>
                        </div>
                      </div>
            </div>

            
            <div id='three' className="col-sm-8 col-lg-4 col-md-6 col-xl-3 ca">
            <div class="card border-0">
                        <div class="card-body text-center">
                          <h5 class="card-title"><img src={opera} alt="" /></h5>
                          <p class="card-text">Add To Opera</p>
                          <p class="d-none d-lg-block mx-3">Minimum Version 46</p>
                          <img style={{width:'100%'}} src={dots} alt="" />
                        <button className='button'>Add & Install Extension</button> 
                        </div>
                      </div>
            </div>
             </div>

            </div>
          </div>
  
  )
}

export default Cardcom



   
 