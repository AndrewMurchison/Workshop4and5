import React from 'react';
import { Modal } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Payment from './payment.js';
export default class ModalBox extends React.Component {
constructor(props){
  super(props);
   this.closeModal = this.closeModal.bind(this);
   this.state={
     show: this.props.modalToggle
   }
}

componentWillReceiveProps(nextProps) {
  if(nextProps.modalMessage == 4 || nextProps.modalMessage == 5){
    this.setState({show: nextProps.modalToggle});
  }
  else{
  this.setState({ show: nextProps.modalToggle }, ()=>{
    if(this.state.show){
     setTimeout(
       () => { this.setState({show: false})},
       3000
     );
   }
  });
}

  //this.componentDidMount();
}

closeModal(e){

  e.preventDefault();
  this.props.onClick(e);
}



  render() {
    var title;
    var content;
    switch(this.props.modalMessage){
      case 1:
        title = "Scanning Ticket";
        content = "Please wait while the system processes your valet ticket.";
        break;
      case 2:
        title = "Invalid Scan";
        content = "Please scan a valid ticket";
        break;
      case 3:
        title = "Help Requested";
        content = "Help has been requested. A valet worker will be over momentarily to assist you.";
        break;
      case 4:
        title = "Payment Screen";
        content = <Payment ticketnum={this.props.ticketnum} onClick={this.closeModal} payMsg={this.props.modalMessage} />;
        break;
      case 5:
        title = "Payment Screen";
        content = <Payment ticketnum={this.props.ticketnum} onClick={this.closeModal} payMsg={this.props.modalMessage} />;
        break;
      case 6:
        title = "Car has been requested";
        content = "Your car is being brought to this entrance. Drive safely.";
        break;
      case 7:
        title = "Scanning Validation";
        content = "Please wait while the system processes your validation.";
        break;
    }

      return(
    <ReactCSSTransitionGroup
      transitionName="example"
  transitionAppear={true}
  transitionAppearTimeout={500}
  transitionEnter={false}
  transitionLeave={false}>
  <div className="modal-container">


        <Modal show={this.state.show} container={this}>
          <Modal.Header>
            <Modal.Title id="contained-modal-title">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {content}
          </Modal.Body>
          <Modal.Footer className="footer">

          </Modal.Footer>
        </Modal>
      </div>
      </ReactCSSTransitionGroup>
      );


  }
}
