import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import animationDatas from "../../lotties/click.json";
import Lottie from "react-lottie";

import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_b88h2lx",
      "template_tal2btj",
      e.target,
      "RySt4B4HgAoNBEL2-"
    );
    e.target.reset();
  };

  return (
    <section id="contact" style={{ marginTop: 150 }}>
      <h5
        style={{ textAlign: "center", fontSize: 15 }}
        className="title changecolor"
      >
        Get in touch
      </h5>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <div
          className="contact__options"
          style={{
            marginRight: 50,
            marginLeft: 40,
            justifyContent: "center",
          }}
        >
          <article className="contact__option" style={{ position: "relative" }}>
            <MdOutlineEmail className="contact__option-icon" />
            <h5>Email</h5>
            <h5>digitomytech@gmail.com</h5>
            <h4>
              <a href="mailto:digitomytech@gmail.com" target="_blank">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ marginBottom: 20, marginTop: 10 }}
                >
                  Send an email
                </button>
              </a>
            </h4>
          </article>
        </div>
        <div>
          {animationDatas && (
            <div
              style={
                {
                  // width: 500,
                  // height: 400,
                  //  position: "absolute",
                  //   top: 70,
                }
              }
              href="mailto:digitomytech@gmail.com"
            >
              <Lottie
                options={{ animationData: animationDatas }}
                eventListeners={[{}]}
              />
            </div>
          )}
        </div>
        <form ref={form} onSubmit={sendEmail} style={{ marginRight: 40 }}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="2"
            placeholder="Your message"
            required
          ></textarea>
          <button
            className="btn btn-primary"
            type="submit"
            style={{ marginBottom: 20 }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
