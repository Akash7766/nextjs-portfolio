import React from "react";

const ContactInfo = () => {
  return (
    <div className="px-5 py-20 grid md:grid-cols-3 gap-10">
      <div className="text-center">
        <i className="fa-solid fa-paper-plane text-4xl text-info"></i>
        <h3 className="text-xl mt-3">
          <a href="mailto:minhazur.akash1@gmail.com">
            minhazur.akash1@gmail.com
          </a>
        </h3>
      </div>
      <div className="text-center">
        <i className="fa-solid fa-location-dot text-4xl text-info"></i>
        <h3 className="text-xl mt-3">Tejgaon,Dhaka-1208</h3>
      </div>
      <div className="text-center">
        <i className="fa-solid fa-phone-flip text-4xl text-info"></i>
        <h3 className="text-xl mt-3">
          <a href="tel:+8801778613295">+8801778613295</a>
        </h3>
      </div>
    </div>
  );
};

export default ContactInfo;
