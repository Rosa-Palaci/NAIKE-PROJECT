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
      likedUrls.push(currentUrl);
      pushLikedUrls();
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

function pushLikedUrls() {
  fetch("/likedUrls", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ urls: likedUrls }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Liked URLs pushed successfully:", data);
    })
    .catch((error) => {
      console.error("Error pushing liked URLs:", error);
    });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}
