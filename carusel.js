// DOM
const swiper = document.querySelector("#swiper");
const like = document.querySelector("#like");
const dislike = document.querySelector("#dislike");

// constants
const urls = [
  "./assets/Buzz.svg",
  "./assets/Minion.svg",
  "./assets/Phone_Yellow.svg",
  "./assets/Rabbit.svg",
  "./assets/Rainbow.svg",
];

let likedUrls = "A shoe texture for someone who likes: ";

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = "running";
      like.classList.toggle("trigger");
      const currentUrl = urls[cardCount % 5];
      likedUrls +=
        urls[cardCount % 5].substring(9, urls[cardCount % 5].length - 4) + " ";
      if (cardCount === 5) {
        apiHandler(likedUrls);
      }
    },
    onDislike: () => {
      dislike.style.animationPlayState = "running";
      dislike.classList.toggle("trigger");
    },
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll(".card:not(.dismissing)");
  cards.forEach((card, index) => {
    card.style.setProperty("--i", index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}

// Api handler
async function apiHandler(text) {
  // Query and image generated.

  // Response from the Api.
  response = await fetch("http://20.234.7.9/generate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: text,
    }),
  })
    .then((response) => response.json())
    .then((response) => console.log(response.message));
}
