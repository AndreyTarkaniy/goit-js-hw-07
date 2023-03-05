import { galleryItems } from './gallery-items.js';
// Change code below this line

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */



const paletteContainer = document.querySelector(".gallery");
const cardsMarkup = createImagCardsMarkup(galleryItems);

paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

paletteContainer.addEventListener("click", handlePaletteContainerClick);

function createImagCardsMarkup(galleryItems){
  return galleryItems.map(({preview, original, description}) => {
    return `  
         <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description} "
              />
            </a>
         </div> `
    }).join(" ");
    
};

function handlePaletteContainerClick (event){
    event.preventDefault();

    if(!event.target.classList.contains("gallery__image")){
        return
    }

    const modal = basicLightbox.create(
        `<img class="gallery__image"
         src="${event.target.dataset.source}" />`);
       modal.show();

}


// console.log(createImagCardsMarkup(galleryItems));

