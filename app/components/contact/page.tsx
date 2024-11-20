'use client'
import React from 'react';
import '@/app/styles/style.css'; // Import the custom CSS

const ContactMe = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-form-container">
        <h2 className="contact-title">        <span>CONTACT ME</span>
        </h2>
        <div className="contact-form">
          <form className="space-y-6" action="mailto:your-email@example.com" method="POST">
            <div className="contact-input-wrapper md-flex-row">
              <div className="w-full md:w-1/2">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="contact-input"
                />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="contact-input"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                className="contact-textarea"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="submit-button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
