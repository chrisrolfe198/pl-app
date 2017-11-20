import React, { PureComponent } from 'react';

export default class Dropdown extends PureComponent {
  render() {
    const { options, ...otherProps } = this.props;

    const initialClasses = "form-control";
    const finalClasses = `${initialClasses} ${(this.props.className ? this.props.className : '')}`;

    otherProps.className = finalClasses;
    // Should this be optional?
    otherProps.defaultValue = '';

    return (
      <select {...otherProps}>
        <option value="" disabled>Select an option</option>
        {options && Object.entries(options).map(item => {
          const key = item[0];
          const descriptor = item[1];
          return (<option key={key} value={key}>{descriptor}</option>)
        })}
      </select>
    )
  }
}
