import { concatAndOutput } from "../util";
class ClassInSchedule {
  constructor() {
    this.participants = [];
    console.log(`--A new class is coming up! want to be notified?`);
  }
  newClassStarted() {
    console.log(`--A new class just started`);
    this.publish("class-started");
  }

  subscribe(subscriber) {
    console.log(`${subscriber.name} joined the notification list`);
    this.participants.push(subscriber);
  }

  unsubscribe(subscriber) {
    console.log(`${subscriber.name} unsubscribed the notification list`);
    this.participants = this.participants.filter((s) => s !== subscriber);
  }

  publish(type) {
    switch (type) {
      case "class-started":
        this.participants.forEach((subscriber) => subscriber.getUpdate());
        break;
      default:
        break;
    }
  }
}
class Participant {
  constructor(name) {
    this.name = name;
  }
  getUpdate() {
    console.log(`---${this.name} got a notification about the class update`);
  }
}

const example = `const beachBodyClass = new ClassInSchedule();
const p1 = new Participant("Joe");
const p2 = new Participant("Sam");
const p3 = new Participant("Arnoldo");
beachBodyClass.subscribe(p1);
beachBodyClass.subscribe(p2);
beachBodyClass.subscribe(p3);
beachBodyClass.publish("class-started");
beachBodyClass.unsubscribe(p3)`;

const comments = `/* Promotes "loose coupling" between 
subscribers and observers -- Observers typically hold 
state, while subscribers can "watch" an observer and 
upon state change respond appropriately.  Add and 
subtract subscribers on the fly  (e.g. React state, MVC) - 
and the app will remain stable. Sometimes called pub/sub. */`;

const output = concatAndOutput(comments, ClassInSchedule, Participant, example);
export default output;
