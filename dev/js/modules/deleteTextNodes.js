'use strict';

const TEXT_NODE = 3,
  ELEMENT_NODE = 1;

function deleteTextNodes(node) {
  let nodes = node.childNodes,
    i = 0;

  for (let i = 0; i < nodes.length;) {
    let item = nodes[i];
    if (item.nodeType === TEXT_NODE) {
      node.removeChild(item);
    }

    if (item.nodeType === ELEMENT_NODE) {
      deleteTextNodes(item);
      item = nodes[i++];
    }

  }
}

module.exports = deleteTextNodes;