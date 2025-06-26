const person = {
  name: "Mari",
  age: 17,
  isStudent: true,
}

function showProperties(obj) {
  for (let key in person) {
    console.log(key, '=', person[key]);
  }

}

showProperties(person);