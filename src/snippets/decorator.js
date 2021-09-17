import { concatAndOutput } from "../util";
const Form = `class Form {
  constructor() {
    this.decorators = [];
    this.output = "base form";
  }
  static decorators = {
    bodi: {
      buildForm: (input) => "Applied Bodi logo. " + input,
    },
    inputForm: {
      buildForm: (input) => "Added an input Form. " + input,
    },
    submitButton: {
      buildForm: (input) => "Added a submit button. " + input,
    },
  };

  decorate(decorator) {
    this.decorators.push(decorator);
  }
  buildForm() {
    this.decorators.forEach((decorator) => {
      this.output = Form.decorators[decorator].buildForm(this.output);
    });

    return this.output;
  }
}`;

const comments = `/* Augment code at runtime.  Rather than writing 
a lot of overhead initially; you keep code simple add customization
on the fly. (Helps app performance) */`;

const output = concatAndOutput(comments, Form);

export default output;
