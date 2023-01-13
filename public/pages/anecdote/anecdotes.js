// Fetch anecdotes
let anecdotes = () => {
  let fetchAnecdotes = () => {
    const anecdoteBox = document.getElementById("anecdote");
    let anecdote;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://catfact.ninja/fact", false);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        anecdote = response.fact;
      }
    };
    xhr.send();
    anecdoteBox.innerHTML = anecdote;
  };
  const showMeTrivia = document.getElementById("showMeTrivia");
  showMeTrivia.addEventListener("click", () => {
    fetchAnecdotes();
  });
};
anecdotes();

// Display more anecdotes
let showMoreTrivia = () => {
  const showMore = document.getElementById("showMore");
  const anecdotesContainer = document.querySelector(".moreAnecdotes");
  showMore.addEventListener("click", () => {
    anecdotesContainer.classList.toggle("hide");
  });
};
showMoreTrivia();

// Toggles between each display type
let toggleDisplay = () => {
  const displayContainer = document.querySelector(".moreAnecdotes");
  const svgGrid = document.querySelector("#gridBtn");
  const svgInline = document.querySelector("#inlineBtn");
  svgGrid.addEventListener("click", () => {
    displayContainer.classList.add("grid");
    svgGrid.classList.add("active");
    svgInline.classList.remove("active");
  });
  svgInline.addEventListener("click", () => {
    displayContainer.classList.remove("grid");
    svgGrid.classList.remove("active");
    svgInline.classList.add("active");
  });
};
toggleDisplay();

// Random anecdote push in DOM
let randomAnecdote = () => {
  const displayContainer = document.querySelector(".moreAnecdotes");
  let anecdote;
  let fetchRandomAnecdote = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://catfact.ninja/facts", false);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        anecdote = response.data;
      }
    };
    xhr.send();
  };
  fetchRandomAnecdote();

  let pushRandomAnecdote = () => {
    anecdote.forEach((element) => {
      displayContainer.innerHTML += `<div class="tinyAnecdote">
    <h3>Anecdote</h3>
    <p>Did you know ?</p>
    <p class="tinyAnecdotes">${element.fact}</p>
  </div>`;
    });
  };
  pushRandomAnecdote();
};
randomAnecdote();
