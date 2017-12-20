import React from 'react';
import * as utils from '../utils';

import ListElement from './ListElement';

const accessProperties = (object, keys) => {
  let returnObject = object;

  for (const key of keys) {
    if (returnObject.hasOwnProperty(key.toLowerCase())) {
      returnObject = returnObject[key.toLowerCase()];
    } else {
      return false;
    }
  }

  return returnObject;
}

const ListItemElement = (props) => {
  if (props.fullscreen === 'true' && Object.entries(props.listItems).length === 1) {
    document.body.classList.add('fullscreen');
  }

  const objectIndex = props.objectIndex;

  return (
    <div className="list-item">
      {Object.entries(props.listItems).map(item => {
        const Component = item[1];

        if (utils.isFunction(Component)) {
          // Determine the relevant data to load for the component
          let children = undefined;
          let propsToPassToComponent = accessProperties(props.data, objectIndex);

          if (propsToPassToComponent) {
            propsToPassToComponent = propsToPassToComponent[item[0].toLowerCase()];
          }

          if (propsToPassToComponent && propsToPassToComponent.children) {
            children = propsToPassToComponent.children;
            delete propsToPassToComponent.children;
          }

          return (
            <div key={item[0]} className={'list-item-inner-container' + (props.fullscreen === 'true' ? 'fullscreen' : '')}>
              {props.fullscreen !== 'true' && <h2 className="list-item-title">{item[0]}</h2>}
              <Component {...propsToPassToComponent}>{children}</Component>
            </div>
          );
        } else {
          // Pass the index through to the next list
          return (
            <ListElement data={props.data} key={item[0]} objectIndex={objectIndex} listItems={Component} fullscreen={props.fullscreen} title={item[0]} />
          )
        }
      })}
    </div>
  );
}

export default ListItemElement;
