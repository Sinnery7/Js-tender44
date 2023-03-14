import {preventClickDefault} from "./modules/mouse-events";
import headerInit from './modules/headerInit';
import createNavigations from "./modules/createNavigations";
import initMicromodal from "./modules/initMicromodal";
import activateMenu from "./modules/activateMenu";
import createTabs from "./modules/createTabs";
import banTextareaSize from "./modules/banTextareaSize";
import formValidate from "./modules/formValidate";
import checkPhone from "./modules/checkPhone";
import formSubmit from "./modules/formSubmit";

document.addEventListener("DOMContentLoaded", function() {
    preventClickDefault();
    headerInit();
    createNavigations('.header__item');
    createNavigations('.menu-navigation', 300);
    initMicromodal();
    activateMenu();
    banTextareaSize();
    checkPhone();
    formValidate('#consultation-form');
    formSubmit('#consultation-form');
    createTabs('.services__tab-btn', ".services__content",".services__tabs", "services__tab_active");

    new WOW().init();
});

