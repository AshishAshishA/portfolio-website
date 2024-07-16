import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0A192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/bdrynovb"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl border-b-4 font-bold inline border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - email@email.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6]"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          name="email"
          placeholder="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          cols={30}
          rows={10}
          placeholder="Write the message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Colaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
