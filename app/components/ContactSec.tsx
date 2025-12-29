"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ContactSec() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    phone: "",
    email: "",
    childFirstName: "",
    dob: "",
    name: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [status, setStatus] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    // 🔥 PHONE HARD NORMALIZATION
    const normalizedValue =
      name === "phone"
        ? value
            .replace(/[\r\n]+/g, " ")
            .replace(/[^\d+()\-\s]/g, "")
            .replace(/\s+/g, " ")
            .trim()
        : value;

    setFormData({
      ...formData,
      [name]: normalizedValue,
    });

    if (name === "phone") setPhoneError("");
    setFieldError("");
    setStatus("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    e.stopPropagation();

    const { name, phone, message } = formData;

    if (!name || !phone || !message) {
      setFieldError("Please fill all required fields.");
      return;
    }

    // ❌ alphabets
    if (/[a-zA-Z]/.test(phone)) {
      setPhoneError("Mobile number should not contain letters");
      return;
    }

    // ❌ invalid symbols
    if (/[^0-9+\-\s()]/.test(phone)) {
      setPhoneError("Invalid characters in mobile number");
      return;
    }

    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setPhoneError("Mobile number must contain at least 10 digits");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setStatus("Something went wrong. Please try again.");
        return;
      }

      setStatus("Form submitted successfully!");

      setFormData({
        parentFirstName: "",
        parentLastName: "",
        phone: "",
        email: "",
        childFirstName: "",
        dob: "",
        name: "",
        message: "",
      });

      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("Server error. Please try later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/conatctbg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div className="flex items-end px-6 md:px-10 pb-10">
          <div className="text-white max-w-lg">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
  WHERE EVERY <br />
  SPACE TELLS <br />
  A BEAUTIFUL STORY
</h1>
<p className="mt-4 text-sm md:text-base opacity-90">
  Thoughtfully designed interiors crafted for comfort, style, and living.
</p>

          </div>
        </div>

        <div className="relative flex items-center justify-center px-4 sm:px-6">
          <div className="absolute inset-0 bg-white/25 backdrop-blur-sm md:backdrop-blur-md" />

          <div className="relative w-full max-w-md text-center py-10">
            <div className="bg-white rounded-xl p-6 flex flex-col justify-end h-full">
              <form
                ref={formRef}
                className="space-y-4"
                onSubmit={handleSubmit}
              >
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

                {phoneError && (
                  <p className="text-red-600 text-xs">{phoneError}</p>
                )}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm resize-none placeholder-black focus:outline-none"
                  required
                />

                {fieldError && (
                  <p className="text-red-600 text-xs">{fieldError}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#9a3f13] text-black font-semibold py-3 rounded-md disabled:opacity-70"
                >
                  {submitting ? "Sending..." : "Send"}
                </button>

                {status && (
                  <p className="text-center mt-2 text-sm font-medium">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
