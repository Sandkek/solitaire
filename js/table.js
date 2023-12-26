function displayLeaderboard() {
  const leaderboardTable = document.getElementById('leaderboard');
  const leaderboardBody = leaderboardTable.getElementsByTagName('tbody')[0];
  
  // Получаем результаты из localStorage
  const results = JSON.parse(localStorage.getItem('gameResults')) || [];

  // Очищаем таблицу перед заполнением
  leaderboardBody.innerHTML = '';

  // Заполняем таблицу данными из результатов
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const row = leaderboardBody.insertRow(i);
    const placeCell = row.insertCell(0);
    // const playerNameCell = row.insertCell(1);
    const scoreCell = row.insertCell(1);
    const dateCell = row.insertCell(2);

    placeCell.textContent = i + 1; // Место
    // playerNameCell.textContent = result.playerName;
    scoreCell.textContent = result.score;
    dateCell.textContent = result.timestamp;
  }
}

// Вызываем функцию для отображения таблицы рекордов
displayLeaderboard();