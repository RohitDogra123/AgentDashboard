import React from 'react';

const AgentDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Agent Dashboard</h1>
      <div className="filter-controls">
        {/* Filter controls would go here */}
        <label>Filter by:</label>
        <select>
          <option value="all">All Agents</option>
          <option value="business">With Business</option>
          <option value="no-business">No Business</option>
        </select>
      </div>
      <div className="metric-cards">
        <div className="metric-card">
          <h2>753</h2>
          <p>Total Active Agents</p>
        </div>
        <div className="metric-card">
          <h2>101</h2>
          <p>Agents With Business</p>
        </div>
        <div className="metric-card">
          <h2>652</h2>
          <p>Agents With No Business</p>
        </div>
      </div>
      <div className="company-card-grid">
        {/* Company cards would go here */}
      </div>
    </div>
  );
};

export default AgentDashboard;