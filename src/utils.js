export const getObjectForNavItem = (sections, basePath) => {
  const items = {};

  for (let item of Object.entries(sections)) {
    let newObject = {
      href: `${basePath}/${item[0]}/`,
      name: item[0]
    };

    //TODO: Make this handle nested objects
    if (typeof item[1] === 'object') {
      newObject.children = getObjectForNavItem(item[1], `${basePath}/${item[0]}`);
    }

    items[item[0]] = newObject;
  }

  return items;
}

export const isFunction = obj => !!(obj && obj.constructor && obj.call && obj.apply);

/* Looping functions */
export const buildSectionNames = (name, item) => {
  const sections = {};
  const sectionsObject = {};

  sections[name] = [];

  if (item) {
    for (let innerItem of Object.entries(item)) {
      if (typeof innerItem[1] === 'object') {
        const {
          sections: retrievedSections,
          sectionsObject: retrievedSectionsObjects
        } = buildSectionNames(innerItem[0], innerItem[1]);

        sections[name] = retrievedSections;
        sectionsObject[innerItem[0]] = retrievedSectionsObjects;
      } else {
        sections[name].push(innerItem[0]);
        sectionsObject[innerItem[0]] = innerItem[1];
      }
    }
  }

  return {
    sections,
    sectionsObject
  }
}

export const getQueryVariable = (variable) => {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] === variable){return pair[1];}
  }
  return(false);
}
