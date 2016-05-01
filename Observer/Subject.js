'use strict';

function Subject() {
  this.observers = [];
}

Subject.prototype.attach = function(observer) {
  this.observers.push(observer);
};

Subject.prototype.detach = function(observer) {
  const searchIndex = this.observers.indexOf(observer);
  if (searchIndex >= 0) this.observers.splice(searchIndex, 1);
};

Subject.prototype.notifyObservers = function(state) {
  this.observers.forEach((observer) => observer.update(state));
};

module.exports = Subject;
