
// Add imports above this line
import SimpleLightbox from "../simplelightbox/dist/simple-lightbox.esm"
import "../simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// // Change code below this line



const ulGallery = document.querySelector('.gallery')
const galleryItemsNew = galleryItems.map((item) => 
    
 `<li><a class="gallery__item"
  href=${item.original}>
  <img 
  class="gallery__image" 
  src=${item.preview}
  alt=${item.description}
  title=${item.description} />
</a></li>`  
).join("");
    
ulGallery.insertAdjacentHTML("afterbegin", galleryItemsNew);

let lightbox = new SimpleLightbox('.gallery a');

lightbox.on('show.simplelightbox', function () {
    lightbox.defaultOptions.captionDelay = 250;
	
});
console.log(galleryItems);
