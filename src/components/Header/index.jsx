import React from 'react';

import './styles.css';

export const Header = ({ name, avatar }) => {
  return (
    <header>
      <h1>{name}</h1>
      <div>
        <strong>{name}</strong>
        <img src={avatar} />
      </div>
    </header>
  );
};
