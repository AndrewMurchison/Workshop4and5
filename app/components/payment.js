import React from 'react';

export default class Payment extends React.Component {

  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e){
    e.preventDefault();
    
    this.props.onClick(e);
  }



  render() {
    var src;
    var msg;
    var amtdue = this.props.ticketnum;
    if(amtdue == null){
      amtdue = "";
    }
    else{
      amtdue = this.props.ticketnum.amtdue;
    }
    if(this.props.payMsg == 4){
      src = "/img/credit.mp4";
      msg = "Please swipe your Debit/Credit card as shown in the video and then follow the instructions displayed on the card processing unit.";
    }
    else{
      src = "/img/cash.mp4";
      msg = "Insert cash as shown in the video to complete the transaction."
    }
    return (
      <div className="paymodal row-fluid">
        <div className="col-md-6">
          <video loop autoPlay>
            <source src={src} type="video/mp4" />
          </video>
        </div>
        <div className="col-md-6">
          <div className="amtdue">Amount Due: ${amtdue}</div>
          <br />
          <div>{msg}</div>
          <br />
          <div>
            <button className="cancel" onClick={this.closeModal}>Cancel</button>
            <button className="finish" onClick={this.closeModal}>Finish</button>
          </div>
        </div>
      </div>

    );
  }
}
