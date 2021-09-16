import concatAndOutput from "./concatOutput";

const capitalize = (text) =>
  text.substring(0, 1).toUpperCase() + text.substring(1);

export { concatAndOutput, capitalize };
