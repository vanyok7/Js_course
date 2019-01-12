let mas = [];
function addMass(){
  let quest = Number( prompt("Скільки додати масивів","") );
  
  for (let i = 0; i < quest; i++) {
    mas.push([])
  }
  
  let randN = parseInt(Math.random()*(9-4)+4);

  for(let i = 0; i < mas.length; i++){
    mas[i].length = randN;
    for(let j = 0; j < mas[i].length; j++) {
      let randNum = parseInt( Math.random()*(6 - 1) + 1 );
      mas[i][j] = randNum;
    }
  }
}
addMass();
console.log(mas);

function massSum() {
  for(let i = 0; i < mas.length; i++) {
    let num = 0;
    for(let j = 0; j < mas[i].length; j++) {
      num = num + mas[i][j];
    }
    console.log("Сума " + i + " рядка = " + num);
  }
}

massSum();