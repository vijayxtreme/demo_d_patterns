import { concatAndOutput } from "../util";

const get = `const get = (url, callback) => {
  if (window.fetch) {
    return fetch(url).then(response => response.json()).then(callback);
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
    }).then(callback);
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

const example = `const handler = (response)=>console.log(response); 
get('https://jsonplaceholder.typicode.com/todos/1', handler)`;

const comment = `/* A pattern to provide a simpler interface
to a more complex API, set of methods or object. (e.g. jQuery 
provides facade methods to help work with DOM cross-browser. 
Check out blue-label's src/api/RestClient.js for some more 
ideas on facades. */`;
const output = concatAndOutput(comment, get, example);
export default output;
