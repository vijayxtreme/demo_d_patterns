import { concatAndOutput } from "../util";

const get = `const get = (url, callback) => {
  if (window.fetch) {
    return fetch(url);
  } else if (window.Promise && window.XMLHttpRequest) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            reject({
              status: xhr.status,
              statusText: xhr.statusText,
            });
          }
        }
      };
      xhr.send();
    });
  } else if (window.XMLHttpRequest) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          callback(xhr.response);
        } else {
          throw new Error({ status: xhr.status, statusText: xhr.statusText });
        }
      }
    };
    xhr.send();
  }
};`;

const comment = `/* A pattern to provide a simpler interface
to a more complex API, set of methods or object. (e.g. jQuery 
provides facade methods to help work with DOM cross-browser. */`;
const output = concatAndOutput(comment, get);
export default output;
