const article = document.getElementById("article");
const menu = document.getElementById("menu");
const twitterButton = document.getElementById("twitter-button");
let selectedText = "";

article.addEventListener("mouseup", (event) => {
  selectedText = window.getSelection().toString();
  if (selectedText) {
    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
    menu.classList.add("show");
  } else {
    menu.classList.remove("show");
  }
});

twitterButton.addEventListener("click", () => {
  const tweetIntentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedText)}`;
  window.open(tweetIntentUrl, "_blank");
  menu.classList.remove("show");
});
