import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
      <div className="col-md-2">
        <img src="/img/paycelogo.png" />
      </div>
      <div className="col-md-2">
      </div>
      <div className="welcometxt col-md-4">
        Welcome
        <br /> Please Scan your Valet Ticket
        <br />time
      </div>
      <div className="col-md-4">
      </div>
      </div>
    );
  }
}
