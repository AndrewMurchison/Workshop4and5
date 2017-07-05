import React from 'react';
import Ticketinfo from './ticketinfo.js';
import Leftsidebar from './leftsidebar.js';
import Rightsidebar from './rightsidebar.js';
import Navbar from './navbar.js';
import {getTicketInfo} from '../server';
import ModalBox from './modal.js';
export default class Content extends React.Component {

  constructor(props) {
    super(props);
    //this.handleTicketChange = this.handleTicketChange.bind(this);
    this.handleTicketReturn = this.handleTicketReturn.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      ticketid: "",
      ticketnum: null,
      modalToggle: false,
      modalMessage: null,
      payToggle: true,
      scanimg: "/img/scanTicket.png",
      navmsg: "Please Scan your Valet Ticket",
      instr: "Move the ticket so the scanner light can read the bar code:",
      valid: []
    };

  }
  componentDidMount() {
    this.nameInput.focus();
  }

  handleTicketReturn(ticketid) {
    ticketid.preventDefault();

    if (this.state.ticketnum == null) {
      var ticketstring = ticketid.target.value.substring(0, ticketid.target.value.length-2);

      getTicketInfo(ticketstring, (fd) => {
        this.setState({
          ticketnum: fd
        }, () => {
          if (this.state.ticketnum == null) {

            this.setState({modalMessage: 2});
            this.setState({payToggle: true});
          } else {

            this.nameInput.placeholder = "Scan Validation";
            this.setState({modalMessage: 1});
            this.setState({payToggle: false});
            this.setState({scanimg: "/img/scanValidation.png"});
            this.setState({navmsg: "Scan Validations or Pick a Payment Option"});
            this.setState({instr: "If you have any validations then please scan them as shown in the video or proceed to payment options shown on the right:"});
          }
        });
      });

    } else {
      this.setState({modalMessage: 7});

      var arrayvar = this.state.valid.slice();
      arrayvar.push(ticketid.target.value);
      this.setState({valid: arrayvar});

    }

    this.nameInput.value = "";
    this.setState({modalToggle: true});

  }

  handleClick(e) {
    e.preventDefault();

    if (e.target.className == "credit") {
      this.setState({modalMessage: 4});
      this.setState({modalToggle: true});
    }
    else if (e.target.className == "cash") {
      this.setState({modalMessage: 5});
      this.setState({modalToggle: true});
    }
    else if(e.target.className == "canceltransaction"){
      this.homescreen();
      this.setState({modalMessage: 8});
      this.setState({modalToggle: true});
    }
    else {
      this.setState({modalMessage: 3});
      this.setState({modalToggle: true});
    }
    this.nameInput.focus();

  }

  closeModal(e) {
    e.preventDefault();

    //this.setState({payToggle: true});
    if (e.target.className == "finish") {
      this.homescreen();
      this.setState({modalMessage: 6});
      setTimeout(() => {
        this.setState({modalToggle: false})
      }, 3000);
      this.nameInput.placeholder = "Scan Ticket";
    } else {
      this.setState({modalToggle: false});
    }
    this.nameInput.focus();
  }

  homescreen(){
    this.setState({payToggle: true});
    this.setState({ticketnum: null});
    this.setState({valid: []});
    this.setState({scanimg: "/img/scanTicket.png"});
    this.setState({navmsg: "Please Scan your Valet Ticket"});
    this.setState({instr: "Move the ticket so the scanner light can read the bar code:"});
  }

  render() {

    return (
      <div>
        <Navbar navmsg={this.state.navmsg} />
        <div id="Content" className="row-fluid">

          <ModalBox title="Ticket Scanned" ticketnum={this.state.ticketnum} onClick={this.closeModal} modalToggle={this.state.modalToggle} modalMessage={this.state.modalMessage}/>
          <Leftsidebar inputRef={(input) => {
            this.nameInput = input;
          }} ticketnum={this.state.ticketnum} ticketid={this.state.ticketid} onTicketReturn={this.handleTicketReturn} scanimg={this.state.scanimg} />

        <Ticketinfo instr={this.state.instr} valid={this.state.valid} ticketnum={this.state.ticketnum} ticketid={this.state.ticketid}/>
          <Rightsidebar onClick={this.handleClick} payToggle={this.state.payToggle}/>
        </div>
      </div>
    );

  }
}
