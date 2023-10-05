import React from "react";
import "../Styling/Contact.css";
import ContactImage from "../assets/Contact.jpg";

const Contact = () => {
  return (
    <>
      <div className="contact-background">
        <div className="contact-container">
          <div className="contact-screen">
            <div className="contact-screen-header">
              <div className="contact-screen-header-left">
                <div className="contact-screen-header-button contact-close"></div>
                <div className="contact-screen-header-button contact-maximize"></div>
                <div className="contact-screen-header-button contact-minimize"></div>
              </div>
            </div>
            <div className="contact-screen-body">
              <div className="contact-screen-body-item ">
                <img
                  src={ContactImage}
                  alt="contact"
                  className="contact-image"
                />
              </div>
              <div className="contact-screen-body-item">
                <div className="contact-app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="contact-app-form">
                  <div className="contact-app-form-group">
                    <input
                      className="contact-app-form-control"
                      placeholder="NAME"
                    />
                  </div>
                  <div className="contact-app-form-group">
                    <input
                      className="contact-app-form-control"
                      placeholder="EMAIL"
                    />
                  </div>
                  <div className="contact-app-form-group">
                    <input
                      className="contact-app-form-control"
                      placeholder="CONTACT NO"
                    />
                  </div>
                  <div className="contact-app-form-group message">
                    <input
                      className="contact-app-form-control"
                      placeholder="MESSAGE"
                    />
                  </div>
                  <div className="contact-app-form-group contact-buttons">
                    <button className="contact-app-form-button">CANCEL</button>
                    <button className="contact-app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
