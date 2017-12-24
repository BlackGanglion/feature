/**
 * window error 可以捕获 setTimeout 中的错误
 * window error 无法捕获 new Promise 中错误
 * window error 无法捕获 Promise then 中的错误
 * window error 无法捕获 Promise catch 中的错误
 */

window.onerror = function (message, source, lineno, colno, error) {
  console.log(message, source, lineno, colno, error);
};

setTimeout(() => {
  console.log('setTimeout');
  throw new Error('setTimeout');
}, 0);

const promise1 = new Promise((resolve, reject) => {
  console.log('Promise 1 constructor');
  throw new Error('Promise 1 constructor');
  resolve(1);
}).catch((err) => {
  console.log(err);
  throw new Error('Promise 1 catch');
});

const promise2 = new Promise((resolve, reject) => {
  console.log('Promise 2 constructor');
  resolve(1);
}).then(data => {
  throw new Error('Promise 2 then');
  console.log(data);
});

console.log('Promise end');