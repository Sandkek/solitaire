// Функция для сохранения результатов игры
function saveGameResult(playerName, score) {
  // Получаем текущий список результатов из localStorage (если он есть)
  let results = JSON.parse(localStorage.getItem('gameResults')) || [];

  // Создаем объект с результатами текущей игры
  const gameResult = {
    score: moves,
    timestamp: new Date().toLocaleString(), // Добавляем временную метку
  };

  // Добавляем результат текущей игры в список результатов
  results.push(gameResult);

  // Сортируем результаты по счету (от наименьшего к наибольшему)
  results.sort((a, b) => a.score - b.score);

  // Ограничиваем список результатов, чтобы оставить только, например, 10 лучших результатов
  const maxResults = 10;
  if (results.length > maxResults) {
    results = results.slice(0, maxResults);
  }

  // Сохраняем обновленный список результатов в localStorage
  localStorage.setItem('gameResults', JSON.stringify(results));
}

// Пример использования функции для сохранения результата игры
const playerName = 'Игрок 1'; // Замените на имя игрока
const score = 1000; // Замените на счет игрока
saveGameResult(playerName, score);
