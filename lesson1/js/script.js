
let magBudget = prompt("Ваш бюджет:", "1000");
let magName = prompt("Название вашего магазина:", "Название");

	var shopGood1 = prompt("Товар 1","Товар");
	var shopGood2 = prompt("Товар 2","Товар");
	var shopGood3 = prompt("Товар 3","Товар");


let mainList = {
	budget:magBudget,
	name:magName,
	shopGoods:[shopGood1, shopGood2, shopGood3],
	emloyers:{
		name1:"Вася",
		name2:"Коля"
	},
	open:true
}

alert("Бюджет на один день:"+ Math.floor(magBudget/30) +"$");


//ускладнене завдання

// let num = 33721;
// console.log(num);
// num.split('');
// console.log(num);