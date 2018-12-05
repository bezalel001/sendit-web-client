import { elements } from './views/base';
import App from './index';

/* global window: true */
window.onload = () => {
  new App().initPage();
};
