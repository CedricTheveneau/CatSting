// Fetch anecdote number
let fetchAnecdoteNumber = () => {
  let anecdoteNumber = document.querySelector(".anecdoteNum");
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://catfact.ninja/facts", false);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      anecdoteNumber.innerHTML = response.total;
    }
  };
  xhr.send();
};
fetchAnecdoteNumber();

// Fetch breed number
let fetchBreedNumber = () => {
  let breedsNum = document.querySelector(".breedNum");
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://catfact.ninja/breeds", false);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      breedsNum.innerHTML = response.total;
    }
  };
  xhr.send();
};
fetchBreedNumber();
