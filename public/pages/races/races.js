let breedsSelection = () => {
  let fetchBreeds = () => {
    let country;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://catfact.ninja/breeds", false);
    xhr.onload = function () {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let breeds = response.data;
        let breedsNum = 0;
        breeds.forEach((e) => {
          let breed = e.breed;
          country = e.country;
          breedsNum++;
          console.log(breedsNum);
          document.querySelector(
            "#races"
          ).innerHTML += `<div class="raceSelection">${breed}</div>`;
        });
        document.querySelector("#resultsNum").innerHTML =
          breedsNum + " results";
      }
    };
    xhr.send();
  };
  fetchBreeds();
  let showBreedInfo = () => {
    const breedItems = document.querySelectorAll(".raceSelection");
    const breedIndication = document.querySelector("#breedBox");
    breedItems.forEach((item) => {
      console.log(item.innerHTML);
      item.addEventListener("click", () => {
        console.log(country);
        breedIndication.textContent = item.innerHTML;
      });
    });
  };
  showBreedInfo();
};
breedsSelection();
