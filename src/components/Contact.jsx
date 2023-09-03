import React, { useState } from "react";
import "../css/contact.css";
import Mail from "./basic-components/Mail";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        if (message === "OK") {
          toast("Successfully send", {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
          });
        }
        if (
          message ===
          "Mailbox name not allowed. The server response was: Envelope FROM 'mohamedfaizal@gmail.com' email address not allowed."
        ) {
          toast("Something went wrong in my server", {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-error-message",
          });
        }
      });
    }
  };

  return (
    <section id="contact" className="contact my-[20px] py-20">
      <div className="container mx-auto px-3 max-w-[1100px]">
        <h1 className="text-3xl md:text-4xl text-center m-10 font-bold">
          Contact
        </h1>
        <form onSubmit={handleSubmit}>
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
            <button className="btn" type="submit">
              Connect!
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
