import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';

/** Basic registration form using defaults. */
export default class ExampleRegistrationForm extends React.Component {
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />
  }
}