console.log("Завдання на if");
console.log("// 1");

// "1995-12-25T23:15:30"
const fullInformationAboutDay = new Date();
const localHour = fullInformationAboutDay.getHours();
console.log(`Зараз ${localHour} година`);
let classForTheme = null;
let nameTheme = null;

if (localHour >= 6 && localHour <= 21) {
  classForTheme = "light-theme";
  nameTheme = "Світла";
} else {
  classForTheme = "dark-theme";
  nameTheme = "Темна";
}

document.write(`<p class="${classForTheme}">${nameTheme} тема</p>`);
