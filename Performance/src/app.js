console.log(`app.js start: ${new Date().getTime()}`);

window.onload = () => {
  console.log(`window.onload: ${new Date().getTime()}`);

  setTimeout(() => {
    console.log(`navigationStart: ${window.performance.timing.navigationStart}`);
    console.log(`domLoading: ${window.performance.timing.domLoading}`);
    console.log(`domInteractive: ${window.performance.timing.domInteractive}`);
    console.log(`domComplete: ${window.performance.timing.domComplete}`);
    console.log(`loadEventEnd: ${window.performance.timing.loadEventEnd}`);
  }, 1000);
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

for (let i = 0; i < 1000000000; i++) { }

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('main'))

const script = document.createElement('script');  
script.setAttribute("type","text/javascript");  
script.src = './public/add.js';  
document.body.appendChild(script);

setTimeout(() => {
  const script = document.createElement('script');  
  script.setAttribute("type","text/javascript");  
  script.src = './public/add.js';  
  document.body.appendChild(script);
}, 2000);

console.log(`app.js end: ${new Date().getTime()}`);
