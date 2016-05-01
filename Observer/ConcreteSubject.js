'use strict';

const Subject = require('./Subject');

function ConcreteSubject(state) {
  this.state = state;
  Subject.call(this);
}

ConcreteSubject.prototype = new Subject();
ConcreteSubject.prototype.constructor = ConcreteSubject;

ConcreteSubject.prototype.getState = function() {
  return this.state;
};

ConcreteSubject.prototype.setState = function(state) {
  this.state = state;
  console.log(`state更改为：${state}`);
  this.notifyObservers(state);
};

module.exports = ConcreteSubject;
