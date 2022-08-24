// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, name]
    return newCats;
}

function prependCat(name) {
    const newCats = [name, ...cats]
    return newCats;
}

function removeLastCat(name) {
    let newCats = cats.slice();
    newCats.pop();
    return newCats;
}


function removeFirstCat(name) {
    let newCats = cats.slice();
    newCats.shift();
    return newCats;
}
