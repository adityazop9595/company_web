import React, { useState } from "react";
import toast from "react-hot-toast";

export default function BookAp() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // ✅ Basic validation logic
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Invalid email format";
    if (!formData.service.trim()) newErrors.service = "Please select a service";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccessMessage(""); // clear message when editing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Something went wrong");

      toast.success("✅ Appointment Request Sent!");
      setSuccessMessage(
        `🎉 Thank you ${formData.name}! Your appointment request for "${formData.service}" has been sent successfully. We'll contact you soon.`
      );

      // ✅ Remove message after 4 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);

      setFormData({
        name: "",
        email: "",
        service: "",
      });
    } catch (err) {
      toast.error("❌ Failed to send, try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] w-full justify-center p-6">
      <div className="w-full max-w-3xl mx-auto bg-white border border-gray-200 p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Book Appointment
        </h2>
        <p className="text-gray-500 mb-8 text-sm md:text-base">
          Please fill out the form below to schedule your session. We’ll get
          back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Name Field */}
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={`px-4 py-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <span className="text-xs text-red-500 mt-1">{errors.name}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className={`px-4 py-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <span className="text-xs text-red-500 mt-1">{errors.email}</span>
              )}
            </div>

            {/* Service Field */}
            <div className="flex flex-col">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`px-4 py-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.service ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">— Choose a Service —</option>
                <option value="Website Designing">Website Designing</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
              {errors.service && (
                <span className="text-xs text-red-500 mt-1">
                  {errors.service}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold px-6 py-2  text-sm transition shadow w-fit"
          >
            {loading ? "Sending..." : "Book an Appointment"}
          </button>
        </form>

        {/* ✅ Success Greeting Message */}
        {successMessage && (
          <div className="mt-6 bg-green-50 border border-green-300 text-green-800 p-4 rounded-md text-sm transition-all duration-300">
            {successMessage}
          </div>
        )}

        <p className="mt-6 text-xs text-gray-500 text-center">
          By booking, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
}
