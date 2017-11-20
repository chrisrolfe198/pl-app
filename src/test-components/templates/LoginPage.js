import React, { PureComponent } from 'react';
import LoginForm from '../modules/LoginForm';

export default class LoginForm extends PureComponent {
  render() {
    return (
      <StandardLayout>
        <LoginForm />
      </StandardLayout>
    )
  }
}
