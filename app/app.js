import React from 'react';
import ReactDOM from 'react-dom';
import Ticketinfo from './components/ticketinfo.js';
import Scanvideo from './components/scanvideo.js';
import Leftsidebar from './components/leftsidebar.js';
import Rightsidebar from './components/rightsidebar.js';
import Navbar from './components/navbar.js';

ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
  );

  ReactDOM.render(
    <Leftsidebar />,
    document.getElementById('leftsidebar')
  );
  ReactDOM.render(
    <Rightsidebar />,
    document.getElementById('rightsidebar')
  );

  ReactDOM.render(
    <Ticketinfo ticket={5} />,
    document.getElementById('ticketinfo')
  );

  ReactDOM.render(
    <Scanvideo />,
    document.getElementById('scanvideo')
  );
