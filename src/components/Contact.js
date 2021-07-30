import React from "react";

import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <section className="section-contact">
        <h1>Contact Me</h1>
        <ul className="contact-list">
          <li className="contact-list-item">
            <span>
              <i className="fas fa-envelope"></i>
            </span>
            yana.nazarenko.ca@gmail.com
          </li>
          <li className="contact-list-item">
            <span>
              <i className="fas fa-phone"></i>
            </span>
            438-493-2629
          </li>
          <li className="contact-list-item">
            <span>
              <i className="fab fa-linkedin"></i>
            </span>
            <a href="https://www.linkedin.com/in/yananazarenkoca">
              Profile in Linkedin
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
