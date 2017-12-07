import React from 'react';
import * as utils from '../utils';

const ListItemElement = (props) => {
  if (props.fullscreen === 'true' && Object.entries(props.listItems).length === 1) {
    document.body.classList.add('fullscreen');
  }

  return (
    <div className="list-item">
      {Object.entries(props.listItems).map(item => {
        const Component = item[1];

        if (utils.isFunction(Component)) {
          return (
            <div key={item[0]} className={'list-item-inner-container' + (props.fullscreen === 'true' ? 'fullscreen' : '')}>
              {props.fullscreen !== 'true' && <h2 className="list-item-title">{item[0]}</h2>}
              <Component />
            </div>
          );
        } else {
          return (
            <div key={item[0]} className={'list-item-inner' + (props.fullscreen === 'true' ? 'fullscreen' : '')}>
              {props.fullscreen !== 'true' && <h2 className="list-sub-title">{item[0]}</h2>}
              <ListItemElement listItems={Component} />
            </div>
          )
        }
      })}
    </div>
  );
}

export default ListItemElement;
