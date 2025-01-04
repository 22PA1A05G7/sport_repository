import React, { useState, useEffect } from 'react';
import { Calendar } from '@fullcalendar/react';
import '@fullcalendar/react/dist/vdom';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

const CalendarView = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/games') // Your backend API to fetch games
      .then(response => setGames(response.data))
      .catch(error => console.log(error));
  }, []);

  const events = games.map(game => ({
    title: `${game.homeTeam.name} vs ${game.awayTeam.name}`,
    date: game.date,
  }));

  return (
    <div className="container mt-5">
      <h2>Game Schedule</h2>
      <Calendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
    </div>
  );
};

export default CalendarView;
