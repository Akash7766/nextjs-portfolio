import React from "react";

const ContactForm = ({ handleSubmit }: any) => {
  return (
    <div className="w-full md:w-[700px] mx-auto p-5 " data-aos="fade-up">
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formspree.io/f/xpzbnlob"
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div>
            <label htmlFor="" className="label">
              Name:
            </label>
            <input
              name="name"
              type="text"
              className="bg-transparent border-2 h-10 px-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="" className="label">
              Email:
            </label>
            <input
              name="email"
              type="email"
              className="bg-transparent border-2 h-10 px-2 w-full"
              required
            />
          </div>
        </div>
        <label htmlFor="" className="label">
          Your Message
        </label>
        <textarea
          name="message"
          className="bg-transparent border-2 w-full h-36 px-2"
          required
        />
        <div className="text-center mt-5">
          <button className="btn btn-outline btn-info border-4 rounded-none">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
