let i = 0;
const count = function () {++i; return i;};

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5