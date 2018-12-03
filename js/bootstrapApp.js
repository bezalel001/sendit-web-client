import { elements } from './views/base'
import App from './index';



window.onload = () => {
  
  new App(elements.mainContent).initPage();
}