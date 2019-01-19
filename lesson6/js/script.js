let open_btn = document.getElementById('open-btn'),
    nameValue = document.getElementsByClassName('name-value')[0],
    budgetValue = document.getElementsByClassName('budget-value')[0],
    goodsValue = document.getElementsByClassName('goods-value')[0],
    itemsValue = document.getElementsByClassName('items-value')[0],
    employersValue = document.getElementsByClassName('employers-value')[0],
    discountValue = document.getElementsByClassName('discount-value')[0],
    isOpenValue = document.getElementsByClassName('isopen-value')[0],

    goodsItem = document.getElementsByClassName('goods-item'),

    goods_btn = document.getElementsByTagName('button')[1],
    budget_btn = document.getElementsByTagName('button')[2],
    employers_btn = document.getElementsByTagName('button')[3],

    chooseItem = document.querySelector('.choose-item'),
    timeValue= document.querySelector('.time-value'),
    countBudgetValue= document.querySelector('.count-budget-value'),

    hireEmployersInput = document.querySelectorAll('.hire-employers-item');

let magBudget,
    price,
    discountSys;

open_btn.addEventListener('click', () => {
  magBudget = prompt("Ваш бюджет:", "");

	while (isNaN(magBudget) || magBudget == "" || magBudget == null) {
    magBudget = prompt("Ваш бюджет ще раз ", "");
	}

  budgetValue.textContent = magBudget;
  nameValue.textContent = prompt("Назва вашого магазину:", "").toUpperCase();

  discountSys = confirm("Хочете знижку ?");

  if(discountSys == true) {
    discountValue.style.backgroundColor = '#00ff0a';
  }
});

goods_btn.addEventListener('click', () => {
  for (let i = 0; i < goodsItem.length; i++) {
    let a = goodsItem[i].value;

    if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50 ) {
      mainList.shopGoods[i] = a;
      goodsValue.textContent = mainList.shopGoods;
      } else {
        i--;
      }
  }
});

chooseItem.addEventListener('change', () => {
  let items = chooseItem.value;
    if (isNaN(items) && items != ''){
      mainList.shopItems = items.split(', ');
      mainList.shopItems.sort();

      itemsValue.textContent = mainList.shopItems;
    }
});

timeValue.addEventListener('change', () => {
  let time = timeValue.value;
  if (time < 0) {
    mainList.open = false;
  } else if (time > 8 && time < 20) {
      mainList.open = true;
    } else if (time < 24) {
        mainList.open = false;
      } else {
        mainList.open = false;
      }
  if(mainList.open == true) {
    isOpenValue.style.backgroundColor = '#00ff0a';
  }
    else {
    isOpenValue.style.backgroundColor = '#ff0000';
    }
});

budget_btn.addEventListener('click', () => {
  countBudgetValue.value = Math.floor(magBudget/30) +"$";
});

employers_btn.addEventListener('click', () => {
  for(let i = 0; i < hireEmployersInput.length; i++) {
    let nameEmp = hireEmployersInput[i].value;

    mainList.emloyers[i] = nameEmp;
    employersValue.textContent += mainList.emloyers[i] + ', ';
  }
});



const mainList = {
	budget: magBudget,
	name:'string' ,
	shopGoods: [],
	emloyers: {},
	open: false,
	discount: true,
	shopItems: [],

	discountSys: function discountSys(price, procent) {
								console.log("Ціна без знижки " + price);
								if(mainList.discount == true) {
									price = price*procent/100;
									console.log("ціна зі знижкою (80%) "+price)
								}
							}
}

