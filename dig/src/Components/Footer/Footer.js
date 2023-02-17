import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="subscribeContainer">
        <h3 className="subscribeTitle">
          Be a part of the future of mosquito vector surveillance by subscribing
          to our newsletter
        </h3>

        <input
          type="email"
          placeholder="Enter your email"
          className="subscribeInput"
        />
        <button className="subscribeButton">Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
