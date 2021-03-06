class UI {
  constructor() {
    const thisUI = this;
    thisUI.photo = document.querySelector('#photo');
  }

  showPhotos(data) {
    const thisUI = this;
    let output = '';

    for (let photo of data) {
      output += `

        <figure class="gallery_item col-flex">
          <a class="delete" href="#" data-id="${photo.id}">
            <i class="far fa-trash-alt gallery_item--icon "></i>
          </a>
          <a
          data-id="${photo.id}"
            href="${photo.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              data-id="${photo.id}"
              loading="lazy"
              src="${photo.url}"
              alt="Gallery image 1"
              class="gallery__img"
            />
          </a>
        </figure>
      `;
    }
    thisUI.photo.innerHTML = output;
  }

  scrollTop() {
    const thisUI = this;
    thisUI.scroll = document.querySelector('#myBtn');
    const bodyTop = document.body.scrollTop;
    const bodyElementTop = document.documentElement.scrollTop;

    if (bodyTop > 20 || bodyElementTop > 20) {
      thisUI.scroll.classList.toggle('active');
      thisUI.scroll.classList.toggle('inactive');
      console.log('skrol');
    } else {
      thisUI.scroll.classList.toggle('inactive');
      console.log('skrol 2');
    }
  }
}

export const ui = new UI();
