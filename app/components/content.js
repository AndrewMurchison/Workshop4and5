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
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      ticketid: "",
      ticketnum: "",
      modalToggle: false,
      modalMessage: null,
      payToggle: true
    };
  }




  handleTicketReturn(ticketid){
    ticketid.preventDefault();
    getTicketInfo(ticketid.target.value, (fd)=>{
      this.setState({ticketnum: fd}, ()=>{
        if(this.state.ticketnum == null){
          this.setState({modalMessage: 2});
          this.setState({payToggle: true});
        }
        else{
          this.setState({modalMessage: 1});
          this.setState({payToggle: false});
        }
      });
    });


    this.setState({modalToggle: true});


  }

  handleClick(e){
    e.preventDefault();
    if(e.target.className == "credit"){
      this.setState({modalMessage: 4});
      this.setState({modalToggle: true});
    }
    else if(e.target.className == "cash"){
      this.setState({modalMessage: 5});
      this.setState({modalToggle: true});
    }
    else{
      this.setState({modalMessage: 3});
      this.setState({modalToggle: true});
   }

  }

  closeModal(e){
    e.preventDefault();
    this.setState({modalToggle: false});
    //this.setState({payToggle: true});
    if(e.target.className == "finish"){
      this.setState({payToggle: true});
      this.setState({ticketnum: null});
    }

  }




  render() {

    return (
      <div id="Content" className="row-fluid">

        <ModalBox title="Ticket Scanned" ticketnum={this.state.ticketnum} onClick={this.closeModal} modalToggle={this.state.modalToggle} modalMessage={this.state.modalMessage} />
      <Leftsidebar ticketid={this.state.ticketid} onTicketReturn={this.handleTicketReturn} />

      <Ticketinfo ticketnum={this.state.ticketnum} ticketid={this.state.ticketid} />
      <Rightsidebar onClick={this.handleClick} payToggle={this.state.payToggle} />
      </div>
    );

  }
}
