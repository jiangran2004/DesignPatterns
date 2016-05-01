const Observer = require('./Observer');

function ConcreteObserver(state){
  this.state = state;
  Observer.call(this);
}

ConcreteObserver.prototype = Object.create(Observer.prototype);
ConcreteObserver.prototype.update = function(state) {
  this.state = state;
  console.log(`状态更改为：${state}`);
}

module.exports = ConcreteObserver;
