import React from 'react'

export const CardAbout = () => {
  return (
<section className="d-flex align-items-center " id='section-about' >
  
    <div  style={{maxWidth:'350px'}}  >
      <img className="img-about"src={"https://lh3.google.com/u/1/d/1xg_Q2uD8XTivRNlqdNh3Sy4HiFWTbxYY=w2000-h3556-iv1"} style={{boxShadow:' 0px 10px 10px 10px  #b2b1b1'}}   alt="seria esta" />
     </div>

    <div style={{paddingRight: '30px', maxWidth:'700px'}} id='text-section'>
        <div className="card-body text-start p-5 flex-grow-1 ms-3" id='text-section-1'>
          <h5 className="card-title" style={{paddingBottom: '0.5rem'}}>About Me</h5>
            <p className="card-text">Evge Noriavić is a french selfportraitist, model and photographer. She started modelling as a freelancer in 2015 for photographic works..</p>
       
            <div  className="card-body text-center ">
              <h5 className="card-title"  style={{paddingBottom: '0.5rem'}}>Stats</h5>
              <div className=''>
                <p className="card-text"><b >Vida:</b>  4500/4500</p>
                <p className="card-text"><b>Mana:</b> 4500/4500</p>
                <p className="card-text"><b>Ad:</b> 4500/4500</p>      
              </div> 
           
            </div>
              
           
        </div>
    </div>
   
</section>
  )
}
