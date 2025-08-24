
// Створення і рендер розмітки по масиву даних galleryItems з app.js і наданим шаблоном.
// Реалізація делегування на галереї ul.js-gallery і отримання url великого зображення.
// Відкриття модального вікна при натисканні на елементі галереї.
// Підміна значення атрибута src елемента img.lightbox__image.
// Закриття модального вікна при натисканні на кнопку button[data-action=""close-lightbox"].
// Очищення значення атрибута src елемента img.lightbox__image. Це необхідно для того, щоб при наступному відкритті модального вікна, поки вантажиться зображення, ми не бачили попереднє.

const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];



const lidtRe = document.querySelector(".js-gallery")
const lightBoxRev = document.querySelector(".js-lightbox")
const lightBoxImg = document.querySelector(".lightbox__image")
const closeModalBtn = document.querySelector(".lightbox__button")





const gallerMarkup = galleryItems.map(({preview,original,description})=> `<li class="gallery__item">
  <a
    class="gallery__link"
    href=""
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>

` ).join('')
console.log(gallerMarkup);



lidtRe.innerHTML = gallerMarkup
lidtRe.addEventListener("click", onGAlleryClick)



function onGAlleryClick(event) {
    event.preventDefault()


    if (event.target.nodeName !== "IMG") {
        return
    }
    

    const largeImg = event.target.dataset.source
openModal(largeImg,event.target.alt)
    
}


function openModal (src,alt) {
    lightBoxRev.classList.add("is-open")
    lightBoxImg.src = src
    lightBoxImg.alt = alt
}




closeModalBtn.addEventListener("click", closeModal)

function closeModal(params) {
    lightBoxRev.classList.remove("is-open")
    lightBoxImg.src = ""
    lightBoxImg.alt = ""
}




window.addEventListener("keydown", onCLoseEsc)

function onCLoseEsc(event) {

    if (event.code === "Escape") {
        closeModal()
    }
}

