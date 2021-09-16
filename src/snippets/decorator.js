import { concatAndOutput } from "../util";

class Pasta {
  constructor() {
    this.price = 0;
  }
  getPrice() {
    return this.price;
  }
}

class Penne extends Pasta {
  constructor() {
    super();
    this.price = 8;
  }
}

class PastaDecorator extends Pasta {
  constructor(pasta) {
    super();
    this.pasta = pasta;
  }

  getPrice() {
    return this.pasta.getPrice();
  }
}

class SauceDecorator extends PastaDecorator {
  getPrice() {
    return super.getPrice() + 5;
  }
}

class CheeseDecorator extends PastaDecorator {
  getPrice() {
    return super.getPrice() + 3;
  }
}

const comments = `/* Augment code at runtime.  Rather than writing 
a lot of overhead initially; you keep code simple add customization
on the fly. (Helps app performance) */`;

const output = concatAndOutput(
  comments,
  Pasta,
  Penne,
  PastaDecorator,
  SauceDecorator,
  CheeseDecorator
);

export default output;
