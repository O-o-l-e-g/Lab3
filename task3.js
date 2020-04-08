const object1 = {
    name: 'Boris',
    weight: 15
};

const object2 = {
    name: 'Boris',
    weight: 15
};

const object3 = {
    name: 'Rex',
    weight: 20,
};

// Реализуйте функцию isEquivalent

function isEquivalent(object1, object2) {
    let array1 = [];
    let array2 = [];

    for (let counter in object1) {
        array1.push(object1[counter]);
    }

    for (let counter in object2) {
        array2.push(object2[counter]);
    }

    if (array1.length !== array2.length) return false;

    for (let counter = 0; counter < array1.length; counter++) {
        if(array1[counter] !== array2[counter]) return false
    }

    return true
}

// изменить, добавить цикл

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false