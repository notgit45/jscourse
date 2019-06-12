'use strict';

var appData = {
    money: 0,
    timeData: "" ,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.money = +prompt("Ваш бюджет на месяц ?", 100);
appData.timeData = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-05");

var q1 = prompt("Введите обязательную статью расходов в этом месяце ?", "HOUSE");
var a1 = +prompt("Во сколько обойдется ?", 20);
appData.expenses[q1] = a1;
var q2 = prompt("Введите обязательную статью расходов в этом месяце ?", "CAR");
var a2 = +prompt("Во сколько обойдется ?", 40);
appData.expenses[q2] = a2;

alert("Бюджет на 1 день :" + ((appData.expenses[q1] + appData.expenses[q2]) / 30));

//1) Сколько типов данных существует в JS? 7 типов
//2) Как вывести информацию в консоль? console.log();
//3) Какая функция операторов || и &&? логический оператор "или" и "и"