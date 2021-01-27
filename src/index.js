'use strict';

import { initModal } from './scripts/modal';

import './main.scss';

const app = {
  /* app init */
  init: function () {
    console.log('*** App starting ***');
    initModal();
  },
};

app.init();
