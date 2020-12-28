import React from 'react';
import './styles.css';

export const Sidebar = ({ users, socket }) => {
  return (
    <div className="sidebar">
      <ul>
        {users &&
          users.map((user, index) => (
            <li key={index}>
              <a href="/">{user.name}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};
