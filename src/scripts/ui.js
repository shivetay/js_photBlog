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

      <div class="gallery_container row-flex">
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
      </div>
      `;
    }
    thisUI.photo.innerHTML = output;
  }
}

export const ui = new UI();

// <figure class="gallery_item gallery_item--2">
//           <a href="#">
//             <i class="far fa-trash-alt gallery_item--icon"></i>
//           </a>
//           <a
//              data-id="${photo.id}"
//             href="${photo.url}"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               data-id="${photo.id}"
//               src="${photo.url}"
//               alt="Gallery image 2"
//               class="gallery__img"
//             />
//           </a>
//         </figure>
//         <figure class="gallery_item gallery_item--3">
//           <a href="#">
//             <i class="far fa-trash-alt gallery_item--icon"></i>
//           </a>
//           <a
//              data-id="${photo.id}"
//             href="${photo.url}"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               data-id="${photo.id}"
//               src="${photo.url}"
//               alt="Gallery image 3"
//               class="gallery__img"
//             />
//           </a>
//         </figure>
//         <figure class="gallery_item gallery_item--4">
//           <a href="#">
//             <i class="far fa-trash-alt gallery_item--icon"></i>
//           </a>
//           <a
//             data-id="${photo.id}"
//             href="${photo.url}"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//                data-id="${photo.id}"
//               src="${photo.url}"
//               alt="Gallery image 4"
//               class="gallery__img"
//             />
//           </a>
//         </figure>
//         <figure class="gallery_item gallery_item--5">
//           <a href="#">
//             <i class="far fa-trash-alt gallery_item--icon"></i>
//           </a>
//           <a
//              data-id="${photo.id}"
//             href="${photo.url}"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               data-id="${photo.id}"
//               src="${photo.url}"
//               alt="Gallery image 5"
//               class="gallery__img"
//             />
//           </a>
//         </figure>
//         <figure class="gallery_item gallery_item--6">
//           <a href="#">
//             <i class="far fa-trash-alt gallery_item--icon"></i>
//           </a>
//           <a
//             data-id="${photo.id}"
//             href="${photo.url}"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               data-id="${photo.id}"
//               src="${photo.url}"
//               alt="Gallery image 6"
//               class="gallery__img"
//             />
//           </a>
//         </figure>
//         <figure class="gallery_item gallery_item--7">
//           <a href="#">
//             <i class="far fa-trash-alt gallery_item--icon"></i>
//           </a>
//           <a
//            data-id="${photo.id}"
//             href="${photo.url}"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               data-id="${photo.id}"
//               src="${photo.url}"
//               alt="Gallery image 7"
//               class="gallery__img"
//             />
//           </a>
//         </figure>
//         <figure class="gallery_item gallery_item--8">
//           <a href="#">
//             <i class="far fa-trash-alt gallery_item--icon"></i>
//           </a>
//           <a
//             data-id="${photo.id}"
//             href="${photo.url}"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//                data-id="${photo.id}"
//               src="${photo.url}"
//               alt="Gallery image 8"
//               class="gallery__img"
//             />
//           </a>
//         </figure>
