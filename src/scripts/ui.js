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
          <a href="#">
            <i class="far fa-trash-alt gallery_item--icon"></i>
          </a>
          <a
          data-id="${photo.id}"
            href="${photo.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
            data-id="${photo.id}"
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
}

export const ui = new UI();
