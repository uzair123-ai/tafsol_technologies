import React from 'react'

const Styling = () => {
  const abc =  {
    backgroundColor: "rgba(0.1,0.2,0.3)",
    padding: "30px",
    paddingBottom: "0px",
    color: "white",
    textAlign: "center"
  },
    def = {
      backgroundColor: "rgba(0.1,0.2,0.3)",
      padding: "30px",
      paddingTop: "10px",
      color: "white",
      textAlign: "center"
    }

return (
  <div>
            <div className='sec3'>
                <h3>World’s Proficient Digital Marketing Agency</h3>
                <h2 className='def'>With providing a wide range of exclusive services</h2>
                <span className='ghi'>Tafsol Technologies is ranked as one of the best digital marketing agencies in Asia</span>
                <p className='par'>Our goal is to create tailored-fit services for our customers which will prove to drive prime results.<br></br>We enhance the future of our customers by providing full-service digital marketing services.</p>
            </div>

  </div>
)
};
export default Styling;