import { concatAndOutput } from "../util";

class BeachBodyClass {
  constructor() {
    console.log(`----starting class!`);
  }
  static displayParticipants(attendees) {
    console.log(`---attendees in class`, attendees);
    console.log(`---there are ${attendees.length} in class`);
  }
}
class AttendanceTaker {
  static attendees = [];

  static attend(participant) {
    this.attendees.push(participant);
    BeachBodyClass.displayParticipants(this.attendees);
  }

  static remove(participant) {
    this.attendees = this.attendees.filter((person) => person !== participant);
    BeachBodyClass.displayParticipants(this.attendees);
  }
}
class Participant {
  constructor(name) {
    this.name = name;
    AttendanceTaker.attend(this.name);
  }
  dropOff() {
    AttendanceTaker.remove(this.name);
  }
}

const example = `const p1 = new Participant("Tomas");
const p2 = new Participant("Jorge");
const p3 = new Participant("Sophia");
p3.dropOff()`;

const comments = `/* Handles communication between components, 
as a single source of truth. This allows other components to 
remain simple, while the complexity of handling communication 
is handled in one area. */`;

const output = concatAndOutput(
  comments,
  BeachBodyClass,
  AttendanceTaker,
  Participant,
  example
);
export default output;
