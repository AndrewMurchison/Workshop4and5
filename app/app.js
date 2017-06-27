import React from 'react';
import ReactDOM from 'react-dom';


class Ticketinfo extends React.Component {
  render() {
    return (
      <div>


        <div className="row-fluid">
          <div className="col-md-6">
            <span className="alignrt">Ticket #:</span>
          </div>
          <div className="col-md-6">
            <span className="alignct blue">1234-3</span>
          </div>
        </div>

        <div className="row-fluid">
          <div className="col-md-6">
            <span className="alignrt">Validations:</span>
          </div>
          <div className="col-md-6">
            <span className="alignct green">HP</span>&nbsp;
          </div>
        </div>

        <div className="row-fluid">
          <div className="col-md-6">
            <span className="alignrt">Amount Due:</span>
          </div>
          <div className="col-md-6">
            <span className="alignct orange">$7.00</span>
          </div>
        </div>
      </div>
    );
  }
}

class Scanvideo extends React.Component {
  render() {
    return (
      <div>
      <div className="row-fluid instructions">
        Bar Code Faces Up
        <br /> Move the ticket so the scanner
        <br /> light can read the bar code:
      </div>
      <div className="videocont row-fluid">
          <video loop autoPlay>
            <source src="/img/KioskScanTicket.m4v" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
      <div className="col-md-2">
        <img src="/img/paycelogo.png" />
      </div>
      <div className="col-md-2">
      </div>
      <div className="welcometxt col-md-4">
        Welcome
        <br /> Please Scan your Valet Ticket
        <br />time
      </div>
      <div className="col-md-4">
      </div>
      </div>
    );
  }
}

class Leftsidebar extends React.Component {
  render() {
    return (
      <div>
      <div className="row-fluid scanbox">
        <form>
          <input type="text" />
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

class Rightsidebar extends React.Component {
  render() {
    return (
        <div>
        <div className="row-fluid helploc">
          <div>


          <button>
              Help?
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

            <button>Credit/Debit</button>


            <button className="cash">Cash Payments</button>

          </div>
        </div>
        </div>
    );
  }
}

ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
  );

  ReactDOM.render(
    <Leftsidebar />,
    document.getElementById('leftsidebar')
  );
  ReactDOM.render(
    <Rightsidebar />,
    document.getElementById('rightsidebar')
  );

  ReactDOM.render(
    <Ticketinfo />,
    document.getElementById('ticketinfo')
  );

  ReactDOM.render(
    <Scanvideo />,
    document.getElementById('scanvideo')
  );
