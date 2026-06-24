# 🃏 Memoria — Food-Themed Memory Card Game in JavaScript

> Flip, match, and remember — test your memory with delicious food card pairs.

A classic memory matching game built with vanilla JavaScript featuring six food-themed card pairs. The board presents 12 cards face-down, shuffled randomly at the start of each game. Players flip two cards at a time — if they match, they stay revealed; if not, they flip back. The game tracks both time elapsed and the number of successful matches, challenging players to clear the board as quickly and efficiently as possible.

## 📦 What's Inside

- 🔀 Fisher-Yates style random shuffle on every new game for unique card layouts
- 🖱️ Click-to-flip interaction with smooth card reveal animation
- 🍔 Six food-themed pairs: cheeseburger, fries, hotdog, ice cream, milkshake, pizza
- 🎴 12 cards total (6 matching pairs) arranged in a grid layout
- ✅ Match detection — correctly paired cards remain face-up permanently
- ❌ Mismatch handling — non-matching cards flip back after a brief delay
- ⏱️ Timer tracking from the first card flip to game completion
- 🏆 Score counter tracking the number of matched pairs found
- 🔒 Input lock during mismatch animation to prevent flipping a third card
- 🖼️ Custom image assets for each food item and card back design
- 🎯 Win condition — all six pairs matched clears the board
- 🎨 CSS-styled card grid with face-down cover images

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🏗️ Project Structure

```
memoria/
├── index.html          # Game board layout and score/timer display
├── styles.css          # Card grid, flip animations, visual theming
├── app.js              # Shuffle logic, match detection, timer, scoring
├── images/
│   ├── cover.png       # Card back design (face-down state)
│   ├── white.png       # Blank/default card placeholder
│   ├── cheeseburger.png
│   ├── fries.png
│   ├── hotdog.png
│   ├── ice-cream.png
│   ├── milkshake.png
│   └── pizza.png
└── README.md
```

## 🎮 How to Play

1. Click any face-down card to flip it and reveal the food image underneath
2. Click a second card to flip it — now two cards are visible
3. **Match:** If both cards show the same food, they stay face-up and your score increments
4. **Mismatch:** If the cards differ, both flip back face-down after a short delay
5. Repeat until all six pairs are found and the board is cleared
6. Try to complete the game in the fewest flips and shortest time possible

## ⚙️ Game Mechanics

### Card Shuffle

At game start, the array of card values (each food appearing twice) is shuffled using a randomized sort. This ensures a completely different board layout every time, preventing memorization of fixed positions across games.

### Matching Logic Flow

```
Player clicks Card A → Card A flips face-up
Player clicks Card B → Card B flips face-up
                      ↓
              Compare A and B
             /                \
        Match                  Mismatch
          ↓                       ↓
  Both stay revealed       Brief delay (setTimeout)
  Score increments         Both flip face-down
  Check if all matched     Unlock input for next attempt
```

### Input Locking

When two cards are face-up and being compared, additional clicks are ignored. This prevents the player from flipping a third card during the mismatch delay, which would break the comparison logic. Input is re-enabled after mismatched cards flip back or after a match is confirmed.

### Timer System

The timer starts on the first card flip and counts upward in seconds. It stops when the final pair is matched. This gives players a benchmark to improve against on subsequent playthroughs.

### Card Images

Each of the six food items has a dedicated PNG image file. The card back (`cover.png`) is displayed for all face-down cards. When flipped, the card's background image switches to the corresponding food image via DOM manipulation.

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/VidiPT89/memoria.git

# Navigate into the project
cd memoria

# Open in your default browser
open index.html
```

No build tools, no dependencies — just open and play.

## 📝 Notes

- The shuffle runs before DOM rendering, so the board is randomized before the player sees any cards
- The mismatch delay uses `setTimeout` to give the player time to memorize card positions before they flip back
- Input locking is essential — without it, rapid clicking can corrupt the two-card comparison state
- All image assets are local PNGs with no external CDN dependencies
- The game is fully self-contained with no external libraries or frameworks
- Card grid layout uses CSS for responsive alignment of the 12-card board

---

Developed by **David Arsénio Martins** — *"Vidi"*
