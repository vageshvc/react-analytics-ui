// App.js

// React Responsive Layout with Tailwind CSS
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Header Section */}
      <header className="w-full bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold">Untitled</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#faq" className="hover:underline">FAQs</a>
        </nav>
        <button className="md:hidden text-lg">☰</button>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center text-center py-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Beautiful analytics to grow smarter
        </h2>
        <p className="text-gray-700 max-w-md mb-6">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Demo</button>
          <button className="bg-gray-100 text-blue-600 px-4 py-2 rounded-md">Sign up</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white w-full px-6">
        <h3 className="text-2xl font-bold text-center mb-8">Features</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-md">
            <h4 className="text-lg font-semibold mb-2">Share team inboxes</h4>
            <p className="text-gray-600">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          </div>
          <div className="p-4 border rounded-md">
            <h4 className="text-lg font-semibold mb-2">Deliver instant answers</h4>
            <p className="text-gray-600">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          </div>
          <div className="p-4 border rounded-md">
            <h4 className="text-lg font-semibold mb-2">Manage your team with reports</h4>
            <p className="text-gray-600">Measure what matters with Untitled’s easy-to-use reports. Filter, export, and drill down on the data in a couple of clicks.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="faq" className="bg-blue-600 text-white py-6 w-full text-center">
        <p>&copy; 2077 zysktechnologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Export the component as default
export default App;
