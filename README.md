Maze Escape
Zespół programistyczny
Krzysztof Sobol
Czas realizacji projektu
od: 10.04.2026
do: 08.06idk.2026

1. Opis projektu
Maze Escape to nowoczesna gra przeglądarkowa typu Labirynt wykonana przy użyciu HTML, CSS oraz JavaScript.
Gracz steruje postacią poruszającą się po planszy, zbiera klucze oraz unika przeciwników znajdujących się w labiryncie.
Celem gry jest zdobycie klucza i dotarcie do wyjścia prowadzącego do kolejnego poziomu.
Gra działa w przeglądarce internetowej i wykorzystuje element Canvas do renderowania planszy oraz obiektów.

2. Technologie użyte w projekcie
Frontend
HTML5
CSS3
JavaScript
Canvas API
Narzędzia
Visual Studio Code
GitHub
Przeglądarka internetowa

3. Wymagania funkcjonalne
Sterowanie postacią
ruch za pomocą klawiszy WASD
możliwość używania strzałek
blokowanie ruchu przez ściany
płynne poruszanie po planszy
Labirynt
plansza w formie siatki
ściany oraz przejścia
punkt startowy i końcowy
przechodzenie między poziomami
System poziomów
3 poziomy gry
zwiększający się poziom trudności
większa liczba przeciwników
Przeciwnicy
patrolowanie planszy
wykrywanie gracza
ściganie gracza
zadawanie obrażeń
System życia
gracz posiada HP
utrata życia po kontakcie z przeciwnikiem
ekran końca gry po utracie wszystkich punktów życia
Zbieranie przedmiotów
możliwość podnoszenia kluczy
klucz wymagany do ukończenia poziomu
znikanie klucza po podniesieniu
Interfejs użytkownika
wyświetlanie:
poziomu
HP
liczby kluczy
komunikaty gry
ekran startowy
przycisk restartu

4. Wymagania niefunkcjonalne
responsywność gry
prosty interfejs użytkownika
czytelna grafika
wydajność działania
kompatybilność z nowoczesnymi przeglądarkami

5. Struktura projektu
projekt/
│
├── index.html
├── player.png
├── enemy.png
├── key.png
├── exit.png
├── player1.png
├── player2.png
└── README.md


6. Opis działania gry
Uruchomienie gry
Po uruchomieniu pliku index.html pojawia się ekran startowy.
Gracz rozpoczyna grę po kliknięciu przycisku „Start Gry”.
Rozgrywka
Gracz porusza się po labiryncie i musi:
znaleźć klucz
unikać przeciwników
dojść do wyjścia
Po ukończeniu poziomu ładowany jest kolejny etap.
Koniec gry
Gra kończy się po:
utracie całego HP
ukończeniu wszystkich poziomów

7. Opis najważniejszych funkcji
loadLevel(levelIndex)
Odpowiada za ładowanie poziomu oraz tworzenie przeciwników.
draw()
Rysuje planszę, gracza, przeciwników oraz przedmioty na Canvas.
movePlayer(dx, dy)
Obsługuje ruch gracza oraz wykrywanie kolizji.
moveEnemies()
Steruje zachowaniem przeciwników.
checkEnemyCollision()
Sprawdza kontakt gracza z przeciwnikami.
updateUI()
Aktualizuje informacje wyświetlane na ekranie.
restartGame()
Resetuje stan gry.

8. Dokumentacja kodu
Kod został podzielony na sekcje:
konfiguracja gry
mapy poziomów
mechanika ruchu
przeciwnicy
renderowanie Canvas
interfejs użytkownika
W projekcie zastosowano komentarze opisujące działanie funkcji.

9. Grafika projektu
Gra wykorzystuje własne pliki PNG:
postać gracza
przeciwnicy
klucze
wyjście
Możliwe jest łatwe dodawanie nowych grafik oraz animacji.

10. Testowanie projektu
Przetestowano:
ruch postaci
kolizje
system poziomów
działanie przeciwników
restart gry
działanie UI

11. Historia zmian
Wersja 1.0
podstawowy labirynt
sterowanie gracza
system poziomów
przeciwnicy
HP
Wersja 1.1
inteligentniejsi przeciwnicy
wolniejsze poruszanie przeciwników
obsługa grafik PNG
animacja gracza

12. Możliwości dalszego rozwoju
dodanie dźwięków
więcej poziomów
bardziej rozbudowane zagadki
nowe typy przeciwników
system punktów
zapis postępu gry
animacje przeciwników
menu ustawień

13. Podsumowanie
Projekt Maze Escape spełnia wymagania projektu zespołowego.
Gra posiada system poziomów, przeciwników, zbierania przedmiotów oraz interfejs użytkownika.
Kod został napisany w prosty i czytelny sposób, dzięki czemu możliwy jest dalszy rozwój projektu.
