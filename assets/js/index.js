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

// //===============================================================================
// console.log("// 2");
// const isOnline = true;
// const notificationsAboutOnline = !isOnline
//   ? "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"
//   : "Ви підключені до мережі Інтернет";

// alert(notificationsAboutOnline);

// //===============================================================================
// console.log("// 3");
// let inputSomeNumber = null;
// let discount = null;

// do {
//   inputSomeNumber = +prompt("Enter the purchase amount: ", "1000");
// } while (!Number.isFinite(inputSomeNumber));

// if (inputSomeNumber >= 0 && inputSomeNumber < 500) {
//   discount = 0;
// } else if (inputSomeNumber >= 500 && inputSomeNumber < 800) {
//   discount = 0.03;
// } else if (inputSomeNumber >= 800) {
//   discount = 0.05;
// }

// // false, null, undefined, '', NaN, 0/-0 - falsy - значення
// if (inputSomeNumber > 0) {
//   console.log(
//     `Ваша сума товарів складає ${inputSomeNumber}, враховуючи знижку, яка складає ${
//       discount * 100
//     }% ваша сума буде дорівнювати ${
//       inputSomeNumber - inputSomeNumber * discount
//     }`
//   );
// } else if (inputSomeNumber === 0) {
//   // нічого не купили
//   console.log("Може бажаєте щось купити?");
// } else {
//   // наприклад, розбили певний товар в магазині
//   console.log("Сплатіть штраф !!!");
// }

// //===============================================================================
console.log("// 4");
const isLogin = confirm("Ви увійшли в акаунт?");
// console.log(isLogin);

let isSpecifyTheGender = null;
let = isMale = null;
let = isFemale = null;

if (isLogin) {
  isSpecifyTheGender = confirm("Бажаєте вказати стать?");

  if (isSpecifyTheGender) {
    isMale = confirm("Ви чоловік?");
  }

  if (!isMale && isSpecifyTheGender) {
    isFemale = confirm("Тобто ви жінка?");
  }
}

document.write(` 
<header class="top-navigation">
    <a href="#"><img src="./assets/images/logo.png" alt="Company logo"></a>`);
if (isLogin) {
  let classForIsMale = null;
  let linkImg = null;
  let nameSurnameUser = null;

  if (isMale) {
    classForIsMale = "classIsMale";
    linkImg = "./assets/images/Francisco.png";
    nameSurnameUser = "Francisco Bell";
  } else if (isFemale) {
    classForIsMale = "classIsFemale";
    linkImg = "./assets/images/Beth.png";
    nameSurnameUser = "Beth Fox";
  } else {
    classForIsMale = "ClassIsAnonymus";
    linkImg = "./assets/images/anonymus.jpeg";
    nameSurnameUser = "Anonymus";
  }

  document.write(
    `<p>${nameSurnameUser}</p>
    <img class="same-properties ${classForIsMale}" src="${linkImg}" alt="User photo">`
  );
} else {
  document.write(`
    <button class="same-values">Login</button>
    <button class="same-values">Register</button>`);
}
document.write(`
</header>`);

// //===============================================================================
// console.log("Завдання на switch..case");
// console.log("// 1");

// let inputNumberDayWeek = null;
// let dayWeek = null;

// do {
//   inputNumberDayWeek = +prompt("Введіть номер дня тижня: ", "7");
// } while (!Number.isFinite(inputNumberDayWeek));

// console.log(inputNumberDayWeek);

// switch (inputNumberDayWeek) {
//   case +"1":
//     dayWeek = "Понеділок";
//     break;
//   case +"2":
//     dayWeek = "Вівторок";
//     break;
//   case +"3":
//     dayWeek = "Середа";
//     break;
//   case +"4":
//     dayWeek = "Четвер";
//     break;
//   case +"5":
//     dayWeek = "П'ятниця";
//     break;
//   case +"6":
//     dayWeek = "Субота";
//     break;
//   case +"7":
//     dayWeek = "Неділя";
//     break;
//   default:
//     console.log("Дня з таким номером не існує!");
//     break;
// }
// if (inputNumberDayWeek <= 7 && inputNumberDayWeek >= 1) {
//   console.log(`Номер дня тижня ${inputNumberDayWeek} - ${dayWeek}`);
// }

// //===============================================================================
// console.log("// 2");
// let inputNumberDayMonth = null;
// let decade = null;

// do {
//   inputNumberDayMonth = +prompt("Введіть номер дня місяця: ", "24");
// } while (!Number.isFinite(inputNumberDayMonth));

// switch (inputNumberDayMonth) {
//   case +"1":
//   case +"2":
//   case +"3":
//   case +"4":
//   case +"5":
//   case +"6":
//   case +"7":
//   case +"8":
//   case +"9":
//   case +"10":
//     decade = "Першої ";
//     break;
//   case +"11":
//   case +"12":
//   case +"13":
//   case +"14":
//   case +"15":
//   case +"16":
//   case +"17":
//   case +"18":
//   case +"19":
//   case +"20":
//     decade = "Другої";
//     break;
//   case +"21":
//   case +"22":
//   case +"23":
//   case +"24":
//   case +"25":
//   case +"26":
//   case +"27":
//   case +"28":
//   case +"29":
//   case +"30":
//   case +"31":
//     decade = "Третьої";
//     break;
//   default:
//     console.log("Немає такого числа в місяці!");
// }

// if (inputNumberDayMonth <= 31 && inputNumberDayMonth >= 1) {
//   console.log(
//     `Число ${inputNumberDayMonth} відноситься до - ${decade} декади місяця`
//   );
// }
