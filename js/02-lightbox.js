import { galleryItems } from './gallery-items.js';
// Change code below this line
//добавил изображения в разметку
const gallery = document.querySelector(".gallery");
const imgGallery = galleryItems.map(({ preview, original, description }) => {
return `<li><a  class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="'${description}'"
      title='${description}'
          
    />
  </a></li>`;
}).join(" ");
gallery.insertAdjacentHTML("beforeend", ` ${imgGallery}`);

//получше преведущего
var lightbox = new SimpleLightbox('.gallery a', {captionDelay:250});


