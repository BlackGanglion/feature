console.log(`defer start: ${new Date().getTime()}`);

for (let i = 0; i < 1000000000; i++) { }

console.log(`defer end: ${new Date().getTime()}`);