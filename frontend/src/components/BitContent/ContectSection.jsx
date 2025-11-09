// import React from "react";
// import { Mail, Phone, Clock } from "lucide-react";

// function ContectSection() {
//   return (
//     <section className="w-full bg-white py-20">
//       {/* Title */}
//       <h2 className="text-center mb-12 text-2xl md:text-3xl font-Poppins font-bold underline">
//         Get In Touch
//       </h2>

//       {/* Main Container */}
//       <div className="max-w-size mx-auto px-2.5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
//         {/* LEFT CONTENT */}
//         <div className="space-y-8">
//           <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight font-Poppins">
//             Ready To Get Started? Fill Out The Form Below, And We’ll Be In Touch Shortly
//           </h2>

//           {/* Contact Info Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {/* Email */}
//             <div className="flex items-start gap-4 p-6 border border-gray-300 rounded bg-white ">
//               <div className="bg-yellow-400/20 p-3 rounded-lg text-yellow-500">
//                 <Mail className="w-6 h-6" />
//               </div>
//               <div>
//                 <p className="text-gray-800 font-medium">support@gmail.com</p>
//                 <p className="text-gray-600">www.sayan.net</p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex items-start gap-4 p-6 border border-gray-300 rounded bg-white ">
//               <div className="bg-yellow-400/20 p-3 rounded-lg text-yellow-500">
//                 <Phone className="w-6 h-6" />
//               </div>
//               <div>
//                 <p className="text-gray-800 font-medium">+880 (123) 456 88</p>
//                 <p className="text-gray-600">+001 (234) 56897</p>
//               </div>
//             </div>

//             {/* Time */}
//             <div className="flex items-start gap-4 p-6 border border-gray-300 rounded bg-white  sm:col-span-2">
//               <div className="bg-yellow-400/20 p-3 rounded-lg text-yellow-500">
//                 <Clock className="w-6 h-6" />
//               </div>
//               <div>
//                 <p className="text-gray-800 font-medium">Monday - Friday</p>
//                 <p className="text-gray-600">08:00am - 05:00pm</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="bg-gray-50 p-8 rounded-2xl  shadow-md">
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
//           <p className="text-gray-600 mb-8">
//             Contact us today to schedule consultation with our expert team
//           </p>

//           <form className="space-y-6">
//             {/* Name + Phone */}
//             <div className="grid sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Fernando H. Cruz"
//                   className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1">
//                   Phone
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//                 />
//               </div>
//             </div>

//             {/* Email + Subject */}
//             <div className="grid sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter email"
//                   className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//                 />
//               </div>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">
//                 Message Us
//               </label>
//               <textarea
//                 placeholder="Write here..."
//                 rows="4"
//                 className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full sm:w-auto bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContectSection;

import React, { useState } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { Filter } from "bad-words";
import toast, { Toaster } from "react-hot-toast";

function ContectSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Initialize profanity filter
  const filter = new Filter();

  // Hinglish abusive word detection
  const hinglishBadWordsRegex =
    /\b(m[ae]d[ae]rch[o0]d|b[h]?ehench[o0]d|chut[iy]?[iy]a|g[a@]ndu|r[a@]nd[w]?[a@]|lau?nd[a@]|bh?o?sd[iy])\b/gi;

  const normalize = (text) =>
    text
      .toLowerCase()
      .replace(/[@#$%^&*().,!?]/g, "")
      .trim();

  const isBad = (text) => {
    const cleaned = normalize(text);
    return filter.isProfane(cleaned) || hinglishBadWordsRegex.test(cleaned);
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, subject, message } = formData;

    if (!name || !phone || !email || !subject || !message) {
      toast.error("All fields are required.");
      return;
    }

    // Bad words validation
    if ([name, phone, email, subject, message].some(isBad)) {
      toast.error("Please avoid using abusive or offensive words.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URI}/api/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setSuccess(true);
      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (err) {
      toast.error("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 6000);
    }
  };

  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      <Toaster />

      {/* Confetti on success */}
      <AnimatePresence>
        {success && (
          <>
            <Confetti recycle={false} numberOfPieces={500} />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-xl z-50"
            >
              🎉 Message Sent! We'll get back to you soon.
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <h2 className="text-center mb-12 text-2xl md:text-3xl font-Poppins font-bold underline">
        Get In Touch
      </h2>

      <div className="max-w-size mx-auto px-2.5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">

        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight font-Poppins">
            Ready To Get Started? Fill Out The Form Below, And We’ll Be In Touch Shortly
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 border border-gray-300 rounded bg-white">
              <div className="bg-yellow-400/20 p-3 rounded-lg text-yellow-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">support@gmail.com</p>
                <p className="text-gray-600">www.sayan.net</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-gray-300 rounded bg-white">
              <div className="bg-yellow-400/20 p-3 rounded-lg text-yellow-500">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">+880 (123) 456 88</p>
                <p className="text-gray-600">+001 (234) 56897</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-gray-300 rounded bg-white sm:col-span-2">
              <div className="bg-yellow-400/20 p-3 rounded-lg text-yellow-500">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">Monday - Friday</p>
                <p className="text-gray-600">08:00am - 05:00pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md relative">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
          <p className="text-gray-600 mb-8">
            Contact us today to schedule consultation with our expert team
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Fernando H. Cruz"
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Email + Subject Dropdown */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                >
                  <option value="">Select Subject</option>
                  <option value="Website Inquiry">Website Inquiry</option>
                  <option value="Business Proposal">Business Proposal</option>
                  <option value="Service Support">Service Support</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message Us
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write here..."
                rows="4"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="animate-spin border-2 border-gray-900 border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                "Send Message"
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default ContectSection;
