"use strict";

var appData = {
    budget: 0,
    timeData: "",
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц ?", 500);
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-05");
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц ?", 500);
    }
    appData.budget = money;
    appData.timeData = time;
}
start();

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let q = prompt("Введите обязательную статью расходов в этом месяце ?"),
            a = +prompt("Во сколько обойдется ?", 50);
        if (
            typeof q === "string" &&
            typeof q != null &&
            typeof a != null &&
            q != "" &&
            a != "" &&
            q.length < 10
        ) {
            console.log("Out - " + q + " - " + a);
            appData.expenses[q] = a;
        } else {
            continue;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
appData.moneyPerDay = (appData.budget / 30).toFixed();
alert("Ваш ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень");
} else {
    console.log("Высокий уровень");
}
}
detectLevel();
//console.log(appData);

function checkSaving() {
    if (appData.savings !== false) {
    let save = +prompt('Какова сумма за месяц ?'),
    percent = +prompt('Под какой процент ?');

    appData.monthIncome = (save/100/12*percent).toFixed();
    alert('Доход в месяц: ' + appData.monthIncome );
    }
}
checkSaving();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let q = prompt("Введите необязательную статью расходов в этом месяце ?"),
            a = +prompt("Во сколько обойдется ?", 50);
        if (
            typeof q === "string" &&
            typeof q != null &&
            typeof a != null &&
            q != "" &&
            a != "" &&
            q.length < 10
        ) {
            console.log("OptExpenses - " + q + " - " + a);
            appData.optionalExpenses[i+1] = a;
        } else {
            continue;
        }
    }
}
chooseOptExpenses();
