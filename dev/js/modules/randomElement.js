'use strict';

function randomElement(tagName, className) {
  const
    GAP = 100,
    MIN = 10,
    MAX_WIDTH = 500,
    MAX_HEIGHT = 100,
    MAX_CORD_LEFT = window.innerWidth - GAP,
    MAX_CORD_TOP = window.innerHeight - GAP;

  let element = document.createElement(tagName);

  element.classList.add(className);
  element.id = `drag-element-${getRandomId()}`;
  element.setAttribute('draggable', 'true');

  setStyles(element, {
    width: getRandomArbitrary(MIN, MAX_WIDTH),
    height: getRandomArbitrary(MIN, MAX_HEIGHT),
    left: getRandomArbitrary(MIN, MAX_CORD_LEFT),
    top: getRandomArbitrary(MIN, MAX_CORD_TOP),
    bgColor: randomColor()
  });

  render(element, document.body);
  attachEventListeners(element);
}

/**
 *
 * @param {HTMLElement} el
 * @param {Object} opt
 */
function setStyles(el, opt) {
  el.style.width = opt.width + 'px';
  el.style.height = opt.height + 'px';
  el.style.left = opt.left + 'px';
  el.style.top = opt.top + 'px';
  el.style.backgroundColor = opt.bgColor
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

/**
 * Отрисовываем элемент на страничке
 * @param {HTMLElement} element
 * @param {HTMLElement} container
 */
function render(element, container) {
  container.appendChild(element);
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer value
 * @returns {number}
 */
function getRandomId() {
  return (getRandomArbitrary(0.1, 1) * 10000).toFixed()
}

function attachEventListeners(element) {
  element.addEventListener('mousedown', onMouseDown);
  element.addEventListener('dragstart', onDragStart);
}

/**
 * Move element
 * @param e
 */
function onMouseDown(e) {
  moveAt(this, e);
}

function onDragStart(e) {
  document.body.addEventListener('dragover', onDragOver);
  document.body.addEventListener('drop', onDrop);

  this.addEventListener('dragend', onDragEnd);
  this.style.opacity = '0.4';

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text', this.id);
}

function onDrop(e) {
  e.stopPropagation();

  let id = e.dataTransfer.getData('text'),
    element = document.querySelector(`#${id}`);

  moveAt(element, e);
}

function onDragOver(e) {
  e.preventDefault();
}

function onDragEnd() {
  this.style.opacity = '1';
}

function moveAt(el, e) {
  el.style.left = e.pageX - el.offsetWidth / 2 + 'px';
  el.style.top = e.pageY - el.offsetHeight / 2 + 'px';
}

module.exports = randomElement;