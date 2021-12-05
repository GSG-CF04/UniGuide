var menu = document.getElementById("display-menu");
let selectedCountry = localStorage.getItem("selectedCountry");
const Infocontainer = document.querySelector(".info-div");
const InfoSection = document.querySelector(".info-section");
function show() {
  menu.classList.toggle('hide')
} 
const generateImage = (country) => {
  fetch(
    `https://api.codetabs.com/v1/proxy/?quest=https://imsea.herokuapp.com/api/1?q=${country}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      InfoSection.insertAdjacentHTML(
        "afterbegin",
        ` <img class="country-img" src=${data.results[0]} alt="picture" />
          `
      );
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

generateImage(`${selectedCountry} capital city`);

const generateCountryInfo = (country) => {
  fetch(`
  https://restcountries.com/v2/name/${country}`)
    .then((res) => res.json())
    .then((data) => {
      console.log();
      Infocontainer.insertAdjacentHTML(
        "afterbegin",
        `<div>
      <p class="country-info"><b>${data[0].name}</b></p>
    </div>
    <div class="row-info">
      <i class="fas fa-money-bill-wave icons"></i>
      <p class="P-icon">${
        data[0].currencies.length === 3
          ? data[0].currencies[1].name
          : data[0].currencies[0].name
      } (${
          data[0].currencies.length === 3
            ? data[0].currencies[1].symbol
            : data[0].currencies[0].symbol
        })</p>
    </div>
    <div class="row-info">
      <i class="far fa-comment-dots icons"></i>
      <p class="P-icon">${data[0].languages[0].name}</p>
    </div>
    <div class="row-info">
      <i class="fas fa-phone-alt icons"></i>
      <p class="P-icon">+${data[0].callingCodes[0]}</p>
    </div>
    <div class="row-info">
      <i class="fas fa-globe-americas icons"></i>
      <p class="P-icon">${data[0].region}</p>
    </div>`
      );
    });
};

generateCountryInfo(selectedCountry);
