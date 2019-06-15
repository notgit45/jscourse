'use strict';

var appData = {
    budget: 0,
    timeData: "",
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.budget = +prompt("Ваш бюджет на месяц ?", 100);
appData.timeData = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-05");

for (i = 0; i < 3; i++) {
    let q = prompt("Введите обязательную статью расходов в этом месяце ?", "HOUSE");,
    a = +prompt("Во сколько обойдется ?", 20);
    if ((typeof (q) === 'string') && (typeof (q) != null) && (typeof (a) != null) && q != "" && a != "" && q.length < 10) {
        console.log('Out - ',q,a);
        appData.expenses[q] = a;
    } else {
        continue;
    }
};

appData.moneyPerDay = appData.budget / 30;
alert("Ваш ежедневный бюджет: " + appData.moneyPerDay);

alert("Бюджет на 1 день :" + ((appData.expenses[q1] + appData.expenses[q2]) / 30));