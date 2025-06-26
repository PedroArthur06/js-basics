notes = {
    B1: 7.0,
    B2: 5.0,
    B3: 8.0,
    B4: 6.0,
  };
average = 6.0;

function calculateGrade(){
  for (key in notes) {
    if (notes[key] >= average) {
      console.log(key, 'approved');
    } else {
      console.log(key, 'failed');
    }
  }
  
}

console.log(calculateGrade(notes));