import React from 'react';
import ListItemElement from './ListItemElement';

const ListElement = (props) => {
  return (
    <div className="list">
      <h1 className="list-title">{props.title}</h1>
      {props.listItems ? <ListItemElement fullscreen={false} listItems={props.listItems} /> : <span />}
    </div>
  );
}

export default ListElement;
