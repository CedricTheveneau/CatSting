// Fetch anecdotes
let anecdotes = () => {
  let fetchAnecdotes = () => {
    let anecdoteBox = document.getElementById("anecdote");
    let anecdote;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://catfact.ninja/fact", false);
    xhr.onload = function () {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        anecdote = response.fact;
      }
    };
    xhr.send();
    anecdoteBox.innerHTML = anecdote;
  };
  let showMeTrivia = document.getElementById("showMeTrivia");
  showMeTrivia.addEventListener("click", () => {
    fetchAnecdotes();
  });
};
anecdotes();

// Display more anecdotes
let showMore = document.getElementById("showMore");
let anecdotesContainer = document.querySelector(".moreAnecdotes");
showMore.addEventListener("click", () => {
  anecdotesContainer.classList.toggle("hide");
});
