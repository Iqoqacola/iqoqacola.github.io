import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [yourMessage, setYourMessage] = useState("");
  const [fields, setFields] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      service_id: import.meta.env.REACT_APP_SERVICE_ID,
      template_id: import.meta.env.REACT_APP_TEMPLATE_ID,
      user_id: import.meta.env.REACT_APP_USER_ID,
      template_params: {
        from_name: yourName,
        from_email: yourEmail,
        to_name: "Iqoqacola",
        message: yourMessage,
      },
    };

    let emptyFields = [];

    if (yourName === "") {
      emptyFields.push("yourName");
    }

    if (!yourEmail) {
      emptyFields.push("yourEmail");
    }

    if (!yourMessage) {
      emptyFields.push("yourMessage");
    }

    if (emptyFields.length > 0) {
      setFields(emptyFields);
      setError("Please fill in all the fields");
      setSuccess("");
      return;
    }

    try {
      const response = await fetch(import.meta.env.REACT_APP_CONTACT_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(
          "Thank you for reaching out me. I will get back to you soon!"
        );
        setError("");
        setYourName("");
        setYourEmail("");
        setYourMessage("");
        setFields([]);
      }
    } catch (error) {
      setSuccess("");
      setFields([]);
      setError(error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.init({
      duration: 1000,
    });
    inputRef.current.focus();
  }, []);
  return (
    <>
      <section className="pt-28 w-full">
        <div
          className="container w-auto lg:w-1/3 contact-form"
          data-aos="fade-up"
        >
          <form onSubmit={sendEmail} className="contact-me flex flex-col">
            <h2 className="text-center text-2xl font-bold text-red-400 drop-shadow-md">
              Contact me!
            </h2>
            <label>Your Name</label>
            <input
              type="text"
              name="user-name"
              onChange={(e) => {
                setYourName(e.target.value);
              }}
              value={yourName}
              className={`${fields.includes("yourName") ? "error" : ""}`}
              placeholder="Full Name"
              ref={inputRef}
            />
            <label>Your Email</label>
            <input
              type="email"
              name="user-email"
              onChange={(e) => {
                setYourEmail(e.target.value);
              }}
              value={yourEmail}
              className={`${fields.includes("yourEmail") ? "error" : ""}`}
              placeholder="example@email.com"
            />
            <label>Message</label>
            <textarea
              type="text"
              name="user-message"
              onChange={(e) => {
                setYourMessage(e.target.value);
              }}
              value={yourMessage}
              className={`${fields.includes("yourMessage") ? "error" : ""}`}
              placeholder="Enter Your Message"
            />
            <button className="sendEmail">Send</button>
            {success && <div className="success">{success}</div>}
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </section>
    </>
  );
};
