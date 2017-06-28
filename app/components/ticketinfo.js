import React from 'react';
import Validations from './validations.js';
import {getTicketInfo} from '../server';
export default class Ticketinfo extends React.Component {

constructor(props){
  super(props);
  this.state={
    ticketnum: ""
  };
}

componentDidMount(){
  getTicketInfo(this.props.ticket, (fd)=>{
    this.setState({ticketnum: fd});
  })
}




  render() {
    var data = this.state.ticketnum;
    return (
      <div>


        <div className="row-fluid">
          <div className="col-md-6">
            <span className="alignrt">Ticket #:</span>
          </div>
          <div className="col-md-6">
            <span className="alignct blue">{data.num}</span>
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
            <span className="alignct orange">${data.amtdue}</span>
          </div>
        </div>
      </div>
    );
  }
}
