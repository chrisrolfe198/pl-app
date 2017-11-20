import React, { PureComponent } from 'react';

import Checkbox from './Checkbox';

export default class Toggle extends PureComponent {
  render() {
    const initialClasses = "toggle";
    const finalClasses = `${initialClasses} ${(this.props.className ? this.props.className : '')}`;

    const propsCopy = {
      ...this.props,
      className: finalClasses,
    }

    delete propsCopy.label;

    if (this.props.label) {
      return (
        <label className="toggle-label">
          <Checkbox {...propsCopy} /> {this.props.label}
        </label>
      )
    } else {
      return (
        <Checkbox {...propsCopy} />
      )
    }
  }
}
