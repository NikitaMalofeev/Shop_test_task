const images = document.querySelectorAll(".card__select a");
const imageButtons = [...images];
let imageId = 1;

imageButtons.forEach((imageItem) => {
  imageItem.addEventListener("click", (event) => {
    event.preventDefault();
    imageId = imageItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".card__showcase img:first-child"
  ).clientWidth;

  document.querySelector('.card__showcase').style.transform = `translateX(${- (imageId - 1) * displayWidth}px)`;
}
