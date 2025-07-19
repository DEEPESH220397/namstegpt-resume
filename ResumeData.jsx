import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResumeData = () => {
  const resume = {
    name: "Deepesh Chauhan",
    email: "deepesh@example.com",
    phone: "+91 9876543210",
    skills: ["Python", "SQL", "AI Tools", "React", "Git", "Data Science"],
    experience: [
      {
        role: "AI Intern",
        company: "NamsteGPT AI Lab",
        duration: "Jan 2024 - Jun 2024",
        description: "Worked on AI resume generator and chatbot integration.",
      },
    ],
    education: {
      degree: "BCA - Bachelor of Computer Applications",
      college: "XYZ University, India",
      year: "2023",
    },
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Resume Preview / रिज़्यूमे पूर्वावलोकन
      </h1>

      <Card className="max-w-3xl mx-auto shadow-md border-blue-200">
        <CardContent className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{resume.name}</h2>
            <p>{resume.email} | {resume.phone}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Skills / कौशल:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {resume.skills.map((skill, idx) => (
                <Badge key={idx} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Experience / अनुभव:</h3>
            {resume.experience.map((exp, idx) => (
              <div key={idx} className="mt-2">
                <p className="font-semibold">{exp.role} @ {exp.company}</p>
                <p className="text-sm text-gray-600">{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Education / शिक्षा:</h3>
            <p>{resume.education.degree}</p>
            <p>{resume.education.college}</p>
            <p>{resume.education.year}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeData;
