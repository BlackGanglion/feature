window.addEventListener('error', (event) => {
  console.log('我知道 404 错误了');
  console.log(event.target);
}, true);

const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://www.xxxx.com/xxx.js';
document.head.appendChild(script);

setTimeout(() => {
  throw new Error('test');
}, 1000);