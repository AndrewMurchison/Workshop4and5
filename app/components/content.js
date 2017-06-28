import React from 'react';
import Ticketinfo from './ticketinfo.js';
import Leftsidebar from './leftsidebar.js';
import Rightsidebar from './rightsidebar.js';


export default class Content extends React.Component {
  render() {
    return (
      <div id="Content" className="row-fluid">
      <Leftsidebar />
      <Ticketinfo ticket={2} />
      <Rightsidebar />
      </div>
    );
  }
}
