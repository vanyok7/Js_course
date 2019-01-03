// завдання 1
let week = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];
var main = document.querySelector("#main");
let today = prompt("Який сьогодні день (Від 1 до 7)");
for(let i = 0; i < week.length; i++){
  let x = document.createElement("span");
  x.innerHTML = week[i] + "<br><br>";
  if(i == today-1){
    x.style.color = "red";
  }
  if(i == 5 || i == 6){
    x.style.fontFamily = "monospace";
    x.style.fontSize = "20px";
    x.innerHTML = week[i]+"<br><br>";
  }
  main.appendChild(x);
}


// завдання 2
let arr = ["231755","324568","773321","55903","334621","123311","758912"];

for(let i = 0; i < arr.length; i++) {
  var frst = arr[i];
  if(frst[0] == 3 || frst[0] == 7) {
    let num = document.createElement("span");
    num.style.color = "blue";
    //frst.style.background = "red";
    num.innerHTML = arr[i]+"<br>";
    main.appendChild(num);
  }
}