//HW-Задание 1
// Напишите функцию, которая принимает в качестве параметра целое число и возвращает: 
// -1 если число отрицательное
// 0 если число 0
// 1 если число положительное

function chekNumber(num) {
    if (num === 0) {
      return 0;
    } else if (num < 0) {
      return -1;
    } else {
      return 1;
    }
  }
  
   document.write(chekNumber(-500));


//HW-Задание 2
// function center(s, w) {
//     if (w <= s.length) {
//       return s;
//     }
  
//     let spaces = Math.floor((w - s.length) / 2);
  
//     let result = "-".repeat(spaces) + s + "-".repeat(spaces);
  
//     return result;
//   }
  
//   document.write(center("hello", 50));

//Object
//a
// let user = {};

// // или

// let user = new Object();

//b
//Объект с ключами и значениями
// let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };

//c
//Доступ к свойствам объекта
// let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   document.write(user.name);
//   document.write(user["age"]);
//   document.write(user.skills.css);

//d
//Добавления ключа и значения
// let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   user.role = "admin";
  
//   document.write(user.role);

//**Удаление ключа**
// let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   delete user.isMarried;
  
//   document.write(user.isMarried);

  //Проверка существования свойства
//   let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   document.write("name" in user);

//Перебор всех ключей с помощью цикла for ... in
// let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   for (let key in user) {
//     document.write(key + "<br>");
//   }

  //Перебор всех ключей и значений
//   let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   for (let key in user) {
//     document.write(key + "<br>");
//   }

  //Перебор вложенных ключей объектов
//   let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   for (let key in user) {
//     if (typeof user[key] === "object") {
//       for (let subKey in user[key]) {
//         document.write(subKey + ": " + user[key][subKey] + "<br>");
//       }
//     } else {
//       document.write(key + ": " + user[key] + "<br>");
//     }
//   }


  //деструктуризация
  //Очень часто в разработке необходимо некоторые свойства объекта сохранить в отдельных переменных. 
  //Обычным способом это выглядить так:
//   let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   let name = user.name;
  
//   document.write(name);


  //но в JS имеется деструктурирующее присваивание
//   let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   let { name, age } = user;
  
//   document.write(name);
//   document.write(age);

  //при деструктуризации имена переменных можно менять
//   let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   let { name: userName, age: userAge } = user;
  
//   document.write(userName);
//   document.write(userAge);


//деструктуризация перебираемых объектов
//Деструктуризация массива
// let fullName = ["Vasya", "Pupkin"];

// let [firstName, secondName] = fullName;

// document.write(firstName);
// document.write(secondName);

// Деструктуризация строки
// let myStr = "hello world";

// let [first, second, third] = myStr;

// document.write(first);
// document.write(second);
// document.write(third);

//Пропуск элементов
// let myStr = "hello world";

// let [first, , , , fifth] = myStr;

// document.write(first);
// document.write(fifth);

//JSON (JavaScript Object Notation) – это формат записи данных, который легко обрабатывается программно и 
//относительно читабельный формат для разработчика.
//JSON записывается как объект:
// {
//     "name": "Vasya",
//     "age": 25,
//     "phone": ["996 11 00 22", "996 00 00 00"],
//     "hasCar": false,
//     "skills": {
//       "html": "high",
//       "css": "excellent",
//       "js": "beginner"
//     }
//   }

  //Превращение JS объекта в JSON
//   let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   let userJson = JSON.stringify(user);
  
//   document.write(userJson);


//Превращение JSON в объект JS
// let user = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     skills: {
//       html: "good",
//       css: "excellent",
//       js: "beginner",
//     },
//   };
  
//   let userJson = JSON.stringify(user);
  
//   let objFromJson = JSON.parse(userJson);
  
//   for (let key in objFromJson) {
//     document.write(`${key} : ${objFromJson[key]}<br>`);
//   }



  //Пример работы с JSON файлами. 
  //Допустим мы разрабатываем сайт и из бекенда мы получили список пользователей в формате  json файла7
  //users.json

//   {
//     "users": [
//       {
//         "name": "John",
//         "age": 20
//       },
//       {
//         "name": "Pete",
//         "age": 24
//       },
//       {
//         "name": "Vasya",
//         "age": 45
//       }
//     ]
//   }

//Нам нужно обработать json файл и вывести имена пользователей в html документе

// const request = new XMLHttpRequest();

// request.onload = function () {
//   const response = JSON.parse(this.responseText);
//   const users = response.users;

// for (let i = 0; i < users.length; i++) {
// document.write(users[i].name + "<br>");
//   }
// };

// request.open("GET", "users.json"); 
// request.send();


// let author = {
//     name: "John",
//     age: 20,
//     isMarried: false,
//     title: {
//       FB post: "Создать массив из 15 объектов с постами для сайта блога с ключами title, и author. Необходимо перебрать массив и вывести название поста в теге h3, и автора в теге p",
//     //   css: "excellent",
//     //   js: "beginner",
//     },
//   };
  
//   let { author: userName, age: userAge } = user;
  
//   document.write(userAuthor);
//   document.write(userTitle);

/*Создать массив из 15 объектов с постами для сайта блога с ключами title, и author. Необходимо перебрать массив и вывести название поста в теге h3, и автора в теге p*/

/*----------------------->_Task #1_<-----------------------*/

const request = new XMLHttpRequest();

request.onload = function () {
  const response = JSON.parse(this.responseText);
  const users = response.theBest;

  for (let i = 0; i < users.length; i++) {
    document.write(`<h3>${users[i].title}</h3>`);
    document.write(`<p>${users[i].author}</p> <hr>`);
  }
};

request.open("GET", "users.json");
request.send();

//i will come back to work on it 3 times at least!!!!

// Задача №1

// const user = [
//     {title: "Жизнь в регионах", autor: "Манас Манап"},
//     {title: "На Иссык-Куле поздравили", autor: "Айбек Кубатов"},
//     {title: "Удельный вес пролонгированных кредитов банков", autor: "Салым Каниметов"},
//     {title: "Проект Женеке", autor: "Турат Матишов"},
//     {title: "Как события в Афганистане", autor: "Адилет Сагынбаев"},
//     {title: "Есть ли бизнес-экосистемы", autor: "Кубат Туратов"},
//     {title: "В Жогорку Кенеше должны пройти чистые люди", autor: "Ринат Кимсанов"},
//     {title: "По Кыргызстану должди", autor: "Тимур Каимов"},
//     {title: "С начала года сданы в эксплуатацию здании", autor: "Ырысбубу Калымбекова"},
//     {title: "Чемпионат мира по грепплингу", autor: "Данияр Доктурович"},
//     {title: "В Узбекистане мужчина", autor: "Жоломан Жоломанов"},
//     {title: "Антонина Шевченко победила соперницу", autor: "Молодец журналист"},
//     {title: "Асель Шерниязова стала первым представителем ЦА", autor: "Кучтуу Журналист"},
//     {title: "Во 2 квартале продолжилось замедление темпов", autor: "Урмат Алмашов"},
//     {title: "За сутки у 3 медиков выявлен COVID-19", autor: "Фархат Данияров"}

// ]

// for (let key in user) {
//     if (typeof user[key] === "object") {
//         for (let subKey in user[key]) {
//             if (subKey === 'title') {
//                 document.write(`<h3>Название статьи: ${user[key][subKey]}</h3>`)
//             } else
//                 document.write(`<p>Автор статьи: ${user[key][subKey]}</p>`);
//           }
//         }
//     }

// Задача №2

// const userName = [
//   "Manas",
//   "Manap",
//   "Kalm",
//   "Jibek",
//   "Alima",
//   "Saikal",
//   "Jyldyz",
//   "Aida",
//   "Kunduz",
// ];

// const user = []; // объявляем массив

// for (let i = 0; i < userName.length; i++) {
//   user[i] = { name: userName[i] };
// }
// console.log(user);

// for (let key in user) {
//   if (typeof user[key] === "object") {
//     for (let subKey in user[key]) {
//       document.write(`<h3>Наши пользователи: ${user[key][subKey]}</h3>`);
//     }
//   }
// }

// Задача №3

// const filmHistory = [
//   { title: "Веном 2", director: "Энди Серкис", duration: 90 },
//   { title: "Игра в кальмара", director: "Хван Дон-хёк", duration: 80 },
//   { title: "Дюна", director: "Дени Вильнёв", duration: 83 },
//   { title: "Не время умирать", director: "Кэри Дзёдзи Фукунага", duration: 110, },
//   { title: "Босс-молокосос 2", director: "Том МакГрат", duration: 88 },
//   { title: "Шан-Чи и легенда десяти колец", director: "Дестин Дэниел Креттон", duration: 115, },
// ];

// const filmSort = filmHistory.sort(function (a, b) {
//   return b.duration - a.duration;
// });

// const user = []; // объявляем массив

// for (let i = 0; i <= 2; i++) {
//   user[i] = filmSort[i];
// }

// document.write(`<h1>Самые популярные фильмы</h1>`);

// for (let key in user) {
//   if (typeof user[key] === "object") {
//     for (let subKey in user[key]) {
//       if (subKey === "title") {
//         document.write(`<h3>Название фильма: <i>${user[key][subKey]}</i></h3>`);
//       } else if (subKey === "director") {
//         document.write(`<h4>Pежиссёр фильма: <i>${user[key][subKey]}</i></h4>`);
//       } else {
//         document.write(`<h4>длительность в минутах: <i><u>${user[key][subKey]}</u></i></h4>`);
//       }
//     }
//   }
// }
