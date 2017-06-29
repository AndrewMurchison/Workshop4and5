import React from 'react';
import { Modal } from 'react-bootstrap';

export default class ModalBox extends React.Component {
constructor(props){
  super(props);
  this.state = {
    modalVisible: this.props.modalToggle
  }
}



  render() {
    return (
      <div className="static-modal">

    <Modal.Dialog >
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>

      </Modal.Body>

      <Modal.Footer>

      </Modal.Footer>

    </Modal.Dialog>

  </div>
    );
  }
}
