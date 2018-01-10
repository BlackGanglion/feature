/**
 * window.addEventListener unhandledrejection 可以捕获 构造函数、then、catch 中的异常
 * 但构造函数中抛出的异常（无法捕获是因为已经被内部Catch捕获了），一旦有 reject 或 catch，就无法被 unhandledrejection 捕获
 */

window.onerror = function (message, source, lineno, colno, error) {
  console.log(message, source, lineno, colno, error);
};

const handler = event => {
  console.log(event);
};

window.addEventListener('unhandledrejection', handler);

window.addEventListener('unhandledrejection', handler);

// window.removeEventListener('unhandledrejection', handler);

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