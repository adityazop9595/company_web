import React, { useState } from "react";

const ApForm = ({ open, onClose, onSubmit }) => {
  if (!open) return null;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    businessName: "",
    websiteURL: "",
    description: "",
    budget: "",
    meetingDate: "",
    meetingTime: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    onClose(); // close after submit OR remove if you want to keep open
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
      {/* Card */}
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg overflow-y-auto max-h-[90vh] p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Book a Consultation</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-xl">×</button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input type="text" name="name" placeholder="Full Name" className="w-full border p-2 rounded" onChange={handleChange} required />

          <input type="email" name="email" placeholder="Email Address" className="w-full border p-2 rounded" onChange={handleChange} required />

          <input type="tel" name="phone" placeholder="Phone Number" className="w-full border p-2 rounded" onChange={handleChange} required />

          <select name="service" className="w-full border p-2 rounded" onChange={handleChange} required>
            <option value="">Select Service</option>
            <option>Website Development</option>
            <option>SEO Optimization</option>
            <option>Google Ads</option>
            <option>Social Media Marketing</option>
          </select>

          <select name="projectType" className="w-full border p-2 rounded" onChange={handleChange}>
            <option value="">Project Type</option>
            <option>Business / Company Website</option>
            <option>E-Commerce Website</option>
            <option>Portfolio / Personal Website</option>
            <option>SEO Growth Campaign</option>
          </select>

          <input type="text" name="businessName" placeholder="Business / Company Name" className="w-full border p-2 rounded" onChange={handleChange} />

          <input type="text" name="websiteURL" placeholder="Current Website (if any)" className="w-full border p-2 rounded" onChange={handleChange} />

          <textarea name="description" placeholder="Describe your project" className="w-full border p-2 rounded min-h-[80px]" onChange={handleChange} />

          <select name="budget" className="w-full border p-2 rounded" onChange={handleChange}>
            <option value="">Your Budget</option>
            <option>₹5,000 - ₹10,000</option>
            <option>₹10,000 - ₹50,000</option>
            <option>₹50,000+</option>
          </select>

          <div className="flex gap-2">
            <input type="date" name="meetingDate" className="w-1/2 border p-2 rounded" onChange={handleChange} />
            <input type="time" name="meetingTime" className="w-1/2 border p-2 rounded" onChange={handleChange} />
          </div>

          <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition">
            Continue to Payment
          </button>

        </form>
      </div>
    </div>
  );
};

export default ApForm;
