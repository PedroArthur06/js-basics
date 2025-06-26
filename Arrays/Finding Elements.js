const number = [1, 2, 3, 4];

console.log(number.indexOf(2)); 

const coursers = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Python' },
  { id: 3, name: 'Java' }
]

const couser = coursers.find(function(course){
  return course.name === 'Java';
});