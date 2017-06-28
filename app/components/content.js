import React from 'react';
import Ticketinfo from './ticketinfo.js';
import Leftsidebar from './leftsidebar.js';
import Rightsidebar from './rightsidebar.js';


export default class Content extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: "1"
    };
  }




  handleReturn(e){
    //e.preventDefault();
    if (e.key === 'Enter') {
      this.setState({value: e.target.value});
    }

  }
  render() {

    return (
      <div id="Content" className="row-fluid">
      <Leftsidebar val={this.state.value} onKeyDown={(e) => this.handleReturn(e)} />
      <Ticketinfo ticket={this.state.value} />
      <Rightsidebar val={this.state.value} />
      </div>
    );
  }
}
