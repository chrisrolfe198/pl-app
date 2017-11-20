import React, { PureComponent } from 'react';

export default class Heading extends PureComponent {
  render() {
    return (
      <h1 {...this.props}>{this.props.children}</h1>
    )
  }
}
