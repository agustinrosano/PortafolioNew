import React from 'react'

export const CardAbout = () => {
  return (
<section className="section-about "  >
  <div className='div-contenedor'>
    <div className='div-img'   >
      <img className="img-about"src={"https://lh3.google.com/u/1/d/1xg_Q2uD8XTivRNlqdNh3Sy4HiFWTbxYY=w2000-h3556-iv1"} style={{boxShadow:' 0px 10px 10px 10px  #b2b1b1'}}   alt="seria esta" />
     </div>

    <div className='text-section' style={{paddingRight: '30px', maxWidth:'700px'}} >
        <div className="card-body text-start p-5 flex-grow-1 ms-3 text-center" id='text-section-1'>
          <h5 className="card-title" style={{paddingBottom: '0.5rem'}}>About Me</h5>
            <p className="card-text">Hello, my name is Thomas Amado. I've been working as a freelance model for three years now. During this past year, I've been collaborating with a modeling agency in Mar del Plata, Argentina. Currently, I am working with Vogue on various projects featured in their main magazines.</p>
       
            <div  className="card-body text-center ">
              <h5 className="card-title"  style={{paddingBottom: '0.5rem'}}>Stats</h5>
              <div className=''>
                <p className="card-text"><b >Height:</b>  1.82 meters</p>
                <p className="card-text"><b>Weight:</b> 73 kilograms</p>
                {/* <p className="card-text"><b>Ad:</b> 4500/4500</p>       */}
              </div> 
           
            </div>
        </div>
    </div>
    </div>
</section>
  )
}
