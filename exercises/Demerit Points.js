// speed limit = 70
// 5km + limit speed -> 1 point
// 12 points -> suspended license

Math.floor(1.3); 
function checkSpeed(speed){
  const speedLimit = 70;
  const kmPerPoint = 5;
  const maxPoints = 12;

  if (typeof speed !== 'number' || speed < 0) {
    return 'Invalid speed input';
  }

  const excessSpeed = speed - speedLimit;

  if (excessSpeed <= 0) {
    return 'Ok';
  }

  let points = Math.floor(excessSpeed / kmPerPoint);

  if (points >= maxPoints) {
    return 'License suspended';
  } else {
    return `Points: ${points}`;
  }
}

console.log(checkSpeed(175)); 