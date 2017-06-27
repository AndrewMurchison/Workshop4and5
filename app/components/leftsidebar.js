import React from 'react';

export default class Leftsidebar extends React.Component {
  render() {
    return (
      <div>
      <div className="row-fluid scanbox">
        <form>
          <input type="text" />
        </form>
      </div>
      <div className="row-fluid scanimg">
        <div className="col-md-3">
        </div>
        <div className="scan col-md-6">

        </div>
        <div className="col-md-3">
        </div>
      </div>
      <div className="last row-fluid">
      </div>
      </div>

    );
  }
}
