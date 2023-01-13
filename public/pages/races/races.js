// Fetch breeds and pushes them into DOM, updates number of results
let breedsSelection = () => {
  // Fetches breeds
  let fetchBreeds = () => {
    let country;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://catfact.ninja/breeds", false);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const breeds = response.data;
        // Breed counter
        let breedsNum = 0;
        // Fetches breed and breed's country for each one and increments the results number
        breeds.forEach((e) => {
          const breed = e.breed;
          country = e.country;
          breedsNum++;
          // Pushes in DOM each fetched breed
          document.querySelector(
            "#races"
          ).innerHTML += `<div class="raceSelection">${breed}</div>`;
          // Pushes in DOM each fetched country
          document.querySelector(
            "#country"
          ).innerHTML += `<option value="${country}">${country}</option>`;
        });
        // Updates results
        document.querySelector("#resultsNum").innerHTML =
          breedsNum + " results";
      }
    };
    xhr.send();
  };
  fetchBreeds();
  // Displays breed info on click
  let showBreedInfo = () => {
    const breedItems = document.querySelectorAll(".raceSelection");
    const breedIndication = document.querySelector("#breedBox");
    breedItems.forEach((item) => {
      item.addEventListener("click", () => {
        breedIndication.textContent = item.innerHTML;
      });
    });
  };
  showBreedInfo();
};
breedsSelection();
