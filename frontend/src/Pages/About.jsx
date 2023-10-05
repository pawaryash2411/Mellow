import React from "react";
import "../Styling/About.css";
import AboutProfile from "../assets/creator.jpg";

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-left">
          <div className="about-left-content">
            <div>
              <div className="shadow">
                <div className="about-img">
                  <img src={AboutProfile} alt="about" />
                </div>
              </div>

              <h2>Yash Pawar Kamdi</h2>
              <h3>Web Developer, Web Designer</h3>
            </div>

            {/* <ul className="icons">
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
            </ul> */}
          </div>
        </div>

        <div className="about-right">
          <h1>
            Hello<span>!</span>
          </h1>
          <h2>Here's who I am & what I do</h2>
          <div className="about-btns">
            <button type="button" className="btn btn-pink">
              resume / CV
            </button>
            <button type="button" className="btn btn-white">
              <a
                href="https://github.com/pawaryash2411"
                target="_blank"
                rel="noreferrer"
              >
                Git hub
              </a>
            </button>
          </div>

          {/* <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              aspernatur possimus ullam quaerat, laboriosam ex voluptate aliquid
              laborum, obcaecati ratione accusamus! Ea nisi modi dolor nam
              numquam? Temporibus, molestias amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              iure tempora alias laudantium sapiente impedit!
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
