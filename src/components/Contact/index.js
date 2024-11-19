import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, push } from "firebase/database";

function Contact() {
  const [Contact, setContact] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const db = getDatabase();
    const ContactRef = ref(db, "Contact");

    onValue(ContactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const messagesRef = ref(db, "messages");

    push(messagesRef, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString(),
    })
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message: " + error.message);
      });
  };

  return (
    <section id="Contact" className="contact full">
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
        <div className="or-text">{Contact.or}</div>
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
