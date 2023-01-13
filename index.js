// Fetch anecdote number
let fetchAnecdoteNumber = () => {
  const anecdoteNumber = document.querySelector(".anecdoteNum");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://catfact.ninja/facts", false);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      anecdoteNumber.innerHTML = response.total;
    }
  };
  xhr.send();
};
fetchAnecdoteNumber();

// Fetch breed number
let fetchBreedNumber = () => {
  const breedsNum = document.querySelector(".breedNum");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://catfact.ninja/breeds", false);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      breedsNum.innerHTML = response.total;
    }
  };
  xhr.send();
};
fetchBreedNumber();
