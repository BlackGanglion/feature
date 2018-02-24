console.log(`async start: ${new Date().getTime()}`);

for (let i = 0; i < 1000000000; i++) { }

console.log(`async end: ${new Date().getTime()}`);