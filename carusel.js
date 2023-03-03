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

const likedImages = []

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
      likedImages.push(imageUrl) 
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

const concatenatedNames = likedImages.map(name => name.split(".")[0]).join(", ");
console.log(concatenatedNames); // Output: "example1, example2, example3"
