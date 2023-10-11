import React from 'react'
import image1 from "../images/icon.png"
import image2 from "../images/icon2.png"

const Section5 = () => {
    return (
        <>
        <div className='h-sec-3'>
        <div className='row services-content wow slideInUp'>
            <div className='col-xl-4 col-lg-4"'>
                <div className='row'>
                    <div className="service-icon">
                        <a href="./creative-identity">
                            <img src={image1} alt="icon" className='image-responsive'/>
                        </a>
                    </div>
                    <a className="a" href="./creative-idntity">
                        <h3><strong>Creative</strong>Identity
                            <span>.</span>
                        </h3>
                    </a>
                </div>
            </div>
            
            <div className='col-xl-4 col-lg-4"'>
                <div className='row'>
                    <div className="service-icon">
                        <a href="./custom-website">
                            <img src={image2} alt="icon" className='image-responsive'/>
                        </a>
                    </div>
                    <a className="a" href="./custom-website">
                        <h3><strong>Custom</strong>Website
                            <span>.</span>
                        </h3>
                    </a>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Section5