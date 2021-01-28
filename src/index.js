'use strict';

import { initModal } from './scripts/modal';
import { getPhotos } from './scripts/server_methods';
import { ui } from './scripts/ui';

import './main.scss';

const app = {
  loadPhotos: function () {
    document.addEventListener('DOMContentLoaded', getPhotos);
  },

  /* get photos */
  initPhotos: function () {
    const thisApp = this;

    getPhotos()
      .then((data) => {
        thisApp.ui = ui.showPhotos(data);
        console.log(data, 'photos');
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  },
  /* app init */
  init: function () {
    console.log('*** App starting ***');
    initModal();
    this.loadPhotos();
    this.initPhotos();
  },
};

app.init();
