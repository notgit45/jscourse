"use strict";

var appData = {
  budget: 0,
  timeData: "",
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

appData.budget = +prompt("Ваш бюджет на месяц ?", 500);
appData.timeData = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-05");

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

appData.moneyPerDay = appData.budget / 30;
alert("Ваш ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень");
} else {
  console.log("Высокий уровень");
}

//while (i < 2) { i++; }
//do { i++} while (i < 2);
console.log(appData);