import React, { useState } from 'react';

const TeamManager = () => {
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState('');

  const handleCreateTeam = (e) => {
    e.preventDefault();
    // Logic to create a team and assign members
    alert(`Team ${teamName} created with members: ${members}`);
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Team</h2>
      <form onSubmit={handleCreateTeam}>
        <div className="mb-3">
          <label htmlFor="teamName" className="form-label">Team Name</label>
          <input
            type="text"
            className="form-control"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="members" className="form-label">Team Members</label>
          <input
            type="text"
            className="form-control"
            id="members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Team</button>
      </form>
    </div>
  );
};

export default TeamManager;
