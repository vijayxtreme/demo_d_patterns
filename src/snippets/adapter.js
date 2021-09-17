import { concatAndOutput } from "../util";

class TealiumNew {
  //the new api
  pageView(data) {
    console.log(`---page view the new way`, data);
  }
  pageClick(data) {
    console.log(`---page click the new way`, data);
  }
}

class TealiumLegacy {
  //we still need to support the old way sometimes
  view(data) {
    console.log(`---view deprecated way`, data);
  }
  event(data) {
    console.log(`---click deprecated way`, data);
  }
}
const TealiumAdapter = `class TealiumAdapter {
  constructor(tealiumOld) {
    this.tealiumOld = tealiumOld;
  }
  toSnake(data) {
    const workout = { workout: data.workout?.replace(/\\s/g, "-") };
    return { ...data, ...workout };
  }
  pageView(data) {
    console.log('--make it work for legacy');
    const formattedData = this.toSnake(data);
    this.tealiumOld.view(formattedData);
  }
  pageClick(data) {
    console.log('--make it work for legacy');
    const formattedData = this.toSnake(data);
    return this.tealiumOld.event(formattedData);
  }
}`;

const example = `const tealNew = new TealiumNew();
const viewData = {
  page_name: "lo-landing",
  timestamp: new Date(),
  user: "1234",
};
const clickData = {
  page_name: "letsjumpin",
  timestamp: new Date(),
  user: "1234",
  workout: "Let's Jump In",
};

tealNew.pageView(viewData);
tealNew.pageClick(clickData);
const tealLegacy = new TealiumAdapter(new TealiumLegacy());
tealLegacy.pageClick(clickData);`;

const comments = `/* When an application may need to talk to 
another application (or different codebase), but an API is 
incompatible.  The adapter translates "requests" between one 
application to another. */`;

const output = concatAndOutput(
  comments,
  TealiumNew,
  TealiumLegacy,
  TealiumAdapter,
  example
);

export default output;
