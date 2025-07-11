"use client";

import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import React from "react";

const ContactPage = () => {
  return (
    <div className="px-4 py-8 ">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="w-full lg:w-7/12">
          <ContactForm />
        </div>
        <div className="w-full lg:w-5/12">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
