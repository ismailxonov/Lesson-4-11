// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring

// let a = 10;
// let b = 20;
// console.log(a + b);

// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring

// let a = '12';
// a = parseInt(a);
// console.log(a);

// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering

// let randomSon = Math.floor(Math.random() * 100);
// if (randomSon % 2 === 0) {
//     console.log(randomSon + " juft son");
// } else {
//     console.log(randomSon + " toq son");
// }

// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin

// let soz = prompt("Iltimos, bir so'z kiriting:");
// if (soz.toLowerCase() === "mars") {
//     console.log(soz);
// } else {
//     console.log("Mars It school");
// }

// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring

// let array1 = ["olma", "banan", "apelsin", "uzum", "kiwi"];
// let array2 = [];

// for (let i = 0; i < array1.length; i++) {
//     if (array1[i].length >= 5) {
//         array2.push(array1[i]);
//     }
// }

console.log(array2);

// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " juft son");
//     } else {
//         console.log(i + " toq son");
//     }
// }