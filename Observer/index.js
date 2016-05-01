const ConcreteObserver = require('./ConcreteObserver');
const ConcreteSubject = require('./ConcreteSubject');

const observer = new ConcreteObserver();
const subject = new ConcreteSubject();
subject.attach(observer);

subject.setState('new state');
