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

//Logic for review slider
const ITEM_CSS_CLASS = "reviews-item";
const ITEM_CSS_CLASS_ACTIVE = `${ITEM_CSS_CLASS}--active`;
const ITEM_CSS_CLASS_DOT = `.${ITEM_CSS_CLASS}`;
const ITEM_CSS_CLASS_DOT_ACTIVE = `.${ITEM_CSS_CLASS}--active`;

const reviewItems = Array.from(document.querySelectorAll(ITEM_CSS_CLASS_DOT));
const prevReviewButton = document.querySelector(".reviews__control--previous");
const nextReviewButton = document.querySelector(".reviews__control--next");

const changeActiveReview = (step) => {
  const currActiveItem = document.querySelector(ITEM_CSS_CLASS_DOT_ACTIVE);
  const currActiveIndex = reviewItems.indexOf(currActiveItem);

  let newActiveItem;
  if (currActiveIndex == -1) {
    newActiveItem = document.querySelector(ITEM_CSS_CLASS_DOT);
  } else if (currActiveIndex + step >= reviewItems.length) {
    newActiveItem = reviewItems[0];
  } else if (currActiveIndex + step < 0) {
    newActiveItem = reviewItems[reviewItems.length - 1];
  } else {
    newActiveItem = reviewItems[currActiveIndex + step];
  }

  currActiveItem.classList.remove(ITEM_CSS_CLASS_ACTIVE);
  newActiveItem.classList.add(ITEM_CSS_CLASS_ACTIVE);
};

prevReviewButton &&
  prevReviewButton.addEventListener("click", () => {
    changeActiveReview(-1);
  });

nextReviewButton &&
  nextReviewButton.addEventListener("click", () => {
    changeActiveReview(1);
  });
