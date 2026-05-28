<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maze Escape</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>

<div id="startScreen">
  <h1>Maze Escape</h1>

  <p>
    Sterowanie: WASD lub strzałki.<br>
    Zbieraj klucze i unikaj przeciwników.
  </p>

  <button onclick="startGame()">Start Gry</button>
</div>

<div id="storyBox">
  <h2>Fabuła</h2>

  <p id="storyText"></p>

  <button onclick="nextStory()">Dalej</button>
</div>

<h1>Maze Escape</h1>

<div id="ui">
  <div>Poziom: <span id="level">1</span></div>
  <div>HP: <span id="hp">3</span></div>
  <div>Klucze: <span id="keys">0</span></div>
</div>

<canvas id="game" width="640" height="640"></canvas>

<div id="message"></div>

<button onclick="restartGame()">Restart</button>

<script src="script.js"></script>

</body>
</html>
