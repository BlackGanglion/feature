/**
 * setTimeot 与 Promise （构造 + then）的执行顺序
 * 下一个 run 会先于 setTimeout 执行，晚于 then 的 console
 */

setTimeout(() => {
  console.log('setTimeout');
}, 0);

const promise = new Promise((resolve, reject) => {
  console.log('Promise constructor');
  resolve(1);
}).then(data => {
  console.log(data);
});

Promise.resolve(function () {
  console.log('Promise.resolve');
  return 2;
}()).then(data => {
  console.log(2);
});

console.log('Promise end');