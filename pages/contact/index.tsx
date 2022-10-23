import React from "react";
import { useForm } from "@formspree/react";
import Link from "next/link";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import Head from "next/head";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xpzbnlob");
  if (state.succeeded) {
    return (
      <>
        <Head>
          <title>Message Sent</title>
        </Head>
        <div className="flex justify-center flex-col items-center text-white h-full w-full text-center gap-5">
          <h2 className="text-2xl text center">Thanks for your message.</h2>
          <h2 className="text-2xl text center">We reply you very soon.</h2>
          <Link href="/">
            <button className="btn btn-outline btn-info uppercase rounded-none">
              Back to home
            </button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Akash Rahman - Contact</title>
      </Head>
      <div>
        <div className="py-10 mx-5 md:mx-16">
          <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info">
            <i className="fa-solid fa-address-card mr-5"></i>Contact Me
          </h2>
        </div>
        <ContactForm handleSubmit={handleSubmit} />
        <ContactInfo />
      </div>
    </>
  );
};

export default ContactPage;
