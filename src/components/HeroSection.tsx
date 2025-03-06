const HeroSection = () => {
    return (
      <div className="h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-5xl font-bold">Welcome to E-Commerce</h1>
        <p className="mt-4 text-lg">The best deals and latest trends in one place.</p>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">
          Shop Now
        </button>
      </div>
    );
  };
  
  export default HeroSection;