import emailjs from "emailjs-com";
import React, { useEffect, useRef } from "react";
import "./Contact.css";
import "aos/dist/aos.css";
import Aos from "aos";

export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e5pmjrj",
        "template_pyhzzeb",
        form.current,
        "user_u3k1ST1LL3OoYYsuuDH07"
      )
      .then(
        (result) => {
          alert("Message sent succesfully!! 👍");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="container py-5" data-aos="fade-up">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact">
                  CONTACT INFO : +54 379 4005067
                </div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      type="text"
                      autoFocus
                      required
                      name="name"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      type="email"
                      required
                      name="email"
                    />
                  </div>                                  
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      placeholder="MESSAGE"
                      cols="30"
                      rows="8"
                      required
                      name="message"
                    ></textarea>
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button border rounded mx-2">CANCEL</button>
                    <button className="app-form-button border rounded">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      ;
    </div>
  );
};

export default Contact;
