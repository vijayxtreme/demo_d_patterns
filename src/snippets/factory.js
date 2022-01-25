import { concatAndOutput } from "../util";

const BODiTealium = `class BODiTealium {
  constructor() {
    this.bodiData = this.setup();
  }
  setup() {
    console.log("making tealium data for BODi");
    return {
      section: "bodi",
    };
  }
}`;

const GroupsTealium = `class GroupsTealium {
  constructor() {
    this.groupsData = this.setup();
  }
  setup() {
    console.log("making tealium data for Groups");
    return {
      section: "groups",
    };
  }
}`;
const TealiumFactory = `class TealiumFactory {
  static factory = (type) => { 
    let data = {}
    switch (type) {
      case "bodi": {
        data = new BODiTealium();
        break;
      }
      case "groups": {
        data = new GroupsTealium();
        break;
      }
      default: {
        throw new Error("factory not implemented");
      }
    }
    return {
      ...TealiumFactory.setup(),
      ...data
    }
  };
  static setup() {
    console.log("making initial data for app");
    return {
      userGUID: '1234',
      timestamp: new Date()
    }
  }
}`;

const example = `TealiumFactory.factory('bodi');`;

const comments = `/* Abstract parts of building a component are 
housed in a singular class, then later "per request" 
can produce custom and desired components. Downside - classes
add overhead and you can build this much easier with functions */`;

const output = concatAndOutput(
  comments,
  BODiTealium,
  GroupsTealium,
  TealiumFactory,
  example
);

export default output;
