import React from 'react';

export default class Leftsidebar extends React.Component {

constructor(props){
  super(props);
  this.handleReturn = this.handleReturn.bind(this);
  this.state={
    ticketid: this.props.ticketid,
    ticketnum: this.props.ticketnum
  };
  this.handleChange = this.handleChange.bind(this);
}

componentDidMount(){
  this.setState({ticketnum: this.props.ticketnum});
  this.setState({ticketid: this.props.ticketid});

}

componentWillReceiveProps(nextProps) {
  this.setState({ticketnum: nextProps.ticketnum});
  this.setState({ticketid: nextProps.ticketid})
  

}




  handleChange(e){


      this.setState({ticketid: e.target.value});
      //this.props.onTicketChange(e.target.value);
     //e.preventDefault();
  }

  handleReturn(e){

    if(e.key === 'Enter'){
      e.preventDefault();

    this.props.onTicketReturn(e);

  }
  }


  render() {
    return (
      <div id="leftsidebar" className="col-md-3">


      <div className="row-fluid scanbox">
        <form>
          <input ref={this.props.inputRef} type="text" placeholder="Scan Ticket" onChange={this.handleChange} onKeyDown={this.handleReturn} />
        </form>

      </div>
      <div className="row-fluid scanimg">
        <div className="col-md-3">
        </div>
        <div className="scan col-md-6">
            {this.state.value}
        </div>
        <div className="col-md-3">
        </div>
      </div>
      <div className="last row-fluid">
      </div>
      </div>

    );
  }
}
