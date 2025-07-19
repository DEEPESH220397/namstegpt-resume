import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadResume = () => {
  const handleDownload = () => {
    // 📄 Resume file (PDF) को डाउनलोड करें
    const link = document.createElement("a");
    link.href = "/resume-template.pdf"; // Make sure this file is inside `public/`
    link.download = "NamsteGPT_AI_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50 to-blue-100 px-4 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">
        Download Your Resume
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Click the button below to get your AI-generated resume in PDF format.
        <br />
        नीचे दिए गए बटन पर क्लिक करें और अपना AI Resume PDF में डाउनलोड करें।
      </p>
      <Button
        onClick={handleDownload}
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl shadow-lg"
      >
        <Download className="w-5 h-5" />
        Download Resume / डाउनलोड करें
      </Button>
    </div>
  );
};

export default DownloadResume;
