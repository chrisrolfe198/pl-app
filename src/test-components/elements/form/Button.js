import React, { PureComponent } from 'react';

export default class Button extends PureComponent {
  render() {
    const { children, ...otherProps } = this.props;

    const initialClasses = "btn";
    const finalClasses = `${initialClasses} ${(this.props.className ? this.props.className : '')}`;

    otherProps.className = finalClasses;

    return (
      <button {...otherProps}>{children ? children : 'Submit'}</button>
    )
  }
}
