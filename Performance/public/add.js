console.log(`async add start: ${new Date().getTime()}`);

for (let i = 0; i < 1000000000; i++) { }

console.log(`async add end: ${new Date().getTime()}`);