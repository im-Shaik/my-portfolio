import React, { useState, useEffect } from "react";
import "../css/contact.css";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [disabled, setDisabled] = useState();
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      input.name === "" ||
      input.email === "" ||
      input.phone === "" ||
      input.message === ""
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [input]);

  const resetInput = () => {
    setInput({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const inputValue = e.target.value;
      const sanitizedValue = inputValue.replace(/[^0-9]/g, "").slice(0, 10);

      setInput((prevInput) => ({
        ...prevInput,
        [name]: sanitizedValue,
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const message = await sendEmail(input);

      if (message === "OK") {
        toast("Email sent successfully", {
          position: toast.POSITION.TOP_CENTER,
          className: "toast-message",
        });
        setEmailSent(true);
        resetInput();
      } else {
        toast("Something went wrong in my server", {
          position: toast.POSITION.TOP_CENTER,
          className: "toast-error-message",
        });
      }
    } catch (error) {
      console.error(error);
      toast("Error sending email", {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-error-message",
      });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setEmailSent(false);
      }, 2500);
    }
  };

  const sendEmail = (input) => {
    return new Promise((resolve, reject) => {
      if (window.Email) {
        window.Email.send({
          SecureToken: "df754c8d-d56e-48e8-a187-90a10bb00230",
          To: "mohamedfaizal813@gmail.com",
          From: "mohamedfaizal8131@gmail.com",
          Subject: `Message From ${input.name}`,
          Body: `<section style="margin: 0; padding: 0;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0; border-spacing: 0; background: #ffffff;">
            <tr>
                <td align="center" style="padding: 0;">
                    <table role="presentation" style="width: 602px; border-collapse: collapse; border: 1px solid #cccccc; border-spacing: 0; text-align: left;">
                        <tr>
                            <td align="center" style="height: 200px;">
                                <img src="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" width="100%" style="display: block;">
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 36px 30px 10px 30px;">
                                <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0; border-spacing: 0;">
                                    <tr>
                                        <td style="padding: 0 0 36px 0; color: #153643;">
                                            <p style="margin: 0 0 12px 0; font-size: 16px; line-height: 24px; font-family: Arial, sans-serif;">
                                                <div style="border: 1px solid gray; padding: 20px;">
                                                    <h1 style="font-size: 24px; margin: 0 0 20px 0; font-family: Arial, sans-serif;">Got a new offer!</h1>
                                                    <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 100%;">
                                                        <tr>
                                                            <th style="padding: 18px; background-color: #dddddd; border-bottom: 1px solid white;">Name</th>
                                                            <td style="padding: 18px; border: 2px solid #dddddd;">${input.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th style="padding: 18px; background-color: #dddddd; border-bottom: 2px solid white;">Email</th>
                                                            <td style="padding: 18px; border: 1px solid #dddddd;">${input.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <th style="padding: 18px; background-color: #dddddd; border-bottom: 2px solid white;">Phone</th>
                                                            <td style="padding: 18px; border: 1px solid #dddddd;">${input.phone}</td>
                                                        </tr>
                                                        <tr>
                                                            <th style="padding: 18px; background-color: #dddddd; border-bottom: 2px solid white;">Message</th>
                                                            <td style="padding: 18px; border: 1px solid #dddddd;">${input.message}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </section>
    `,
        }).then((message) => {
          resolve(message);
        });
      } else {
        reject("window.Email is not available");
      }
    });
  };

  return (
    <section id="contact" className="contact mt-[20px] mb-[100px] py-20">
      <div className="container mx-auto px-3 max-w-[1100px]">
        <h1 className="title-contact text-3xl md:text-4xl text-center m-10 font-bold">
          Contact
        </h1>
        <form onSubmit={handleSendEmail}>
          <div className="input-container flex flex-wrap gap-[8px] justify-center items-center">
            <input
              onChange={handleChange}
              value={input.name}
              type="text"
              placeholder="Name"
              className="c-name"
              name="name"
              required
            />
            <input
              onChange={handleChange}
              type="email"
              value={input.email}
              placeholder="Email"
              className="c-email"
              name="email"
              required
            />
            <input
              type="number"
              inputMode="numeric"
              name="phone"
              value={input.phone}
              className="c-phone"
              onChange={handleChange}
              placeholder="Phone"
              required
            />
            <input
              onChange={handleChange}
              placeholder="Place Something"
              className="c-message"
              value={input.message}
              name="message"
              required
            />
            <button className="c-btn" type="submit" disabled={disabled}>
              {loading ? "Sending..." : emailSent ? "Sended." : "Lets talk!"}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
