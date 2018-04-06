const array = [{ a: 1, b: 2 }, { a: 0, b: 1 }];

const arrayProxy = new Proxy(array, {
  get: function (target, key) {
    return target[key];
  },
  set: function (target, key, value) {
    target[key] = value;
    return true;
  }
});

// key = "0"
console.log(arrayProxy[0]);
arrayProxy[0] = { c: 1 };
console.log(arrayProxy[0]);
console.log(arrayProxy[1].b);
