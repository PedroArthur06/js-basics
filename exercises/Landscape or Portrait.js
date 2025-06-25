let width = 800;
let height = 600;
function isLandscape(width, height) {
  if (width > height) {
    return true; 
  } else {
    return false; 
  }
}

console.log(isLandscape(width, height)); 