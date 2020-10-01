import React from 'react';
import './App.css';
import Main from './components/Main';

import '@fullcalendar/common/main.css';
import Appstate from './context/Appstate';

function App() {
  return (
    <div>
      <Appstate>
        <Main />
      </Appstate>
    </div>
  );
}

export default App;
