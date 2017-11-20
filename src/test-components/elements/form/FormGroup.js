import React, { PureComponent } from 'react';

export default class FormGroup extends PureComponent {
  render() {
    return (
      <div className="form-group">
        {this.props.children}
      </div>
    )
  }
}
