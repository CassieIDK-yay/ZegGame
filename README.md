# Maze Escape

Maze Escape to prosta gra typu Labirynt wykonana w HTML, CSS i JavaScript.

Gracz porusza się po mapie, zbiera klucze i unika przeciwników, aby przejść do kolejnych poziomów.

---

# Fabuła

Podczas eksploracji starych ruin bohater odkrywa tajemniczy labirynt ukrywający magiczny artefakt.

Labirynt jest pełen strażników oraz niebezpieczeństw.

Aby wydostać się z środka, gracz musi:
- odnaleźć klucze,
- unikać przeciwników,
- dotrzeć do wyjścia.

Każdy poziom staje się coraz trudniejszy.

---

# Technologie

Projekt został wykonany przy użyciu:
- HTML5
- CSS3
- JavaScript
- Canvas API

---

# Funkcje gry

- sterowanie WASD oraz strzałkami,
- system poziomów,
- przeciwnicy patrolujący mapę,
- system życia (HP),
- klucze otwierające przejście,
- ekran startowy,
- restart gry,
- animacje postaci,
- własne grafiki PNG.

---

# Struktura projektu

```plaintext
projekt/
│
├── index.php
├── style.css
├── script.js
│
├── assets/
│   ├── player.png
│   ├── player1.png
│   ├── player2.png
│   ├── enemy.png
│   ├── key.png
│   └── exit.png
│
└── README.md
```
---

# Opis plików

## index.php
Główny plik gry zawierający strukturę HTML.

## style.css
Odpowiada za wygląd gry oraz interfejs użytkownika.

## script.js
Zawiera logikę gry:
- ruch gracza,
- przeciwników,
- kolizje,
- poziomy,
- system HP.

## assets/
Folder zawierający wszystkie grafiki używane w grze.

---

# Jak uruchomić grę

1. Pobierz projekt.
2. Otwórz folder projektu.
3. Uruchom plik `index.php`.
4. Kliknij przycisk „Start Gry”.

---

# Sterowanie

- W / Strzałka Góra → ruch w górę
- S / Strzałka Dół → ruch w dół
- A / Strzałka Lewo → ruch w lewo
- D / Strzałka Prawo → ruch w prawo

---

# Cel gry

- znaleźć klucz,
- unikać przeciwników,
- dotrzeć do wyjścia,
- ukończyć wszystkie poziomy.

---

# Możliwości rozwoju

- więcej poziomów,
- nowe typy przeciwników,
- dźwięki,
- zapis gry,
- nowe animacje,
- pułapki i zagadki.

---

# Autor

Krzysztof Sobol
