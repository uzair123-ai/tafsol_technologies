import React from 'react'
const Section3 = () => {
       const abc = {
            padding: "10px",
            color: "white",
            textAlign: "center"
        },
        def = {
            padding: "10px",
            paddingTop:"0px",
            color: "white",
            textAlign: "center"
        },
        ghi = {
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "20px",
            color: "white"
        },
        par = {
            textAlign: "center",
            color: "white",
            fontSize: "20px",
            padding: "30px",
            paddingTop:"0px"
        }

    return (
            <div className="sec3">
                <h3 style={abc}> World’s Proficient Digital Marketing Agency</h3>
                <h2 style={def}>With providing a wide range of exclusive services</h2>
                <span style={ghi}>Tafsol Technologies is ranked as one of the best digital marketing agencies in Asia</span>
                <p style={par}>Our goal is to create tailored-fit services for our customers which will prove to drive prime results.<br></br>We enhance the future of our customers by providing full-service digital marketing services.</p>
            </div>
    )
}

export default Section3;