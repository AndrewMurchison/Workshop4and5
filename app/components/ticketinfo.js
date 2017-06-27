import React from 'react';
import Validations from './validations.js';

export default class Ticketinfo extends React.Component {
  render() {
    return (
      <div>


        <div className="row-fluid">
          <div className="col-md-6">
            <span className="alignrt">Ticket #:</span>
          </div>
          <div className="col-md-6">
            <span className="alignct blue">{this.props.ticketnum}</span>
          </div>
        </div>

        <div className="row-fluid">
          <div className="col-md-6">
            <span className="alignrt">Validations:</span>
          </div>
          <div className="col-md-6">
            <Validations validate="HP" />
            &nbsp;
            <Validations validate="HP" />
          </div>
        </div>

        <div className="row-fluid">
          <div className="col-md-6">
            <span className="alignrt">Amount Due:</span>
          </div>
          <div className="col-md-6">
            <span className="alignct orange">{this.props.amtdue}</span>
          </div>
        </div>
      </div>
    );
  }
}
