import React, { PureComponent } from 'react';

import Input from './Input';

export default class Checkbox extends PureComponent {
  render() {
    const initialClasses = "checkbox";
    const finalClasses = `${initialClasses} ${(this.props.className ? this.props.className : '')}`;

    const propsCopy = {
      ...this.props,
      type: 'checkbox',
      className: finalClasses,
    }
    return (
      <Input {...propsCopy} />
    )
  }
}
