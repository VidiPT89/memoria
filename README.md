# 🃏 Memoria — Memory Card Game

> A food-themed memory matching game built with vanilla JavaScript.

Flip cards to find matching pairs of food items. The deck of 12 cards (6 pairs) is shuffled randomly each game. Match all pairs to win, with your score and time tracked throughout. Features cheeseburgers, fries, hotdogs, ice cream, milkshakes, and pizza.

## 📦 What's Inside

- 🔀 Randomly shuffled card deck on each game
- 🖱️ Click-to-flip card interaction
- 🍔 Six food-themed card pairs with images
- ✅ Match detection with visual feedback
- ⏱️ Timer tracking from first flip to completion
- 🏆 Score counter for matched pairs

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🏗️ Architecture

```
memoria/
├── index.html
├── styles.css
├── app.js
└── images/
    ├── cover.png
    ├── white.png
    ├── cheeseburger.png
    ├── fries.png
    ├── hotdog.png
    ├── ice-cream.png
    ├── milkshake.png
    └── pizza.png
```

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/VidiPT89/memoria.git

# Open in browser
open index.html
```

## 📝 Notes

- Cards are shuffled using a randomized sort before the board is created.
- Two cards can be flipped at a time; if they match, they stay revealed.
- No external libraries or frameworks required.

---

Developed by **David Martins**
