import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content.js';


var timer;

class GridContent extends React.Component{
  constructor(props){
    super(props);
    this.onMove = this.onMove.bind(this);
    this.contentMove = this.contentMove.bind(this);
    this.state={
      display: "welcome",
      curTime: new Date().toLocaleString()
    };

  }
  componentDidMount(){
    timer = setTimeout(()=>{this.setState({display: "welcome"})}, 5000);
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }

  onMove(){
    this.setState({display: "content"});

  }

  contentMove(){
    clearTimeout(timer);

      timer = setTimeout(()=>{this.setState({display: "welcome"})}, 120000);

  }







  render(){


      var sw = screen.width;
      var sh = screen.height;
      if(this.state.display == "welcome"){
        return(
          <video onMouseMove={this.onMove} width={sw} height={sh} loop autoPlay>
            <source src="/img/kioskwelcome.m4v" type="video/mp4" />
          </video>
        );
      }
      else{
        return(
          <div onClick={this.contentMove} onKeyDown={this.contentMove} onMouseMove={this.contentMove}>
          <Content timedisp={this.state.curTime} />
          </div>
        );
      }
  }
}



ReactDOM.render(
  <GridContent />,
  document.getElementById('maingrid')

  );
