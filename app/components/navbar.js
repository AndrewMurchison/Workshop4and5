import React from 'react';


var interval;
export default class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state={

      curTime: new Date().toLocaleString()
    }
  }

  componentDidMount() {

    interval = setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }

  componentWillUnmount(){
    clearInterval(interval);
  }

  render() {
    var msg = "Please Scan your Valet Ticket";
    if(this.props.ticketnum != null){
      msg = "Scan Validations or Pick a Payment Option";
    }





    return (
      <div id="navbar" className="row-fluid">



      <div className="col-md-2">
      
      </div>
      <div className="col-md-2">
      </div>
      <div className="welcometxt col-md-4">
        Welcome
        <br /> {msg}
        <br /> {this.state.curTime}
      </div>
      <div className="col-md-4">
      </div>
      </div>

    );
  }
}
