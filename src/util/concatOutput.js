function concatAndOutput(...args) {
  return args
    .map((item) => String(item))
    .join("\n\n")
    .toString();
}

export default concatAndOutput;
