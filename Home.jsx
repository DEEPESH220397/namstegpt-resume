import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          ✨ Welcome to NamsteGPT Resume Builder  
          <br />  
          ✨ नमस्तेGPT रिज़्यूमे बिल्डर में आपका स्वागत है
        </h1>

        <p className="text-lg md:text-xl text-gray-700">
          🎯 Create your resume in minutes – easy, fast & bilingual!  
          <br />
          🎯 कुछ ही मिनटों में अपना रिज़्यूमे बनाएं – आसान, तेज़ और हिंदी + English में!
        </p>

        <Link
          to="/create-resume"
          className="inline-block px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-medium transition"
        >
          🚀 Start Now / अभी शुरू करें
        </Link>

        <p className="text-sm text-gray-500">
          💡 100% free, mobile-friendly, and export-ready resume  
          <br />
          💡 100% फ्री, मोबाइल-फ्रेंडली, और आसानी से डाउनलोड करने योग्य रिज़्यूमे
        </p>
      </div>
    </div>
  );
};

export default Home;
