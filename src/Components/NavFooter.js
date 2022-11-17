import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import bookmark from '../images/bookmark.svg'

const NavFooter = () => {
  return (
    <div id='footernav'>
        <div className="container-lg">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-8 col-lg-4 col-xl-3">
                <img src={bookmark} alt="" />
                </div>

                <div className="col-sm-8 col-lg-4 col-xl-3">
                   <nav className='nav'>
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                   </nav>
                </div>

                <div className="col-sm-8 col-lg-4 col-xl-3">
                 <div className="icon">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                    </div>
                </div>

                
           
            </div>
        </div>
    </div>
  )
}

export default NavFooter