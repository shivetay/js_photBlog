'use strict';

import { initModal } from './scripts/modal';
import { getPhotos, postPhoto, deltePhoto } from './scripts/server_methods';
import { ui } from './scripts/ui';

import './main.scss';

const app = {
  /* listen for photo load */
  loadPhotos: function () {
    document.addEventListener('DOMContentLoaded', getPhotos);
  },

  /* listen for photo delte */
  photoRemove: function () {
    document
      .querySelector('#photo')
      .addEventListener('click', this.removePhoto);
  },

  /* get photos */
  initPhotos: function () {
    const thisApp = this;

    /* get photos */
    getPhotos()
      .then((data) => {
        thisApp.ui = ui.showPhotos(data);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  },

  /* add photos */
  addPhotos: function () {
    document
      .querySelector('.add_button')
      .addEventListener('click', this.addPhoto);
  },

  /* add photo */
  addPhoto: function () {
    const thisApp = this;
    const url = document.getElementById('url').value;

    const payload = {
      url,
    };
    console.log(payload, 'payload');
    postPhoto(payload)
      .then((payload) => {
        getPhotos();
        location.reload();
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  },

  /* delte photo */
  removePhoto: function (e) {
    e.preventDefault();
    if (e.target.parentElement.classList.contains('delete')) {
      const photoId = e.target.parentElement.dataset.id;
      console.log(photoId);
      deltePhoto(photoId)
        .then(() => {
          location.reload();
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        });
    }
  },

  /* scrol top */
  moveTop: function () {
    document.querySelector('#myBtn').addEventListener('click', this.top);
  },

  top: function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },

  /* scroll init */
  initScroll: function () {
    const thisApp = this;
    thisApp.ui = ui.scrollTop();
  },

  /* app init */
  init: function () {
    console.log('*** App starting ***');
    initModal();
    this.loadPhotos();
    // this.initScroll();
    this.photoRemove();
    this.initPhotos();
    this.addPhotos();
    this.moveTop();
  },
};

app.init();
