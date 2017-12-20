import React from 'react';
import ListElement from './ListElement';
import ListItemElement from './ListItemElement';
import Navigation from './Navigation';
import * as utils from '../utils';

const Container = (props) => {
  let childObjects = props.childObjects;

  if (!childObjects) {
    childObjects = props.sectionsObjectList;
  }

  return (
    <div>
      {props.cssUrl.map(item => (<link key={item} rel="stylesheet" href={item} />))}
      {props.fullscreen !== 'true' && <Navigation items={props.navItems} />}
      {Object.entries(childObjects).map(item => {
        if (utils.isFunction(item[1])) {
          // THIS IS WEIRD
          // todo: this needs to make more sense, we can probably combine the ListElement and ListItemElement better than this
          // What happens if childObjects contains more than one function?
          return (<ListItemElement objectIndex={props.objectIndex} data={props.data} fullscreen={props.fullscreen} key={item[0]} listItems={childObjects} />)
        } else {
          return (<ListElement objectIndex={props.objectIndex} data={props.data} fullscreen={props.fullscreen} key={item[0]} title={item[0]} listItems={item[1]} />)
        }
      })}
    </div>
  );
}

export default Container;
