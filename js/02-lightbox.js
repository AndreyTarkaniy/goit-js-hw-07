import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> */
const paletteContainer = document.querySelector(".gallery");
const markUp = createImagCardsMarkup(galleryItems);
paletteContainer.insertAdjacentHTML("beforeend", markUp);

// paletteContainer.addEventListener("click", handlePaletteContainerClick)


function createImagCardsMarkup(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
                   <img class="gallery__image" 
                      src="${preview}" 
                      alt="${description}" />
                </a>`
    }).join(" ");
};



     new SimpleLightbox('.gallery a',{ 

        captionsData: "alt",
        captionDelay: 250});

    

