
import { galleryItems } from './gallery-items.js';
// Change code below this line
//добавил изображения в разметку
const gallery = document.querySelector(".gallery");
const imgGallery = galleryItems.map(({ preview, original, description }) => {
return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="'${description}'"
    />
  </a>`;
}).join(" ");
gallery.insertAdjacentHTML("beforeend", ` ${imgGallery}`);

//блок перехода
const link = document.querySelectorAll('.gallery__link');
const stopLink = (e)=> e.preventDefault();
[...link].map(item => item.addEventListener('click', stopLink));


//выход по ескейпу
const escapeCloseModal = (e) => {
    if (e.code === 'Escape') {
    window.removeEventListener('keydown', escapeCloseModal);
    document.querySelector('.basicLightbox').remove();
}
    return;  
    
};


//библиотека которая мне не нравится
const clickImg = (evt) => {
    window.addEventListener('keydown', escapeCloseModal);
    if (!evt.target.classList.contains("gallery__image") ) { return; } const instance = basicLightbox.create(
          	`<img  src="${evt.target.dataset.source}"></img>`
)

instance.show()
}; 
gallery.addEventListener('click', clickImg);






