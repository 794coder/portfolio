"use client";

import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:React.FormEvent) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Thank you! We'll reach you shortly.");
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  } catch {
    setStatus("Server error.");
  } finally {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
};


  return (
    <section className="py-16 px-6 bg-purple-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="text-gray-600 mt-2">
              Get in touch using the form or reach me directly via phone or email.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">📍</div>
            <div>
              <h4 className="font-bold">Address</h4>
              <p className="text-gray-600">Islamabad, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">📞</div>
            <div>
              <h4 className="font-bold">Call Us</h4>
              <p className="text-gray-600">+92 327 5753787</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">✉️</div>
            <div>
              <h4 className="font-bold">Email Us</h4>
              <p className="text-gray-600">hamza.coder.794@gmail.com</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Your Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full border px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm">Your Email</label>
              <input name="email"  value={form.email} type="email" onChange={handleChange} className="w-full border px-3 py-2" required />
            </div>
          </div>
          <div>
            <label className="block text-sm">Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange} className="w-full border px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm">Message</label>
            <textarea name="message" value={form.message} rows={5} onChange={handleChange} className="w-full border px-3 py-2" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full">
            Send Message
          </button>
          {status && <p className="text-sm text-green-600 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
