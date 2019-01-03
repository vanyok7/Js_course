
let magBudget = prompt("Ваш бюджет:", "1000");
let magName = prompt("Название вашего магазина:", "Название");

let mainList = {
	budget:magBudget,
	name:magName,
	shopGoods:[],
	emloyers:{
		name1:"Вася",
		name2:"Коля"
	},
	open:true
}

	for (let i = 0; i < 6; i++) {
		let a = prompt("Товар"+i,"Товар");
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
			}
	}
let c = 1;
// while (c < 6) {
// 	let a = prompt("Товар"+c);
// 		 if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
// 			 console.log("Все верно!");
// 			 mainList.shopGoods[c] = a;
// 			}
// 	c++;
// }

// do{
// 	let a = prompt("Товар"+c,"Товар");
// 		 if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
// 			 console.log("Все верно!");
// 			 mainList.shopGoods[c] = a;
// 			}
// 	c++;
// }
// while(c < 6);

console.log(mainList);
alert("Бюджет на один день:"+ Math.floor(magBudget/30) +"$");