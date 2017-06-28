import React from 'react';

export default class Rightsidebar extends React.Component {
  render() {
    return (
      <div id="rightsidebar" className="col-md-3">
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

            <button data-toggle="modal" >Credit/Debit</button>


            <button className="cash">Cash Payments</button>

          </div>
        </div>
        </div>
    );
  }
}
