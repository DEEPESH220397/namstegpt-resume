import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ResumePreview = ({ formData }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${formData.name}_Resume`,
  });

  return (
    <div className="p-4 text-black">
      <div ref={componentRef} className="p-6 max-w-3xl mx-auto bg-white border shadow-lg">
        <div className="flex items-center mb-4">
          <img
            src={formData.photo}
            alt="User"
            className="w-24 h-24 object-cover rounded-full border border-gray-400"
          />
          <div className="ml-6">
            <h1 className="text-3xl font-bold">{formData.name}</h1>
            <p>{formData.email} | {formData.phone}</p>
            <p>{formData.address}</p>
          </div>
        </div>

        <hr className="my-4" />

        <div>
          <h2 className="text-xl font-semibold underline mb-2">Summary</h2>
          <p>{formData.summary}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold underline mb-2">Education</h2>
          <p><strong>{formData.education}</strong></p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold underline mb-2">Experience</h2>
          <p>{formData.experience}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold underline mb-2">Skills</h2>
          <p>{formData.skills}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold underline mb-2">Projects</h2>
          <p>{formData.projects}</p>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handlePrint}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ResumePreview;
