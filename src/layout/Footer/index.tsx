import React from "react";
import EmailImage from "~/assets/img/email.png";

// Footer with background image and div with text
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-img">
        <div className="footer-content">
          <div className="text-center">
            <img
              src={EmailImage}
              style={{ color: "white" }}
              alt="logo"
              width={50}
              height={50}
            />
            <p className="text-4xl margin-none">Lorem!</p>
          </div>
          <div className="footer-email">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="input-email"
                placeholder="Enter Emails Address ..."
              />
            </div>
            <div>
              <button className="button-notify">Notify me!</button>
            </div>
          </div>
        </div>
      </div>
      {/* black div */}
      <div className="footer-div">
        <p>Copyright © Your Website 2022</p>
      </div>
    </div>
  );
};

export default Footer;
