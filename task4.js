function User(name) {
    this.name = name;
}

// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат
User.prototype =
 {
    getName:  function() { return me.name;}
}

const me = new User('Rex');

console.log(me.getName()); // Rex