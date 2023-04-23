const darkTheme = () => {
    document.querySelector("body").setAttribute("data-bs-theme",  "dark");
    document.querySelector("#iconito").setAttribute("class",  "bi bi-sun-fill");
}

const lightTheme = () => {
    document.querySelector("body").setAttribute("data-bs-theme",  "light");
    document.querySelector("#iconito").setAttribute("class",  "bi bi-moon-fill");
}

const switchTheme = (params) => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ? darkTheme() : lightTheme();

}