// toggle navbar
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// shopping cart
const shoppingBtn = document.querySelector("#shopping-cart");
const shoppingBox = document.querySelector(".shopping-cart");

shoppingBtn.onclick = (e) => {
  shoppingBox.classList.toggle("active");
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!shoppingBtn.contains(e.target) && !shoppingBox.contains(e.target)) {
    shoppingBox.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailBtn = document.querySelectorAll(".item-detail-button");
const closeModal = document.querySelector(".modal .close-icon");

itemDetailBtn.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

closeModal.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === modal) {
    itemDetailModal.style.display = "none";
  }
};
