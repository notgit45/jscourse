"use strict";

var appData = {
    budget: 0,
    timeData: "",
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень");
        } else {
            console.log("Высокий уровень");
        }
    },
    checkSaving: function () {
        if (appData.savings !== false) {
            let save = +prompt('Какова сумма за месяц ?'),
                percent = +prompt('Под какой процент ?');

            appData.monthIncome = (save / 100 / 12 * percent).toFixed();
            alert('Доход в месяц: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
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
                appData.optionalExpenses[i + 1] = a;
            } else {
                continue;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет доп доход ? через запятую:', 'arenda, chai');
        while (items === '' || items == null) {
            items = prompt('Что принесет доп доход ? через запятую:', '');
        };
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще ?', 'ese'));
        appData.income.sort();
        console.log("Способы доп заработка: ");
        appData.income.forEach(function (elem) {
            console.log(elem);
        });
    },
    listApp: function () {
        for (let elem of appData) {
            console.log(elem);
        }
    }
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

//console.log(appData);


