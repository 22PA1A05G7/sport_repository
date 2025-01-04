import React, { useState } from 'react';

const ScheduleManager = () => {
  const [date, setDate] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');

  const handleCreateSchedule = (e) => {
    e.preventDefault();
    // Logic to create the game schedule
    alert(`Scheduled a game between ${homeTeam} and ${awayTeam} on ${date}`);
  };

  return (
    <div className="container mt-5">
      <h2>Create Game Schedule</h2>
      <form onSubmit={handleCreateSchedule}>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Game Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="homeTeam" className="form-label">Home Team</label>
          <input
            type="text"
            className="form-control"
            id="homeTeam"
            value={homeTeam}
            onChange={(e) => setHomeTeam(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="awayTeam" className="form-label">Away Team</label>
          <input
            type="text"
            className="form-control"
            id="awayTeam"
            value={awayTeam}
            onChange={(e) => setAwayTeam(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Schedule Game</button>
      </form>
    </div>
  );
};

export default ScheduleManager;
