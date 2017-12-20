import React from 'react';

const Navigation = (props) => {
  return (
    <div>
      <ul className="navigation">
        {props.items && Object.entries(props.items).map(item => {
          return <NavigationItem key={item[0]} {...item[1]} />
        })}
      </ul>
    </div>
  )
}

const NavigationItem = (props) => {
  return (
    <li className="navigation-item" key={props.name}>
      <a href={props.href}>
        {props.name}
      </a>
      {props.children ? <Navigation items={props.children} /> : <span />}
    </li>
  );
}

export default Navigation;
