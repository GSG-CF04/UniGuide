// Menu Icon Functionality
var menu = document.getElementById("display-menu");

function show() {
    menu.classList.toggle("hide");
}

// Font Awesome script
function fontAwesome() {
    var css = document.createElement("link");
    css.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
    css.rel = "stylesheet";
    css.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(css);
}
fontAwesome();

// Rendering the universities list from API
let selectedCountry = localStorage.getItem("selectedCountry");
if (selectedCountry === "USA") selectedCountry = "united states"; // This is an exception, because the two APIs doesnt match searching for USA
const uniContainer = document.querySelector(".container");

const generateUni = (country) => {
    fetch(`http://universities.hipolabs.com/search?&country=${country}`)
        .then((res) => res.json())
        .then((data) => {
            data.map((ele) => {
                uniContainer.insertAdjacentHTML(
                    "beforeend",
                    `<button id="btn-card" onclick=" window.open('${ele.web_pages[0]}','_blank')"><div class="card">
        <i class="far fa-school"></i>
        <p>${ele.name}
        </p>
    </div></button>`
                );
            });
        });
};
generateUni(selectedCountry);