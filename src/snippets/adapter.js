import { concatAndOutput } from "../util";

class TealiumNew {
  //the new api
  pageView() {
    console.log(`---page view the new way`);
  }

  pageClick() {
    console.log(`---page click the new way`);
  }
}

class TealiumLegacy {
  //we still need to support the old way sometimes
  view() {
    console.log(`---page view the old way, but this method is deprecated`);
  }
  event() {
    console.log(`---page click the old way, but this method is deprecated`);
  }
}

class TealiumAdapter {
  constructor(tealiumOld) {
    this.tealiumOld = tealiumOld;
  }

  pageView() {
    //our client will continue to call the new method per our interface
    //but this adapter will help translate new to old for the time being
    this.tealiumOld.view();
  }

  pageClick() {
    //our client will continue to call the new method per our interface
    //but this adapter will help translate new to old for the time being
    return this.tealiumOld.event();
  }
}
const comments = `/* When an application may need to talk to 
another application (or different codebase), but an API is 
incompatible.  The adapter translates "requests" between one 
application to another. */`;

const output = concatAndOutput(
  comments,
  TealiumNew,
  TealiumLegacy,
  TealiumAdapter
);

export default output;
