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
let showMoreTrivia = () => {
  let showMore = document.getElementById("showMore");
  let anecdotesContainer = document.querySelector(".moreAnecdotes");
  showMore.addEventListener("click", () => {
    anecdotesContainer.classList.toggle("hide");
  });
};
showMoreTrivia();

// Toggles between each display type
let toggleDisplay = () => {
  let displayContainer = document.querySelector(".moreAnecdotes");
  let svgGrid = document.querySelector("#gridBtn");
  let svgInline = document.querySelector("#inlineBtn");
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
  let displayContainer = document.querySelector(".moreAnecdotes");
  let anecdote;
  let fetchRandomAnecdote = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://catfact.ninja/facts", false);
    xhr.onload = function () {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
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
