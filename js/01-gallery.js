import { galleryItems } from "./gallery-items.js";
let modalGallery;
const galleryItemsContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryItemsContainer.addEventListener("click", onClickGallery);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`;
    })
    .join("");
}

function onClickGallery(e) {
  e.preventDefault();
  const galleryImageEl = e.target.classList.contains("gallery__image");
  if (!galleryImageEl) {
    return;
  }
  const urlSource = e.target.dataset.source;
  function onEscClose(e) {
    if (e.code == "Escape") modalGallery.close();
  }
  if (urlSource) {
    modalGallery = basicLightbox.create(`<img src="${urlSource}"/>`, {
      onShow: () =>
        galleryItemsContainer.addEventListener("keydown", onEscClose),
      onClose: () =>
        galleryItemsContainer.removeEventListener("keydown", onEscClose),
    });
    modalGallery.show();
  }
}

console.log(galleryItems);
