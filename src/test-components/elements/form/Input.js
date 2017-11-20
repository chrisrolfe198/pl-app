import React, { PureComponent } from 'react';

export default class Input extends PureComponent {
  render() {
    const initialClasses = "form-control";
    const finalClasses = `${initialClasses} ${(this.props.className ? this.props.className : '')}`;

    const propsCopy = {
      ...this.props,
      className: finalClasses,
      type: (this.props.type ? this.props.type : 'text')
    }

    return (
      <input {...propsCopy} />
    )
  }
}
