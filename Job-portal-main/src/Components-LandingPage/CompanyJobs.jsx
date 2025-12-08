import React from "react";
import { useLocation } from "react-router-dom";

const CompanyJobs = () => {
  const { state } = useLocation();
  const { companyName, jobs } = state;

  return (
    <div style={{ padding: "40px" }}>
      <h2>{companyName} - Job Openings</h2>

      {jobs.map((job, index) => (
        <div key={index} style={{ marginTop: "25px", padding: "20px", borderRadius: "12px", border: "1px solid #e0e0e0" }}>
          <h3>{job.role}</h3>
          <p>{companyName}</p>

          <p> {job.experience}</p>
          <p> {job.location}</p>
          <p> {job.salary}</p>
          <p> {job.type}</p>

          <button style={{ marginTop: "15px", padding: "10px 25px", borderRadius: "8px", background: "#007bff", color: "#fff", border: "none" }}>
            Apply
          </button>
        </div>
      ))}
    </div>
  );
};

export default CompanyJobs;
