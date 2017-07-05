import React from 'react';

export default class Validations extends React.Component {

  render() {
    return (
      <div>
      <span className="alignct green">{this.props.validate}</span>
      &nbsp;
      </div>

    );
  }
}
