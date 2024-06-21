import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import curvedArrow from "@/components/AllTemplates/template7/assets/img/curved-arrow.svg";

function Contact() {
  /*=============== EMAIL JS ===============*/
  const form = useRef();
  const [contactMessage, setContactMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t5xvmsc",
        "template_gqsqs2h",
        form.current,
        "5z3UX5oK1G4thjzK1"
      )
      .then(
        () => {
          setContactMessage("Message sent successfully ✅");
          setTimeout(() => {
            setContactMessage("");
          }, 5000);
          form.current.reset();
        },
        () => {
          setContactMessage("Message sent successfully");
          setTimeout(() => {
            setContactMessage("Message not sent (service error) ❌");
          }, 5000);
          form.current.reset();
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container grid">
        <div className="contact__data">
          <h2 className="section__title-2">Contact Me.</h2>
          <p className="contact__description-1">
          I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!
          </p>
          <p className="contact__description-2">
          I need your <b>Name</b> and <b>Email Address</b>, but you won't receive anything other than your reply.
          </p>
          <div className="geometric-box"></div>
        </div>
        <div className="contact__mail">
          <h2 className="contact__title">Send Me A Message</h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form"
            id="contact-form"
          >
            <div className="contact__group">
              <div className="contact__box">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="contact__input"
                  required
                  placeholder="First Name"
                />
                <label htmlFor="name" className="contact__label">
                  First Name
                </label>
              </div>
              <div className="contact__box">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="contact__input"
                  required
                  placeholder="Email Address"
                />
                <label htmlFor="email" className="contact__label">
                  Email Address
                </label>
              </div>
            </div>
            <div className="contact__box">
              <input
                type="text"
                id="subject"
                name="user_subject"
                className="contact__input"
                required
                placeholder="Subject"
              />
              <label htmlFor="subject" className="contact__label">
                Subject
              </label>
            </div>
            <div className="contact__box contact__area">
              <textarea
                id="message"
                name="user_message"
                className="contact__input"
                required
                placeholder="Message"
              ></textarea>
              <label htmlFor="message" className="contact__label">
                Message
              </label>
            </div>
            <p className="contact__message" id="contact-message">
              {contactMessage}
            </p>
            <button className="contact__button button">
              <i className="ri-send-plane-line"></i>Send Message
            </button>
          </form>
        </div>

        <div className="contact__social">
          <img src={curvedArrow} alt="" className="contact__social-arrow" />

          <div className="contact__social-data">
            <div className="contact__social-description">
              <p className="contact__social-description-1">
                Does not send emails
              </p>
              <p className="contact__social-description-2">
                Write me on my social networks
              </p>
            </div>

            <div className="contact__social-links">
              <a
                href="https://www.linkedin.com/in/kartikcode/"
                target="_blank"
                className="contact__social-link"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a
                href="https://twitter.com/code_kartik"
                target="_blank"
                className="contact__social-link"
              >
                <i className="ri-twitter-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
