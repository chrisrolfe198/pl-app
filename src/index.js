import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import './pl-styles.css';
import './index.css';
import * as utils from './utils';

import('./build').then(components => {
  const location = window.location.pathname.replace(/^\/|\/$/g, '').split('/');

  const fullscreen = (utils.getQueryVariable('fullscreen') ? utils.getQueryVariable('fullscreen') : false)
  const writePath = window.location.origin;
  const cssUrl = [];

  const sections = {};
  let sectionsObjectList = {};

  let componentsToOperateOn = components.default;

  if (location.length) {
    for (let item of location) {
      componentsToOperateOn = componentsToOperateOn[item];
    }
  }

  let childObjects = false;

  if (typeof componentsToOperateOn === 'function') {
    childObjects = {};
    childObjects[location[location.length - 1]] = componentsToOperateOn;
  } else {
    childObjects = componentsToOperateOn;
  }

  // This will give use the section names
  for (let item of Object.entries(components.default)) {
    sections[item[0]] = [];
    let sectionsObject = {};

    // Then we iterate over the section items (this will handle both an object and an array)
    if (typeof item[1] === 'object') {
      const { sections: returnedSections, sectionsObject: returnedSectionsObject } = utils.buildSectionNames(item[0], item[1]);

      sections[item[0]] = returnedSections;
      sectionsObject = returnedSectionsObject;
    }

    sectionsObjectList[item[0]] = sectionsObject;
  }

  const baseItems = {
    Home: {
      href: `${writePath}`,
      name: 'Home'
    }
  };
  const lastItems = {
    FullScreen: {
      href: '?fullscreen=true',
      name: 'Fullscreen'
    }
  };
  const newItems = utils.getObjectForNavItem(sectionsObjectList, writePath);
  const items = Object.assign({}, baseItems, newItems, lastItems);

  ReactDOM.render(<Container fullscreen={fullscreen} components={components.default} cssUrl={cssUrl} navItems={items} sectionsObjectList={sectionsObjectList} writePath={writePath} childObjects={childObjects} />, document.getElementById('root'));
})
