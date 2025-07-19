import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useReactToPrint } from "react-to-print";

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    education: "",
  });

  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "My_Resume",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Resume Data Saved (Console में देखो)");
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Create Your Resume / अपना रिज़्यूमे बनाएं
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-4 bg-white p-6 rounded-xl shadow-md"
      >
        <Input name="name" placeholder="Name / नाम" value={formData.name} onChange={handleChange} required />
        <Input name="email" placeholder="Email / ईमेल" value={formData.email} onChange={handleChange} required />
        <Input name="phone" placeholder="Phone / फोन नंबर" value={formData.phone} onChange={handleChange} required />
        <Textarea name="skills" placeholder="Skills / कौशल" value={formData.skills} onChange={handleChange} required />
        <Textarea name="experience" placeholder="Experience / अनुभव" value={formData.experience} onChange={handleChange} />
        <Textarea name="education" placeholder="Education / शिक्षा" value={formData.education} onChange={handleChange} />

        <div className="flex gap-4">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full">
            Save Resume / सेव करें
          </Button>
          <Button onClick={handlePrint} className="bg-green-600 hover:bg-green-700 w-full">
            Download PDF / पीडीएफ डाउनलोड करें
          </Button>
        </div>
      </form>

      {/* Hidden Resume Preview */}
      <div className="hidden">
        <div ref={resumeRef} className="p-4">
          <h2 className="text-2xl font-bold mb-2">{formData.name}</h2>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Skills:</strong> {formData.skills}</p>
          <p><strong>Experience:</strong> {formData.experience}</p>
          <p><strong>Education:</strong> {formData.education}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
