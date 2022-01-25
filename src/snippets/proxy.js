import { concatAndOutput } from "../util";

const NewFeature = `class NewFeature {
  static showNewFeature() {
    return 'Check it out!';
  }
}`;

const NewFeatureProxy = `class NewFeatureProxy {
  static featureCheck(participant) {
    return participant.clubStatus === "registered"
      ? NewFeature.showNewFeature()
      : 'Sign Up Page';
  }
}`;

const Participant = `class Participant {
  constructor(status = "unregistered") {
    this.clubStatus = status;
  }
}`;

const example = `const p1 = new Participant();
const result = NewFeatureProxy.featureCheck(p1);
console.log(result);

const p2 = new Participant("registered");
const result2 = NewFeatureProxy.featureCheck(p2);
console.log(result2);`;

const comments = `/* Code is received by an in-between class 
or method and then based on logic executed or 
directed elsewhere.  (E.g. fetch requests can be grouped 
together via a proxy to reduce constant pinging of an API). */`;

const output = concatAndOutput(
  comments,
  NewFeature,
  NewFeatureProxy,
  Participant,
  example
);
export default output;
