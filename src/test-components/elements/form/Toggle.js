import React, { PureComponent } from 'react';

import Checkbox from './Checkbox';

export default class Toggle extends PureComponent {
  render() {
    const { label, ...otherProps } = this.props;
    const initialClasses = "toggle";
    const finalClasses = `${initialClasses} ${(this.props.className ? this.props.className : '')}`;

    otherProps.className = finalClasses;

    if (label) {
      return (
        <label className="toggle-label">
          <Checkbox {...otherProps} /> {label}
        </label>
      )
    } else {
      return (
        <Checkbox {...otherProps} />
      )
    }
  }
}
