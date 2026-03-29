/* 
  What this app does:
  -------------------
  - Waits for the user to click the button
  - Picks a random compliment from a list
  - Displays the compliment inside the page
  - Adds a random image above the compliment to keep it fun
    (example image source: https://picsum.photos/600/400)
*/

// 1. Get the button and output area from the HTML
const complimentBtn = document.getElementById("complimentBtn");
const complimentOutput = document.getElementById("complimentOutput");

// 2. Create a list of compliments to choose from
const compliments = [
  "If life were a ballot, you'd be that one candidate everyone can agree on without starting a family argument.",
  "Talking to you feels like when democracy briefly works the way it's supposed to.",
  "You're like if Clairo wrote a song about basic human rights and it accidentally became the national anthem.",
  "You're the kind of person who could calmly explain why something is messed up and make everyone go, 'Yeah...that's actually true.'",
  "You have the political awareness of a Very Online person, but the kindness of someone who still touches grass.",
  "You've got 'P Diddy in a white party outfit' levels of unbothered when things get stressful.",
  "You have that quiet 'I'm not P Diddy, but I get things done' executive energy.",
  "You're the type of person P Diddy would probably cast just to stand in the background and somehow steal the scene.",
  "You walk into a room like you know the lighting is already working for you.",
  "You're like when a playlist shuffle accidentally lines up three perfect songs in a row.",
  "Your timing in conversations is so good it feels low-key scripted.",
  "You dress like your Pinterest board actually made it to production.",
  "You make 'I just thought of this' ideas sound like they had a creative director.",
  "You have the exact energy of a clean, satisfying grid on Instagram - nothing out of place, somehow still chill.",
  "Your laugh could turn a group chat argument into a meme.",
  "You have the rare talent of making people feel cooler just by standing next to you.",
  "Spending time with you feels like finding an old sketchbook and realizing, 'Oh wait, I've always been kind of amazing.'",
  "You give 'I didn't even try but it still looks intentional' in the best way.",
  "Your side comments are funnier than most people's planned jokes.",
];

const gifUrls = [
  "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  "https://media.giphy.com/media/fw6v306DZbK0uorlpd/giphy.gif",
  "https://media.giphy.com/media/eScge1ukCZfMGcaihY/giphy.gif",
  "https://media.giphy.com/media/bhi1Mp72kGp9etv0kF/giphy.gif",
  "https://media.giphy.com/media/DDgHvbLeMkemvhKxgB/giphy.gif",
];

// 3. Listen for a button click
complimentBtn.addEventListener("click", function () {
  // 4. Pick a compliment at random
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const randomCompliment = compliments[randomIndex];

  const randomGifIndex = Math.floor(Math.random() * gifUrls.length);
  const randomGifUrl = gifUrls[randomGifIndex];

  // 5. Update the page with the compliment and GIF
  complimentOutput.innerHTML = "";

  const complimentText = document.createElement("p");
  complimentText.textContent = randomCompliment;

  const gifImage = document.createElement("img");
  gifImage.src = randomGifUrl;
  gifImage.alt = "Funny reaction GIF";
  gifImage.width = 180;

  complimentOutput.appendChild(complimentText);
  complimentOutput.appendChild(gifImage);
});
