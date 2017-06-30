import React from 'react';
import Ticketinfo from './ticketinfo.js';
import Leftsidebar from './leftsidebar.js';
import Rightsidebar from './rightsidebar.js';
import {getTicketInfo} from '../server';
import ModalBox from './modal.js';
export default class Content extends React.Component {

  constructor(props){
    super(props);
    //this.handleTicketChange = this.handleTicketChange.bind(this);
    this.handleTicketReturn = this.handleTicketReturn.bind(this);
    this.state = {
      ticketid: "",
      ticketnum: "",
      modalToggle: false,
      modalMessage: null
    };
  }




  handleTicketReturn(ticketid){
    ticketid.preventDefault();
    getTicketInfo(ticketid.target.value, (fd)=>{
      this.setState({ticketnum: fd}, ()=>{
        if(this.state.ticketnum == null){
          this.setState({modalMessage: 2});
        }
        else{
          this.setState({modalMessage: 1});
        }
      });
    });


    this.setState({modalToggle: true})


  }




  render() {

    return (
      <div id="Content" className="row-fluid">

        <ModalBox title="Ticket Scanned" modalToggle={this.state.modalToggle} modalMessage={this.state.modalMessage} />
      <Leftsidebar ticketid={this.state.ticketid} onTicketReturn={this.handleTicketReturn} />

      <Ticketinfo ticketnum={this.state.ticketnum} ticketid={this.state.ticketid} />
      <Rightsidebar />
      </div>
    );

  }
}
