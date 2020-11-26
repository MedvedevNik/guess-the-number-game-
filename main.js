'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


function gameStart() {
  const randomNum = Math.floor(Math.random() * 100) + 1; // константа числа
  let userTry = 10;                                      //число попыток
  function game() {
    if (userTry === 0) {                        //если кол-во попыток 0, то прекращаем игру
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        gameStart();
      } else {
        alert('Игра окончена');
        return;
      }
    }
    const userNum = prompt('Угадай число от 1 до 100');  // user вводит число
    if (userNum === null) {
      alert('Здесь прощальное сообщение');   //проверка на отмену
      return;
    }
    if (isNumber(userNum)){                  // проверка на символы и пустоту
        if (userNum < randomNum) {           // ищем к чему онсится 
          userTry--;
          alert('Загаданное число больше, осталось ' + userTry + ' попыток');
          game();
        } else if (userNum > randomNum) {
          userTry--;
          alert('Загаданное число меньше, осталось ' + userTry + ' попыток');
          game();
        } else {
          if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
              gameStart();
            } else {
              alert('Игра окончена');
              return;
            }
        }
    } else {
      alert('Введи число!');
      game();
    }
  }
  game();
}
gameStart();



