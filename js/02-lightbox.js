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

//блок перехода
const link = document.querySelectorAll('.gallery__link');
const stopLink = (e)=> e.preventDefault();
[...link].map(item => item.addEventListener('click', stopLink));

//получше преведущего
var lightbox = new SimpleLightbox('.gallery a', {captionDelay:250});


