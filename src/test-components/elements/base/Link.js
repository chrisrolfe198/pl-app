import React, { PureComponent } from 'react';

export default class Heading extends PureComponent {
  render() {
    return (
      <a {...this.props}>{this.props.children}</a>
    )
  }
}
