"use strict";
var menu = document.getElementById("display-menu");
const searchCountry = document.getElementById("countries"); // the datalist of countires
const inputCountry = document.getElementById("input"); // the choosen country
let selectedCountry; // storing the choosen country
// declaring most popular countries
const italy = document.getElementById("italy");
const spain = document.getElementById("spain");
const turkey = document.getElementById("turkey");
const egypt = document.getElementById("egypt");
//listing all countries
const countries = [
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bangladesh",
  "Barbados",
  "Bahamas",
  "Bahrain",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Indian Ocean Territory",
  "British Virgin Islands",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burma",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo-Brazzaville",
  "Congo-Kinshasa",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Curaçao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "El Salvador",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Federated States of Micronesia",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Lands",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard and McDonald Islands",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Palestine, state of",
  "Pitcairn Islands",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Réunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Barthélemy",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "São Tomé and Príncipe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Swaziland",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "USA",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Vietnam",
  "Venezuela",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
function fontAwesome() {
  var css = document.createElement("link");
  css.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
  css.rel = "stylesheet";
  css.type = "text/css";
  document.getElementsByTagName("head")[0].appendChild(css);
}
fontAwesome();
// toggeling the menu icon function
function show() {
  menu.classList.toggle("hide");
}

//looping over countries and insert them in the datalist
countries.map((element) => {
  searchCountry.insertAdjacentHTML("beforeend", `<option value='${element}'>`);
});
// the function that is responsible for selecting a country
const changeCountry = () => {
  selectedCountry = inputCountry.value;
  localStorage.setItem("selectedCountry", selectedCountry); //saving the selected country in local storage to use it later on at other pages
  window.location.href = "../generalInfoPage/general.html"; //transfer us to the general info page ;
  inputCountry.value = ""; //to rest (empty) the search text
};
// the function for the most popular countries
const setCountry = (country) => {
  localStorage.setItem("selectedCountry", country);
  window.location.href = "../generalInfopage/general.html";
};

// for static countries
italy.addEventListener("click", () => {
  setCountry("italy");
});
spain.addEventListener("click", () => {
  setCountry("spain");
});
turkey.addEventListener("click", () => {
  setCountry("turkey");
});
egypt.addEventListener("click", () => {
  setCountry("egypt");
});

// calling the changeCountry function on every change for the input value
inputCountry.addEventListener("change", changeCountry);
