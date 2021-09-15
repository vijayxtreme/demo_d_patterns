const factory = `
  class BmwFactory { 
    static create(type) {
      if (type === 'X5')
        return new Bmw(type, 108000, 300);
      if (type === 'X6')
        return new Bmw(type, 111000, 320);
    }
  }
    
  class Bmw {
    constructor(model, price, maxSpeed) {
      this.model = model;
      this.price = price;
      this.maxSpeed = maxSpeed;
  }

  export default BmwFactory;
    `;

const singleton = `
  class Person {
    constructor() {
      if (typeof Person.instance === 'object') {
        return Person.instance;
      }
      Person.instance = this;
      return this;
    }
  }

  export default Person;
`;

const data = {
  factory,
  singleton,
};

export default data;
