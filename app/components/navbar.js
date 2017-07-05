import React from 'react';

export default class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state={
      curTime: new Date().toLocaleString()
    }
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }

  render() {






    return (
      <div id="navbar" className="row-fluid">



      <div className="col-md-2">
        <img src="/img/paycelogo.png" />
      </div>
      <div className="col-md-2">
      </div>
      <div className="welcometxt col-md-4">
        Welcome
        <br /> {this.props.navmsg}
        <br /> {this.state.curTime}
      </div>
      <div className="col-md-4">
      </div>
      </div>

    );
  }
}
