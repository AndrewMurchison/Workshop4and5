import React from 'react';

export default class Leftsidebar extends React.Component {

constructor(props){
  super(props);
  this.state={
    value: ""
  };
}


  handleReturn(e){
    //e.preventDefault();
    if (e.key === 'Enter') {
      this.setState({value: "fish"});
    }

  }

  handleChange(e){
    e.preventDefault();

      this.setState({value: e.target.value});


  }


  render() {
    return (
      <div id="leftsidebar" className="col-md-3">


      <div className="row-fluid scanbox">
        <form>
          <input type="text" placeholder="Scan Ticket" value={this.state.value} onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleReturn(e)} />
        </form>
      </div>
      <div className="row-fluid scanimg">
        <div className="col-md-3">
        </div>
        <div className="scan col-md-6">

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
