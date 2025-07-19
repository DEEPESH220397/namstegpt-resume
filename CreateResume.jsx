import React, { useState } from "react";

const CreateResume = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    experience: "",
    projects: "",
    languages: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Resume data captured successfully!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">
          📄 Create Resume / रिज़्यूमे बनाएँ
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField label="👤 Full Name / पूरा नाम" name="name" value={formData.name} onChange={handleChange} />
          <InputField label="📧 Email / ईमेल" name="email" value={formData.email} onChange={handleChange} />
          <InputField label="📱 Phone Number / फ़ोन नंबर" name="phone" value={formData.phone} onChange={handleChange} />
          <InputField label="🎓 Education / शिक्षा" name="education" value={formData.education} onChange={handleChange} />
          <InputField label="🛠️ Skills / कौशल" name="skills" value={formData.skills} onChange={handleChange} />
          <InputField label="💼 Experience / अनुभव" name="experience" value={formData.experience} onChange={handleChange} />
          <InputField label="🚀 Projects / प्रोजेक्ट्स" name="projects" value={formData.projects} onChange={handleChange} />
          <InputField label="🗣️ Languages / भाषाएँ" name="languages" value={formData.languages} onChange={handleChange} />

          <button
            type="submit"
            className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg transition duration-300"
          >
            ✅ Submit / जमा करें
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      placeholder="Enter here / यहाँ लिखें"
      required
    />
  </div>
);

export default CreateResume;
