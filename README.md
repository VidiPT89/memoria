# 🃏 Memory Game

> *"12 cards. 6 pairs. All face-down. Your brain against itself."*

A browser-based memory game built with pure vanilla JavaScript — no frameworks, no libraries, no canvas.
Flip two cards at a time, find the matching pairs, and beat the clock before your memory does.
The board reshuffles every time. Your excuses don't.

---

## What's Inside

- **12 cards / 6 unique pairs** — shuffled randomly on every page load via `Array.sort()`
- **Flip mechanic** — cards reveal on click, two at a time, with a 200ms delay before match checking
- **Match detection** — compares card names, not positions; same card clicked twice is caught and rejected
- **Score counter** — updates live after each correct pair
- **Built-in timer** — starts on the first flip, stops when the last pair is found
- **Matched cards are locked** — `removeEventListener` + `pointer-events: none` prevent re-clicking
- **Win screen** — score replaced with elapsed time in seconds when the board is cleared

---

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## How to Play

1. Open `index.html` in any modern browser — no server needed
2. Click any card to flip it and reveal the image
3. Click a second card to try and make a match
4. **Match found?** Both cards go blank and are locked permanently
5. **No match?** Both cards flip back face-down — pay attention
6. Find all **6 pairs** to win — your time is shown at the end

---

## Project Structure

```
memoria/
│
├── index.html          — game layout: title, score display and card grid
├── app.js              — all game logic: board creation, flip events, match checking and timer
├── styles.css          — grid layout, hover scale effect, and matched card lock state
│
└── images/
    ├── cover.png       — card back, shown before flipping
    ├── white.png       — matched card state: blank and non-interactive
    ├── cheeseburger.png
    ├── fries.png
    ├── hotdog.png
    ├── ice-cream.png
    ├── milkshake.png
    └── pizza.png
```

---

## Card Pairs

| 🍔 Cheeseburger | 🍟 Fries | 🌭 Hotdog |
|:---:|:---:|:---:|
| **🍦 Ice Cream** | **🥤 Milkshake** | **🍕 Pizza** |

---

## Honest Notes

- The theme is fast food. There's no deeper meaning. It felt right and it stayed.
- All game feedback uses `alert()`. Blocking, intrusive, and effective. No regrets.
- Clicking the same card twice triggers a cheat detection alert. It will call you out by name. Well — by word.
- The CSS is 22 lines. The grid takes 7. The hover effect takes 5. The rest handles matched cards.
- The timer is measured in seconds. Milliseconds felt cruel.
- `Array.sort(() => 0.5 - Math.random())` is not perfectly uniform. It works. The cards feel shuffled. That's enough.

---

*Next up: `localStorage` for best times, a restart button, or `alert()` swapped for something less 2005. We'll see.*
