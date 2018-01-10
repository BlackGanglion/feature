/**
 * 首先，在一个 script 中抛出错误，当前 js 不会继续执行，但不会影响下一个 script
 * try catch 能使代码执行不中断
 * constructor、then 不能被捕获
 * 在内部已经被捕获，将不会被 catch 与 unhandledrejection 捕获
 */

window.onerror = function (message, source, lineno, colno, error) {
  console.log(message, source, lineno, colno, error);
};

// throw new Error('test');
console.log('is run');

window.addEventListener('unhandledrejection', event => {
  console.log(event.reason);
});

try {
  throw new Error('test');
} catch (err) {
  console.log(err);
}

try {
  const promise1 = new Promise((resolve, reject) => {
    console.log('Promise 1 constructor');
    throw new Error('Promise 1 constructor');
  });
} catch (err) {
  console.log(err);
}

try {
  const promise2 = new Promise((resolve, reject) => {
    console.log('Promise 2 constructor');
    resolve(1);
  }).then(data => {
    console.log(data);
    throw new Error('Promise 2 then Error');
  });
} catch (err) {
  console.log(err);
}

const promise3 = new Promise((resolve, reject) => {
  console.log('Promise 3 constructor');
  try {
    throw new Error('Promise 3 constructor Error');
  } catch (err) {
    console.log(err);
  }
  resolve(1);
}).catch(data => {
  console.log(data);
});

function firstStep(id) {
  console.log(this);
  throw new Error(`Promise ${id} Error`);
}

try {
  const promise4 = Promise.resolve(firstStep(4));
} catch (err) {
  console.log(err);
}

// 能被 windows.error 捕获
const promise5 = Promise.resolve(firstStep(5));
