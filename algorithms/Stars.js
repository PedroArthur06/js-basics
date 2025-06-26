function showStar(rows){
  for (let i = 0; i <= rows; i++) {
    let star = "*";
    for (let j = 0; j < i; j++) {
      star += '*';
    }
    console.log(star);

  }
}

showStar(5);