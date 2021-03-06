import './styles.css';

import React from 'react';

export const Card = (props) => {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
};
