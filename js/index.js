const ham = document.getElementById("ham");
const burger = document.querySelector(".burger");
const cancel = document.querySelector(".cancel");
const menu = document.getElementById("menu");
const login = document.querySelector(".login-button");

cancel.style.display = "none";

const toggleMenu = () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    cancel.style.display = "none";
    login.style.display = "block";
    burger.style.display = "block";
  
    console.log("open");
  } else {
    menu.classList.add("open");
    login.style.display = "none";
    burger.style.display = "none";
    cancel.style.display = "block";

    console.log("close");
  }
};
const accItems = document.querySelectorAll(".accordion__item");


accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

function toggleAcc() {
  
  accItems.forEach((item) => item != this ? item.classList.remove("accordion__item--active") : null
  );

  
  if (this.classList != "accordion__item--active") {
    this.classList.toggle("accordion__item--active");
  }
}


const backTopElement = document.getElementById("back-top-div");
const minScolledAmountToBackTop = 800;

window.addEventListener("scroll", () => {
  if (window.scrollY < minScolledAmountToBackTop) {
    backTopElement.classList.add("hidden");
  } else {
    backTopElement.classList.remove("hidden");
  }
});

const backTop = () => {
  window.scrollTo(0, 0);
};

backTopElement.addEventListener("click", backTop);
ham.addEventListener("click", toggleMenu);

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click',toggleMenu);
});