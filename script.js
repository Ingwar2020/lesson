let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let i = 0; i < 2; i += 1) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	
	if (typeof(a) === 'string' 
		&& typeof(a) != null 
		&& typeof(b) != null
		&& a != ''
		&& b != ''
		&& a.length < 50) {
			console.log('объект записан');
			appData.expenses[a] = b;
		} else {
			console.log('Ошибка забиси объекта');
			i =- 1;
		}
		
};

appData.moneyPerDay = appData.budget / 30;
alert('Ваш бюджет на 1 день составляет: ' + appData.moneyPerDay + 'руб.');

if (appData.moneyPerDay < 100) {
	console.log('Это минимальный уровень достатка!');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Это средний уровень достатка!');
} else if (appData.moneyPerDay > 2000) {
	console.log('Это высокий уровень достатка!');
} else {
	console.log('wtf');
};