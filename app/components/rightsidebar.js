import React from 'react';


export default class Rightsidebar extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onClick(e);

  }



  render() {
    var opacity ={
      opacity: "1"
    };
    var disabled = false;
    if(this.props.ticketnum == null){
      opacity ={
        opacity: "0.5"
      };
      disabled = true;
    }


    return (
      <div id="rightsidebar" className="col-md-3">
        <div className="row-fluid helploc">
          <div>


          <button onClick={this.handleClick}>
              Help
              <br />
              Click for Assistance
            </button>
          </div>
        </div>

        <div className="row-fluid paymentloc">
          <div className="row-fluid paymentopt">
            <div>

              Payment Options
            </div>
          </div>

          <div className="row-fluid paymenttype">

            <button className="credit" style={opacity} disabled={disabled} onClick={this.handleClick}>Credit/Debit</button>


            <button className="cash" style={opacity}  disabled={disabled} onClick={this.handleClick}>Cash Payments</button>

          </div>

          <div className="row-fluid canceltransaction">
          <button className="canceltransaction" style={opacity} disabled={disabled} onClick={this.handleClick}>Cancel Transaction</button>
          </div>
        </div>
        </div>
    );
  }
}
