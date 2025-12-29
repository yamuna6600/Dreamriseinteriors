"use client";

import { useState } from "react";

export default function ContactFrom() {
  const bgImage = "/images/contact.jpg"; // Background image URL

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred.");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-6">
        {/* Main Container */}
        <div
          className="relative rounded-2xl overflow-hidden min-h-[500px] flex flex-col lg:flex-row justify-between items-end"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          {/* Dark Overlay */}
<div className="absolute inset-0 bg-black/60 shadow-inner" />

          {/* LEFT CONTENT */}
          <div className="rounded-lg p-8 shadow-lg relative z-10">
            <h2 className="text-4xl text-white font-semibold mb-6">Contact Info</h2>

            {/* <h3 className="text-xl text-white font-semibold">Resort Address</h3>
            <p className="text-white">
              ARC Resort, Opposite Kpra Masala Factory, Wadgaon, Shirwal, Satara(Dist) 412801
            </p> */}

            <h3 className="text-xl text-white font-semibold mt-6">Office Address</h3>
            <p className="text-white">
             B 149, Satguru Ram Singh Marg, Mansarovar Garden, Kirti Nagar, New Delhi 110015
            </p>

            <h3 className="text-xl text-white font-semibold mt-6">Business Phone</h3>
            <p className="text-white">9012808959</p>

            <h3 className="text-xl text-white font-semibold mt-6">Email</h3>
            <p className="text-white">dreamriseinteriors@gmail.com</p>
          </div>

          {/* RIGHT FORM */}
          <div className="relative z-10 flex flex-col w-full lg:w-[400px] p-6">
            <div className="bg-white rounded-xl p-6 flex flex-col justify-end h-full">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm placeholder-black focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm placeholder-black focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm placeholder-black focus:outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-4 placeholder-black py-3 text-sm resize-none focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#9a3f13] text-white font-semibold py-3 rounded-md"
                >
                  Send
                </button>
                {status && (
                  <p className="text-center mt-2 text-sm font-medium">{status}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
