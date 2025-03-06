import { useEffect } from "react";


const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | E-Commerce"; 
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          About Us 🌟
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
          Welcome to <span className="font-semibold text-blue-500">E-Commerce</span>! 
          We are dedicated to bringing you the best shopping experience with high-quality products 
          and a seamless online shopping experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
              🎯 Our Mission
            </h2>
            <p className="text-gray-600 mt-2">
              We aim to revolutionize online shopping by providing top-notch products, 
              exceptional customer service, and a hassle-free checkout process.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
              🚀 Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>🔥 High-Quality Products</li>
              <li>⚡ Fast & Secure Checkout</li>
              <li>📦 Quick Shipping</li>
              <li>💳 Multiple Payment Options</li>
              <li>✅ Excellent Customer Support</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
              🤝 Meet Our Team
            </h2>
            <p className="text-gray-600 mt-2">
              Our team is made up of passionate professionals who are committed 
              to delivering the best online shopping experience. We work hard to 
              bring you the best deals, high-quality products, and an intuitive 
              shopping experience.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Let's Connect! 🌍</h2>
          <p className="text-gray-600 mt-2">
            Follow us on social media for the latest updates, promotions, and product launches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;