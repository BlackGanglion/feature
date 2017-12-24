/**
 * window.addEventListener unhandledrejection 可以捕获 构造函数、then、catch 中的异常
 * 但构造函数中抛出的异常，一旦有 reject 或 catch，就无法被 unhandledrejection 捕获
 */

window.onerror = function (message, source, lineno, colno, error) {
  console.log(message, source, lineno, colno, error);
};

window.addEventListener('unhandledrejection', event => {
  console.log(event.reason);
});

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

const promise3 = new Promise((resolve, reject) => {
  console.log('Promise 3 constructor');
  throw new Error('Promise 3 constructor');
});

console.log('Promise end');