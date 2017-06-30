import React from 'react';
import Validations from './validations.js';
export default class Ticketinfo extends React.Component {

constructor(props){
  super(props);
  this.state={
    ticketnum: null,
    ticketid: this.props.ticketid
  };
}
componentDidMount(){
  this.setState({ticketnum: this.props.ticketnum})
}

componentWillReceiveProps(nextProps) {
  this.setState({ticketnum: nextProps.ticketnum});
}

  render() {

var data = this.state.ticketnum;


if(data != null){
  
  return (
    <div id="middle" className="col-md-6">

    <div id="ticketinfo" className="row-fluid">
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
          {
            data.validationarr.map((nm)=>{
              return(

                <Validations validate={nm.name} />


              );
            })
          }
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
    </div>

    <div id="scanvideo" className="row-fluid">
    <div className="row-fluid instructions">
      Bar Code Faces Up
      <br /> Move the ticket so the scanner
      <br /> light can read the bar code:
    </div>
    <div className="videocont row-fluid">
        <video loop autoPlay>
          <source src="/img/KioskScanTicket.m4v" type="video/mp4" />
        </video>
      </div>
    </div>

  </div>
  );
}
else{
    return (
      <div id="middle" className="col-md-6">

      <div id="ticketinfo" className="row-fluid">
        <div>

      </div>
      </div>

      <div id="scanvideo" className="row-fluid">
      <div className="row-fluid instructions">
        Bar Code Faces Up
        <br /> Move the ticket so the scanner
        <br /> light can read the bar code:
      </div>
      <div className="videocont row-fluid">
          <video loop autoPlay>
            <source src="/img/KioskScanTicket.m4v" type="video/mp4" />
          </video>
        </div>
      </div>

    </div>
    );
  }
  }
}
