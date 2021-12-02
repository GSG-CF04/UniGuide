var menu = document.getElementById("display-menu");

function show() {
    menu.classList.toggle('hide')
  }
function fontAwesome() {
    var css = document.createElement("link");
    css.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
    css.rel = "stylesheet";
    css.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(css);
}
fontAwesome();