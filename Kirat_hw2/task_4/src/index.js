import React from 'react';
import ReactDOM from 'react-dom/client';
import User from './components/User/user';
import UserInfo from './components/UserInfo/userInfo';

// Завдання 4
// Створіть компонент, який буде рендерити те, що йому передадуть як children.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User>
      <UserInfo/>
    </User>
  </React.StrictMode>
);
