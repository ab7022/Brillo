import { useState, useRef } from "react";
import curvedArrow from "@/components/AllTemplates/template7/assets/img/curved-arrow.svg";
import axios from "axios";
import toast from "react-hot-toast";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebookMessenger } from "react-icons/fa";
import { LinkedIn, Twitter } from "@mui/icons-material";

function Contact({ socialProfiles }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [status, setStatus] = useState("");
  const email = socialProfiles?.[0]?.email || "";
  const twitter = socialProfiles?.[0]?.twitter || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
      userEmail: email,
    };
    try {
      const res = await axios.post("/api/user/sendmessages", {
        formData,
      });

      if (res.status === 200) {
        setStatus("Message Sent");
        toast.success("Message Sent!");
        if (nameRef.current && emailRef.current && messageRef.current) {
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        }
      } else {
        const errorData = await res.data
        setStatus(errorData.error || "Error saving form data.");
      }
    } catch (error) {
      setStatus("Error saving form data.");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container grid">
        <div className="contact__data">
          <h2 className="section__title-2 ml-4">Contact Me.</h2>
          <p className="contact__description-1">
            I am currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I will try
            my best to get back to you!
          </p>
         
          <div className="geometric-box"></div>
        </div>
        <div className="contact__mail">
          <h2 className="contact__title">Send Me A Message</h2>

          <form
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
                  ref={nameRef}
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
                  ref={emailRef}
                  placeholder="Email Address"
                />
                <label htmlFor="email" className="contact__label">
                  Email Address
                </label>
              </div>
            </div>

            <div className="contact__box contact__area">
              <textarea
                id="message"
                name="user_message"
                className="contact__input"
                required
                ref={messageRef}
                placeholder="Message"
              ></textarea>
              <label htmlFor="message" className="contact__label">
                Message
              </label>
            </div>
            <p className="contact__message" id="contact-message">
              {status}
            </p>
            <button className="contact__button button" type="submit">
              <i className="ri-send-plane-line"></i>Send Message
            </button>
          </form>
        </div>

        <div className="contact__social">
          <img src={curvedArrow} alt="" className="contact__social-arrow" />

          <div className="contact__social-data">
            
            <div className="contact__social-links">
              {linkedin&& (
                    <a
                href={linkedin}
                target="_blank"
                className="contact__social-link"
              >
                <LinkedIn/>
              </a>
              )}
          {twitter&& (
            <a
                href={twitter}
                target="_blank"
                className="contact__social-link"
              ><Twitter/>
              </a>
          )}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
