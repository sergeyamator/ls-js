"use strict";

function getFilteredItems(data, text) {
  let filtered = data.filter((item) => {
    return item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
  });

  return filtered;
}

module.exports = getFilteredItems;