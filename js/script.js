'use strict';

var money = +prompt("Ваш бюджет на месяц ?", 100);
var time = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-05");

var appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData.expenses);  

//alert("ok?");