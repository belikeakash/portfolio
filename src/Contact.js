import React from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ez5799d",
        "template_gi0i2iz",
        e.target,
        "user_I8Aiir2EDDy8KAh5Ca0S3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="maisn">
      <div className="imagine">
        <img
          src="./images/hihi.png"
          alt=""
        />
      </div>
      <form className="contact-form" onSubmit={sendEmail}>
          <h1>Contact Me At </h1>
        <input
          className="apple"
          type="hidden"
          placeholder="NAME"
          name="contact_number"
        />
        <input
          className="apple"
          placeholder="Enter your name"
          type="text"
          name="user_name"
        />

        <input
          className="apple"
          placeholder="Enter your email"
          type="email"
          name="user_email"
        />

        <textarea className="apple" name="message" placeholder="Message" />
        <input className="btnn" type="submit" value="Send" />
      </form>
    </div>
  );
}
