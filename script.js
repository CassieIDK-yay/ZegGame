const story = [
  "Po wielu latach ukrywania się odkrywasz wejście do starego labiryntu.",
  "Legenda mówi, że w środku znajduje się martwy rycerz który posiadał ogromną moc.",
  "Labirynt jest pełen strażników i pułapek.",
  "Musisz odnaleźć klucze i wydostać się żywy oraz z ciałem."
];
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const tileSize = 40;

// grafiki
const playerImg = new Image();
playerImg.src = 'assets/player.png';

const enemyImg = new Image();
enemyImg.src = 'assets/enemy.png';

const keyImg = new Image();
keyImg.src = 'assets/key.png';

const exitImg = new Image();
exitImg.src = 'assets/exit.png';

// animacja gracza
const playerFrames = [];

for (let i = 1; i <= 2; i++) {
  const img = new Image();
  img.src = `assets/player${i}.png`;
  playerFrames.push(img);
}

let currentFrame = 0;

const levelMaps = [
[
"################",
"#P.....#......E#",
"#.###..#.####..#",
"#...#..#....#..#",
"#K..#..####.#..#",
"#...#.......#..#",
"#.#####.#####..#",
"#.......T......#",
"################"
],
[
"################",
"#P....#.....T.E#",
"#.##..#.######.#",
"#..#..#........#",
"##.#..#####.##.#",
"#..#......#....#",
"#..######.#.##.#",
"#K..............#",
"################"
],
[
"################",
"#P....#....T..E#",
"#.##..#.######.#",
"#..#..#....#...#",
"##.#..####.#.#.#",
"#..#.......#.#.#",
"#..######..#.#.#",
"#K......T......#",
"################"
]
];

let currentLevel = 0;
let map = [];
let player = {};
let enemies = [];
let enemyMoveTimer = 0;
let hp = 3;
let keys = 0;
let gameOver = false;

function loadLevel(levelIndex) {
  map = levelMaps[levelIndex].map(row => row.split(''));
  enemies = [];

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const tile = map[y][x];

      if (tile === 'P') {
        player = { x, y };
        map[y][x] = '.';
      }

      if (tile === 'T') {
        enemies.push({ x, y });
      }
    }
  }

  updateUI();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const tile = map[y][x];

      if (tile === '#') {
        ctx.fillStyle = '#334155';
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }

      if (tile === 'E') {
        ctx.drawImage(exitImg, x * tileSize, y * tileSize, tileSize, tileSize);
      }

      if (tile === 'K') {
        ctx.drawImage(keyImg, x * tileSize, y * tileSize, tileSize, tileSize);
      }

      ctx.strokeStyle = '#1e293b';
      ctx.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }

  ctx.drawImage(playerFrames[currentFrame], player.x * tileSize, player.y * tileSize, tileSize, tileSize);

  enemies.forEach(enemy => {
    ctx.drawImage(enemyImg, enemy.x * tileSize, enemy.y * tileSize, tileSize, tileSize);
  });
}

function movePlayer(dx, dy) {
  if (gameOver) return;

  const nx = player.x + dx;
  const ny = player.y + dy;

  const tile = map[ny][nx];

  if (tile === '#') return;

  player.x = nx;
  player.y = ny;


  if (tile === 'K') {
    keys++;
    map[ny][nx] = '.';
    updateMessage('Zdobyto klucz!');cu
  }

  if (tile === 'E') {
    if (keys > 0) {
      currentLevel++;

      if (currentLevel >= levelMaps.length) {
        updateMessage('Wygrałeś grę!');
        gameOver = true;
      } else {
        updateMessage('Nowy poziom!');
        loadLevel(currentLevel);
      }
    } else {
      updateMessage('Musisz zdobyć klucz!');
    }
  }

  checkEnemyCollision();
  updateUI();
}

function moveEnemies() {
  enemyMoveTimer++;

  if (enemyMoveTimer < 35) return;
  enemyMoveTimer = 0;

  enemies.forEach(enemy => {
    const distanceX = player.x - enemy.x;
    const distanceY = player.y - enemy.y;

    // przeciwnik zaczyna ścigać gracza dopiero gdy jest blisko
    if (Math.abs(distanceX) + Math.abs(distanceY) < 6) {
      let moveX = 0;
      let moveY = 0;

      if (Math.abs(distanceX) > Math.abs(distanceY)) {
        moveX = distanceX > 0 ? 1 : -1;
      } else {
        moveY = distanceY > 0 ? 1 : -1;
      }

      if (map[enemy.y + moveY]?.[enemy.x + moveX] !== '#') {
        enemy.x += moveX;
        enemy.y += moveY;
      }
    } else {
      // patrolowanie gdy gracz jest daleko
      const directions = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 }
      ];

      const randomDir = directions[Math.floor(Math.random() * directions.length)];

      const nx = enemy.x + randomDir.x;
      const ny = enemy.y + randomDir.y;

      if (map[ny]?.[nx] !== '#') {
        enemy.x = nx;
        enemy.y = ny;
      }
    }
  });

  checkEnemyCollision();
}

function checkEnemyCollision() {
  enemies.forEach(enemy => {
    if (enemy.x === player.x && enemy.y === player.y) {
      hp--;
      updateUI();
      updateMessage('Uderzył cię przeciwnik!');

      player.x = 1;
      player.y = 1;

      if (hp <= 0) {
        updateMessage('KONIEC GRY');
        gameOver = true;
      }
    }
  });
}

function askPuzzle() {
  const answer = prompt('Zagadka: Ile jest 5 + 7 ?');

  if (answer === '12') {
    updateMessage('Poprawna odpowiedź!');
  } else {
    hp--;
    updateUI();
    updateMessage('Błędna odpowiedź! -1 HP');

    if (hp <= 0) {
      updateMessage('KONIEC GRY');
      gameOver = true;
    }
  }
}

function updateUI() {
  document.getElementById('level').textContent = currentLevel + 1;
  document.getElementById('hp').textContent = hp;
  document.getElementById('keys').textContent = keys;
}

function updateMessage(text) {
  document.getElementById('message').textContent = text;
}

function restartGame() {
  currentLevel = 0;
  hp = 3;
  keys = 0;
  gameOver = false;
  loadLevel(currentLevel);
}

function startGame() {
  document.getElementById('startScreen').style.display = 'none';
}

window.addEventListener('keydown', e => {
  switch(e.key.toLowerCase()) {
    case 'arrowup':
    case 'w':
      movePlayer(0, -1);
      break;

    case 'arrowdown':
    case 's':
      movePlayer(0, 1);
      break;

    case 'arrowleft':
    case 'a':
      movePlayer(-1, 0);
      break;

    case 'arrowright':
    case 'd':
      movePlayer(1, 0);
      break;
  }
});

function gameLoop() {
  draw();
  moveEnemies();
  requestAnimationFrame(gameLoop);

currentFrame++;

if (currentFrame >= playerFrames.length) {
  currentFrame = 0;
}
}

loadLevel(currentLevel);
gameLoop();
