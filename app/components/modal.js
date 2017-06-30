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
            <Modal.Title id="contained-modal-title">Ticket Scanning</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </div>
      </ReactCSSTransitionGroup>
      );


  }
}
