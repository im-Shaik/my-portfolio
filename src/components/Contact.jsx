import React, { useState } from "react";
import "../css/contact.css";

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
    console.table(input);
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
              type="text"
              placeholder="Name"
              className="c-name"
              name="name"
            />
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="c-email"
              name="email"
            />
            <input
              onChange={handleChange}
              placeholder="Place Something"
              className="c-message"
              name="message"
            ></input>
            <button type="submit">Connect!</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
