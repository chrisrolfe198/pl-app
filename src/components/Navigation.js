import React, { PureComponent } from 'react';

const Navigation = (props) => {
  return (
    <div>
      <ul className="navigation">
        {props.items && Object.entries(props.items).map(item => {
          return <NavigationItem childNav={props.childNav || false} key={item[0]} {...item[1]} />
        })}
      </ul>
    </div>
  )
}

class NavigationItem extends PureComponent {
  handleHover(e) {
    this.itemRef.classList.add('navigation-item--active');
  }

  handleEndHover(e) {
    this.itemRef.classList.remove('navigation-item--active');
  }

  render() {
    return (
      <li className="navigation-item" onMouseEnter={this.handleHover.bind(this)} onMouseLeave={this.handleEndHover.bind(this)} ref={ref => {this.itemRef = ref}} key={this.props.name}>
        <a href={this.props.href}>
          {this.props.name}
        </a>
        {this.props.children ? <Navigation childNav={true} items={this.props.children} /> : <span />}
      </li>
    );
  }
}

export default Navigation;
