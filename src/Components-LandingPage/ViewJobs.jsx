
import React from 'react';

const companies = [
  
  { name: 'Wipro', logo: 'Job-portal-main/src/assets/WIT.png', desc: 'Leading ITeS company with global presence' },
  
];

const jobs = [
  {
    title: 'UI/UX Designer',
    company: 'Wipro',
    location: 'Bangalore, India',
    posted: '2 days ago',
    type: 'Full Time',
    salary: '₹8L - ₹12L',
    highlights: ['3+ years exp', 'Onsite', 'Immediate Joiner Preferred'],
    overview: 'Join Wipro as a UI/UX Designer and help us build beautiful, user-centric products.',
    description: 'We are looking for a creative UI/UX Designer to join our team. You will work closely with product managers and engineers to design user interfaces and experiences for our web and mobile applications.',
    responsibilities: [
      'Collaborate with cross-functional teams',
      'Create wireframes, prototypes, and visual designs',
      'Conduct user research and usability testing',
      'Ensure designs are consistent with brand guidelines',
    ],
    skills: ['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Wireframing'],
    openings: 1,
  },
  // Add more jobs as needed
];

const sidebarJobs = [
  { title: 'Full Stack Developer', openings: 2 },
  { title: 'Senior Manager', openings: 1 },
  { title: 'Data Analyst', openings: 3 },
];

const ViewJobs = () => {
  return (
    <div style={{ background: '#f7f9fc', minHeight: '100vh', padding: '32px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 32, fontWeight: 700, fontSize: 28 }}>Find Jobs By Company</h2>
        <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
          {companies.map((c) => (
            <div key={c.name} style={{ flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #e0e0e0', padding: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
              <img src={c.logo} alt={c.name} style={{ width: 100, height: 100, objectFit: 'contain' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 18 }}>{c.name}</div>
                <div style={{ color: '#666', fontSize: 14 }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          {/* Main job card */}
          <div style={{ flex: 2, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #e0e0e0', padding: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 22 }}>{jobs[0].title}</div>
              <span style={{ background: '#e3f2fd', color: '#1976d2', borderRadius: 6, padding: '4px 12px', fontSize: 14 }}>{jobs[0].type}</span>
            </div>
            <div style={{ color: '#555', marginBottom: 8 }}>{jobs[0].company} &middot; {jobs[0].location}</div>
            <div style={{ color: '#888', fontSize: 13, marginBottom: 16 }}>Posted {jobs[0].posted} &middot; Salary: {jobs[0].salary}</div>
            <div style={{ marginBottom: 16 }}>
              {jobs[0].highlights.map((h) => (
                <span key={h} style={{ background: '#f0f4c3', color: '#827717', borderRadius: 6, padding: '4px 10px', marginRight: 8, fontSize: 13 }}>{h}</span>
              ))}
            </div>
            <div style={{ marginBottom: 16 }}>
              <strong>Company Overview:</strong>
              <div style={{ color: '#444', marginTop: 4 }}>{jobs[0].overview}</div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <strong>Job Description:</strong>
              <div style={{ color: '#444', marginTop: 4 }}>{jobs[0].description}</div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <strong>Responsibilities:</strong>
              <ul style={{ marginTop: 4, color: '#444', paddingLeft: 18 }}>
                {jobs[0].responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div style={{ marginBottom: 16 }}>
              <strong>Key Skills:</strong>
              <div style={{ marginTop: 4 }}>
                {jobs[0].skills.map((s) => (
                  <span key={s} style={{ background: '#e0e0e0', borderRadius: 6, padding: '4px 10px', marginRight: 8, fontSize: 13 }}>{s}</span>
                ))}
              </div>
            </div>
            <button style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Apply</button>
          </div>
          {/* Sidebar jobs */}
          <div style={{ flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #e0e0e0', padding: 24, minWidth: 280 }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>Other Openings at Wipro</div>
            {sidebarJobs.map((job) => (
              <div key={job.title} style={{ marginBottom: 18, paddingBottom: 12, borderBottom: '1px solid #eee' }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{job.title}</div>
                <div style={{ color: '#888', fontSize: 13 }}>Openings: {job.openings}</div>
                <button style={{ background: '#e3f2fd', color: '#1976d2', border: 'none', borderRadius: 6, padding: '6px 16px', fontWeight: 500, fontSize: 14, marginTop: 8, cursor: 'pointer' }}>View details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJobs;