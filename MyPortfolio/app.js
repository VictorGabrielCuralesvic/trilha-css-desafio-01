const bars = document.querySelector(".bars");
const headerRightSide = document.querySelector(".header .rightSide");

bars.addEventListener("click", () => {
    bars.classList.toggle("active");
    headerRightSide.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.innerWidth == 769) {
        bars.classList.remove("active");
        headerRightSide.classList.remove("active");
    }
});

const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");
const darkLightMode = document.querySelector(".dark_light_mode");

darkLightModeFun();
darkLightMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkLightModeFun();
})

function darkLightModeFun() {
    if (document.body.classList.contains("dark")) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "flex";
    } else {
        moonIcon.style.display = "flex";
        sunIcon.style.display = "none";
    }
}