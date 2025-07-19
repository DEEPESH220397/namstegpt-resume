// src/components/resumeTemplate.js
import React from "react";
import "./resumeTemplate.css";

const ResumeTemplate = ({ data }) => {
  return (
    <div className="resume">
      <div className="header">
        <img
          src={data.photo || "/default.jpg"}
          alt="profile"
          className="photo"
        />
        <div>
          <h1>{data.name}</h1>
          <p>{data.email} | {data.phone}</p>
          <p>{data.address}</p>
        </div>
      </div>

      <hr />

      <section>
        <h2>Career Objective</h2>
        <p>{data.objective}</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          {data.skills?.split(",").map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p><b>{data.degree}</b> – {data.university} ({data.year})</p>
      </section>

      <section>
        <h2>Projects</h2>
        <p><b>{data.projectTitle}</b>: {data.projectDescription}</p>
      </section>

      <section>
        <h2>Languages</h2>
        <p>{data.languages}</p>
      </section>
    </div>
  );
};

export default ResumeTemplate;
