import React from 'react';
import { Modal } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ModalBox extends React.Component {
constructor(props){
  super(props);

   this.state={
     show: this.props.modalToggle
   }
}

componentWillReceiveProps(nextProps) {
  this.setState({ show: nextProps.modalToggle }, ()=>{
    if(this.state.show){
     setTimeout(
       () => { this.setState({show: false})},
       2000
     );
   }
  });

  //this.componentDidMount();
}



  render() {
    var title;
    var Message;
    switch(this.props.modalMessage){
      case 1:
        title = "Scanning Ticket";
        Message = "Please wait while the system processes your valet ticket.";
        break;
      case 2:
        title = "Invalid Scan";
        Message = "Please scan a valid ticket";
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


        <Modal
          show={this.state.show}
          container={this}

        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {Message}
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </div>
      </ReactCSSTransitionGroup>
      );


  }
}
