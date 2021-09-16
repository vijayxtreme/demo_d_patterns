import { concatAndOutput } from "../util";

class Command {
  constructor(reciever) {
    this.receiver = new Reciever();
  }
  execute() {
    throw new Error("Not implemented");
  }
}

class ConcreteCommand extends Command {
  execute() {
    this.receiver.action();
  }
}

class Invoker {
  history = [];
}

class Reciever {
  action() {
    console.log("executing command");
  }
}

const output = concatAndOutput();
export default output;
