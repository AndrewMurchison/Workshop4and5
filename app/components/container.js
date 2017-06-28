import React from 'react';
import Content from './content.js';
import Navbar from './navbar.js';

export default class Container extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
      <Content />

      </div>
    );
  }
}
