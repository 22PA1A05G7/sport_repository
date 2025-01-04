import React, { useState, useEffect } from 'react';

const Notification = ({ game }) => {
  const [showNotification, setShowNotification] = useState(false);
  
  useEffect(() => {
    const currentDate = new Date();
    const gameDate = new Date(game.date);
    
    // Show notification 1 day before the game
    const timeDifference = gameDate - currentDate;
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (timeDifference <= oneDayInMilliseconds && timeDifference >= 0) {
      setShowNotification(true);
    }

    // Clear the notification once it is displayed
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, oneDayInMilliseconds);

    return () => clearTimeout(timer);
  }, [game]);

  return (
    showNotification && (
      <div className="alert alert-info">
        <strong>Reminder!</strong> The game between <strong>{game.homeTeam.name}</strong> and <strong>{game.awayTeam.name}</strong> is tomorrow at {new Date(game.date).toLocaleTimeString()}.
      </div>
    )
  );
};

export default Notification;
