import { galleryItems } from "./gallery-items.js";
const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryContainer.addEventListener("click", onClickGallery);

function createGalleryItemsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
    `;
    })
    .join("");

  console.log(markup);
}
function onClickGallery(e) {
  e.preventDefault();
  const galleryImageEl = e.target.classList.contains("gallery__image");
  if (!galleryImageEl) {
    return;
  }
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
