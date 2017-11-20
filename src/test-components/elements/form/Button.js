import React, { PureComponent } from 'react';

export default class Button extends PureComponent {
  render() {
    const propsCopy = Object.assign({}, this.props);
    const initialClasses = "btn";
    const finalClasses = `${initialClasses} ${(this.props.className ? this.props.className : '')}`;

    // Allows any props to be applied directly to the button
    // except the children or classes which get augmented
    propsCopy.className = finalClasses;
    delete propsCopy.children;

    return (
      <button {...propsCopy}>{this.props.children ? this.props.children : 'Submit'}</button>
    )
  }
}
