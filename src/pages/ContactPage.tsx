import { useEffect, useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | E-Commerce"; 
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Contact Us 📩
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          {submitted ? (
            <div className="text-center text-green-700">
              <h2 className="text-2xl font-semibold">🎉 Message Sent!</h2>
              <p className="mt-2 text-gray-600">
                Thank you for reaching out! We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Send Message 📧
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;