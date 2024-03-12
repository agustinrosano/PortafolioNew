import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    const userEmail = form.current.user_email.value;
    const userName = form.current.user_name.value;
    const message = form.current.message.value;

    if (!userEmail || !userName || !message) {
      toast.error('Please fill in all required fields.',{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true
    });
     
      return;
    }

    // If all fields are filled, send the email
    emailjs
      .sendForm('service_piefhy2', 'template_i6qp0gm', form.current, {
        publicKey: 'tktaJWdYcj8DTG00k',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully!',{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true
        })        

        },
        (error) => {
          console.log('FAILED!');
          toast.error(`Failed to Send`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true
        })
        },
      );
  };

  return (
    <section className="d-flex " id='section-contact' style={{ paddingBottom: '2.5rem' }}>
    <ToastContainer />
    <div style={{paddingRight: '30px' }} >
          <div className="card-body text-start p-5">
            <h4 className="card-title" style={{paddingBottom: '0.5rem'}}>Contact Me</h4>
            <h5 className="card-text">Thomas Amado</h5>
          </div>
           <div className="card-body text-center">
            
                <div className="d-flex justify-content-evenly">   
                  <a href="https://www.instagram.com/toto_amado" target="_blank" rel="noopener noreferrer" className='nav-item nav-link' style={{fontSize:"30px"}}><i className="bi bi-instagram" ></i></a> 
                  <a href="https://api.whatsapp.com/send/?phone=5491169693725&text=Hola+Thomas%21+he+revisado+tu+portafolio+y+me+gustaria+hablar+contigo+...++&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className='nav-item nav-link' style={{fontSize:"30px"}}><i className="bi bi-whatsapp "></i></a>   
                </div>
          </div>
    </div>
   
      <form className="" style={{ width: '35rem' }} ref={form}>
        <div className="text-start p-3">
          <div className="form-group p-2">
            <label htmlFor="exampleInputEmail1">Your Email Adress</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="user_email"
              aria-describedby="emailHelp"
              placeholder="test@email.com"
            ></input>
          </div>

          <div className="form-group p-2">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="user_name"
              placeholder="Your Name"
            />
          </div>

          <div className="form-group p-2">
            <label htmlFor="exampleFormControlTextarea1"> Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Hi Thomas..."
              name="message"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group text-center p-2">
            <button
              type="submit"
              onClick={sendEmail}
              className="btn btn-secondary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};