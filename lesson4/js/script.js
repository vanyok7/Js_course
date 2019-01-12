let magBudget, magName, time, price

let mainList = {
	budget: magBudget,
	name: magName,
	shopGoods: [],
	emloyers: {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
								for (let i = 1; i < 6; i++) {
									let a = prompt("Товар"+i,"Товар", "");
									if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
										console.log("Товар " + a + " додано!");
										mainList.shopGoods[i] = a;
										} else {
											i--;
										}
								}
							},
	workTime: function workTime(time) {
						if (time < 0) {
							console.log('Такого не може бути!');
						} else if (time > 8 && time < 20) {
								console.log('Час працювати!');
								mainList.open = true;
							} else if (time < 24) {
									console.log('Вже пізно!');
								} else {
									console.log('В дні 24 години');
								}
					},
	budget: function budget() {
					alert("Бюджет на один день:"+ Math.floor(magBudget/30) +"$");
					console.log("Бюджет на один день:"+ Math.floor(magBudget/30) +"$");
				},
	discountSys: function discountSys(price, procent) {
								console.log("Ціна без знижки " + price);
								if(mainList.discount == true) {
									price = price*procent/100;
									console.log("ціна зі знижкою (80%) "+price)
								}
							},
	hireEmployers: function hireEmployers() {
									for(let i = 1; i < 5; i++) {
										let nameEmp = prompt("Введіть ім'я працівника "+ i);
										if ((typeof(nameEmp)) === 'string'&& (typeof(nameEmp)) != null && nameEmp != '' && nameEmp.length < 50 ) {
											mainList.emloyers[i] = i+"-"+nameEmp;
											console.log("Працівника " + nameEmp + " прийнято!");
										} else {
											i--;
											console.log("Введіть правильно ім'я")
										}
									}
								},
	chooseShopItems: function chooseShopItems() {
										let items = prompt("Перерахуйте через кому товари", "");
											while ((isNaN(items)) == false || items == "" || items == null){
												items = prompt("Перерахуйте через кому товари ще раз", "");;
											}
										mainList.shopItems.push(prompt("Можливо щось забули?", ""));
										mainList.shopItems = items.split(",");
										mainList.shopItems.sort();
										}


}

function start() {
	magBudget = prompt("Ваш бюджет:", "");

	while (isNaN(magBudget) || magBudget == "" || magBudget == null) {
		mainList.budget = prompt("Ваш бюджет ще раз ", "");
	}
	magName = prompt("Назва вашого магазину:", "").toUpperCase();
	while (magName == "" || magName == null) {
		mainList.name = prompt("Назва вашого магазину:", "").toUpperCase();
	}
	// mainList.budget = magBudget;
	// mainList.name = magName;

	console.log(magName)
	console.log(magBudget)
}