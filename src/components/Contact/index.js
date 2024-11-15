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
          <p className="phone">0813-4105-0067 Ricky</p>
          <p className="phone">0896-9803-5966 Revando</p>
          <p className="phone">0859-3184-4355 Jeremy</p>
          <p className="phone">0852-1638-6828 Noselycha</p>
          <p className="phone">0821-9349-2409 Emily</p>
        </div>
        <div className="contact-box">
          <i className="fa-solid fa-envelope" />
          <h3>Email</h3>
          <p>s22210153@student.unklab.ac.id</p>
          <p>s22210120@student.unklab.ac.id</p>
          <p>s22210214@student.unklab.ac.id</p>
          <p>s22210290@student.unklab.ac.id</p>
          <p>s22210189@student.unklab.ac.id</p>
        </div>
        <div className="contact-box">
          <i className="fa-solid fa-map-marker-alt" />
          <h3>Address</h3>
          <p>Klabat University</p>
        </div>
      </div>
      {/* OR Section */}
      <div className="or-text">OR</div>
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
