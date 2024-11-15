import React from "react";

const Contact = () => (
  <section className="contact full" id="Contact">
    <div className="container">
      <div className="sec-top">
        <h1>
          Contact <span>Us</span>
        </h1>
      </div>
      <div className="contact-boxes">
        <div className="contact-box">
          <i className="fa-solid fa-phone" />
          <h3>Phone</h3>
          <p>082193492409</p>
        </div>
        <div className="contact-box">
          <i className="fa-solid fa-envelope" />
          <h3>Email</h3>
          <p>info@example.com</p>
        </div>
        <div className="contact-box">
          <i className="fa-solid fa-map-marker-alt" />
          <h3>Address</h3>
          <p>Klabat university </p>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
