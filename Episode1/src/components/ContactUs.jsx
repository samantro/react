
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your backend API or email service here.
    console.log("Contact form data:", formData);

    setIsSubmitted(true);
  };

  const inputStyles =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100";

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50/60 via-white to-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-20">

        {/* Hero Section */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-600">
            We'd Love to Hear From You
          </span>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Contact <span className="text-orange-500">Us.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Have a question, suggestion, or feedback?
            We're always happy to hear from you.
            Reach out and let's get the conversation started.
          </p>

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-orange-500" />
        </div>

        {/* Contact Content */}
        <div className="grid items-start gap-8 lg:grid-cols-5">

          {/* Left Side - Contact Info */}
          <div className="space-y-6 lg:col-span-2">

            <div>
              <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-orange-500">
                Get in Touch
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Let's Talk About
                <br />
                <span className="text-orange-500">
                  Something Great.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Whether you have a question about our restaurant
                app, need assistance, or simply want to say hello,
                we're here to help.
              </p>
            </div>

            {/* Email Card */}
            <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                ✉️
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Email Us
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Send us your questions anytime.
                </p>
                <p className="mt-2 text-sm font-semibold text-orange-600">
                  Your support email
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                📞
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Call Us
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Need help? Give us a call.
                </p>
                <p className="mt-2 text-sm font-semibold text-orange-600">
                  Your contact number
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                📍
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Visit Us
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  We'd love to meet you.
                </p>
                <p className="mt-2 text-sm font-semibold text-orange-600">
                  Your business address
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-100/70 sm:p-8 lg:col-span-3 lg:p-10">

            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-gray-900">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form below and tell us what's on
                your mind.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name & Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className={inputStyles}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className={inputStyles}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className={`${inputStyles} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl active:scale-95"
              >
                Send Message

                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </button>

              {/* Demo Submission Message */}
              {isSubmitted && (
                <div
                  role="status"
                  className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-center text-sm font-medium text-orange-700"
                >
                  Form validated successfully! Connect a backend
                  service to actually send your message.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-10 text-center text-white shadow-lg shadow-orange-500/10 sm:px-10">

          <div className="mb-4 text-4xl">🍽️</div>

          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Good Food. Great Conversations.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-orange-50 sm:text-base">
            Your feedback helps us create a better food
            experience for everyone.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
