import React from 'react';
import Ticketinfo from './ticketinfo.js';
import Leftsidebar from './leftsidebar.js';
import Rightsidebar from './rightsidebar.js';
import {getTicketInfo} from '../server';
import ModalBox from './modal.js';
export default class Content extends React.Component {

  constructor(props){
    super(props);
    this.handleTicketChange = this.handleTicketChange.bind(this);
    this.handleTicketReturn = this.handleTicketReturn.bind(this);
    this.state = {
      ticketid: "",
      ticketnum: "",
      modalToggle: false
    };
  }

  handleTicketChange(ticketid){
    this.setState({ticketid});
  }

  handleTicketReturn(ticketid){
    ticketid.preventDefault();
    getTicketInfo(ticketid.target.value, (fd)=>{
      this.setState({ticketnum: fd});
    });
    var modal = this.state.modalToggle;
    this.setState({modalToggle: !modal})

  }


  render() {

    return (
      <div id="Content" className="row-fluid">
       <ModalBox modalToggle={this.state.modalToggle} />
      <Leftsidebar ticketid={this.state.ticketid} onTicketReturn={this.handleTicketReturn}  onTicketChange={this.handleTicketChange} />

      <Ticketinfo ticketnum={this.state.ticketnum} ticketid={this.state.ticketid} />
      <Rightsidebar />
      </div>
    );
  }
}
