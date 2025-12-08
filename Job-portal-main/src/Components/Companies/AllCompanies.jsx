import React from "react";
import "./AllCompanies.css";

const companiesData = [
  {
    company: "Wipro",
    jobTitle: "UI/UX Designer",
    duration: "3 months duration",
    salary: "₹30,000/month",
    experience: "0 to 1 year of experience",
    location: "Bangalore",
    jobType: "Internship",
    posted: "2 days ago",
    openings: 5,
    applicants: 40,
    logo: "Job-portal-main/src/assets/WIT.png"
  },
  {
    company: "Cognizant",
    jobTitle: "Software Engineer",
    duration: "Permanent",
    salary: "₹60,000/month",
    experience: "3 to 5 years of experience",
    location: "Hyderabad",
    jobType: "Full-Time",
    posted: "1 week ago",
    openings: 2,
    applicants: 80,
    logo: "Job-portal-main/src/assets/CTSH_BIG.png"
  },
  {
    company: "Infosys",
    jobTitle: "Marketing Manager",
    duration: "3 months duration",
    salary: "₹40,000/month",
    experience: "2 to 3 years of experience",
    location: "Chennai",
    jobType: "Full-Time",
    posted: "6 days ago",
    openings: 1,
    applicants: 55,
    logo: "Job-portal-main/src/assets/INFY_BIG.png"
  },
  {
    company: "Amazon",
    jobTitle: "Senior Software Engineer",
    duration: "Permanent",
    salary: "₹1,20,000/month",
    experience: "5+ years of experience",
    location: "Pune",
    jobType: "Full-Time",
    posted: "4 days ago",
    openings: 3,
    applicants: 120,
    logo: "Job-portal-main/src/assets/AMZN_BIG.png"
  },
  {
    company: "TCS",
    jobTitle: "Backend Developer",
    duration: "6 months duration",
    salary: "₹35,000/month",
    experience: "1 to 2 years of experience",
    location: "Mumbai",
    jobType: "Internship",
    posted: "3 days ago",
    openings: 4,
    applicants: 65,
    logo: "'Job-portal-main/src/assets/TCS.png'"
  },
  {
    company: "Meta",
    jobTitle: "Product Analyst",
    duration: "Permanent",
    salary: "₹80,000/month",
    experience: "2+ years of experience",
    location: "Remote",
    jobType: "Full-Time",
    posted: "5 days ago",
    openings: 1,
    applicants: 95,
    logo: "'Job-portal-main/src/assets/META_BIG.png'"
  }
];

const AllCompanies = () => {
  return (
    <div className="companies-container">
      <h2 className="companies-heading">Companies</h2>

      <div className="cards-wrapper">
        {companiesData.map((item, index) => (
          <div key={index} className="company-card">
            <div className="left-section">
              <h3>{item.jobTitle}</h3>
              <p className="company-name">{item.company}</p>

              <div className="details">
                <p> {item.duration}</p>
                <p> {item.salary}</p>
                <p> {item.experience}</p>
                <p> {item.location}</p>
              </div>

              <span className="tag">{item.jobType}</span>

              <div className="footer">
                <p>Posted: {item.posted}</p>
                <p>Openings: {item.openings}</p>
                <p>Applicants: {item.applicants}</p>

                <button className="save-btn">Save</button>
                <button className="apply-btn">Apply</button>
              </div>
            </div>

            <div className="logo-section">
              <img src={item.logo} alt={item.company} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCompanies;
