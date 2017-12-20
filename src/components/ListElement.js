import React from 'react';
import ListItemElement from './ListItemElement';

const ListElement = (props) => {
  let objectIndex = [];
  if (props.objectIndex) {
    objectIndex = props.objectIndex;
  }
  objectIndex.push(props.title.toLowerCase());

  return (
    <div className="list">
      <h1 className="list-title">{props.title}</h1>
      {props.listItems ? <ListItemElement data={props.data} fullscreen={false} objectIndex={objectIndex} listItems={props.listItems} /> : <span />}
    </div>
  );
}

export default ListElement;
