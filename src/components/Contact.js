import React from "react";
import "./Contact.css";
import contactHead from "./images/contactHead.webp";

function Contact() {
  return (
    <div classNameName="contact">
      <div className="contact__me">
        <div className="contact__main">
          <div className="contact__formContainer">
            <form action="" id="contact__form">
              <div
                className="contact__formElement"
                style={{
                  display: "inline-block",
                  marginRight: "45px",
                  width: "45%",
                }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="contact__formControl"
                  name="name"
                  id="name"
                  style={{display: "block"}}
                  required
                />
              </div>

              <div
                className="contact__formElement"
                style={{display: "inline-block", width: "45%"}}
              >
                <input
                  type="email"
                  placeholder="E-mail"
                  className="contact__formControl"
                  name="email"
                  id="email"
                  style={{display: "block"}}
                  required
                />
              </div>

              <div className="contact__formElement">
                <input
                  type="text"
                  placeholder="Subject"
                  className="contact__formControl"
                  name="subject"
                  id="subject*"
                  required
                />
              </div>

              <div className="contact__formElement">
                <textarea
                  name=""
                  id="message"
                  columnns="10"
                  rows="1"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className="contact__formElement">
                <button className="btn form-btn">Send</button>
              </div>
            </form>
          </div>
          <div className="touch-details">
            <div className="sec-title sec-5-title">
              <img src={contactHead} alt="" />
              {/* <h6>SAY HELLO</h6> */}
              <h2>Get in touch, send an e-mail or call me</h2>
              {/* <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam et distinctio consequuntur!
              </p> */}
              <a href="tel:8968285864">
                <h5>Contact:</h5>
              </a>
              <a href="tel:8968285864">
                <h4>+91 89682-85864</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
