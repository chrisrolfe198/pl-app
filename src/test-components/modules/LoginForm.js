import React, { PureComponent } from 'react';
import Form from '../elements/form';

const { FormGroup, Input, Button, Toggle, Dropdown } = Form;

export default class LoginForm extends PureComponent {
  render() {
    return (
      <form>
        <FormGroup>
          <label>Username</label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Toggle label="PolyT Enabled?" />
        </FormGroup>
        <FormGroup>
          <label>Password</label>
          <Input type='password' />
        </FormGroup>
        <FormGroup>
          <label>Some choice</label>
          <Dropdown options={{
            optionone: 'First Option'
          }} />
        </FormGroup>
        <FormGroup>
          <Button>Log In</Button>
        </FormGroup>
      </form>
    )
  }
}
