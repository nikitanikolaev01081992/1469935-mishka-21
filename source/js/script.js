//Logic for mobile navigation menu
const header = document.querySelector(".page-header");
const navOpener = document.querySelector(".navigation__toggle");
const navigation = document.querySelector(".navigation");

header && header.classList.remove("no-js");

navOpener &&
  navOpener.addEventListener("click", () => {
    navigation.classList.toggle("navigation--active");
  });

//Logic for modal window 'add-to-cart'
const modapOpener = document.querySelector(".week-thing__button");
const modalContainer = document.querySelector(".add-to-cart");

modapOpener &&
  modapOpener.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalContainer.classList.add("modal-active");
  });

modalContainer &&
  modalContainer.addEventListener("click", (evt) => {
    if (evt.target !== modalContainer) return;

    modalContainer.classList.add("modal-closing");

    setTimeout(() => {
      modalContainer.classList.remove("modal-active");
      modalContainer.classList.remove("modal-closing");
    }, 200);
  });
