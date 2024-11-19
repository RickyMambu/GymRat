import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

function Contact() {
  const [Contact, setContact] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const ContactRef = ref(db, "Contact");

    onValue(ContactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);

  return (
    <section id="contact" className="contact full">
      <div className="container">
        <div className="sec-top">
          <h1>
            {Contact.con1} <span>{Contact.con2}</span>
          </h1>
        </div>
        <div className="contact-boxes">
          <div className="contact-box">
            <i className="fa-solid fa-phone" />
            <h3>{Contact.phoneM}</h3>
            <p className="phone">{Contact.phone1}</p>
            <p className="phone">{Contact.phone2}</p>
            <p className="phone">{Contact.phone3}</p>
            <p className="phone">{Contact.phone4}</p>
            <p className="phone">{Contact.phone5}</p>
          </div>
          <div className="contact-box">
            <i className="fa-solid fa-envelope" />
            <h3>{Contact.emailM}</h3>
            <p>{Contact.email1}</p>
            <p>{Contact.email2}</p>
            <p>{Contact.email3}</p>
            <p>{Contact.email4}</p>
            <p>{Contact.email5}</p>
          </div>
          <div className="contact-box">
            <i className="fa-solid fa-map-marker-alt" />
            <h3>{Contact.addresM}</h3>
            <p>{Contact.address1}</p>
          </div>
        </div>
        {/* OR Section */}
        <div className="or-text">{Contact.or}</div>
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
}

export default Contact;
