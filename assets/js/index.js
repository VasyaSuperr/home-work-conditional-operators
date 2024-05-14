// console.log("Завдання на if");
// console.log("// 1");

// // "1995-12-25T23:15:30"
// const fullInformationAboutDay = new Date();
// const localHour = fullInformationAboutDay.getHours();
// console.log(`Зараз ${localHour} година`);
// let classForTheme = null;
// let nameTheme = null;

// if (localHour >= 6 && localHour <= 21) {
//   classForTheme = "light-theme";
//   nameTheme = "Світла";
// } else {
//   classForTheme = "dark-theme";
//   nameTheme = "Темна";
// }

// document.write(
//   `<p class="${classForTheme}">${nameTheme} тема, зараз ${localHour} година</p>`
// );

//===============================================================================
// console.log("// 2");
// const isOnline = true;
// const notificationsAboutOnline = !isOnline
//   ? "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"
//   : "Ви підключені до мережі Інтернет";

// alert(notificationsAboutOnline);

//===============================================================================
console.log("// 3");
let inputSomeNumber = null;
let discount = null;

do {
  inputSomeNumber = +prompt("Enter the purchase amount: ", "1000");
} while (!Number.isFinite(inputSomeNumber));

if (inputSomeNumber >= 0 && inputSomeNumber < 500) {
  discount = 0;
} else if (inputSomeNumber >= 500 && inputSomeNumber < 800) {
  discount = 0.03;
} else if (inputSomeNumber >= 800) {
  discount = 0.05;
}

// false, null, undefined, '', NaN, 0/-0 - falsy - значення
if (inputSomeNumber > 0) {
  console.log(
    `Ваша сума товарів складає ${inputSomeNumber}, враховуючи знижку, яка складає ${
      discount * 100
    }% ваша сума буде дорівнювати ${
      inputSomeNumber - inputSomeNumber * discount
    }`
  );
} else if (inputSomeNumber === 0) {
  // нічого не купили
  console.log("Може бажаєте щось купити?");
} else {
  // наприклад, розбили певний товар в магазині
  console.log("Сплатіть штраф !!!");
}
