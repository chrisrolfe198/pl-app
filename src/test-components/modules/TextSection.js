import React, { PureComponent } from 'react';
import Base from '../elements/base';

const { Heading, Link } = Base;

export default class LoginForm extends PureComponent {
  render() {
    return (
      <section>
        <Heading>Lorem ipsum dolar siet amet</Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus laoreet ex in auctor. Ut est velit, ultricies sed mi ac, finibus lobortis est. Quisque ullamcorper pharetra lacus in elementum. Pellentesque lacus eros, scelerisque sit amet nisi nec, tincidunt tincidunt leo. Sed condimentum mauris a accumsan ultrices. Proin hendrerit erat sem, vitae imperdiet turpis aliquam eget. Cras venenatis enim elit, eget lacinia felis finibus id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi in enim libero. Nunc sed lorem id turpis pulvinar imperdiet vitae sit amet quam.</p>
        <Link href="/">Click me</Link>
      </section>
    )
  }
}
