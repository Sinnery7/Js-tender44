/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mouse_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mouse-events */ "./src/js/modules/mouse-events.js");
/* harmony import */ var _modules_headerInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/headerInit */ "./src/js/modules/headerInit.js");
/* harmony import */ var _modules_createNavigations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createNavigations */ "./src/js/modules/createNavigations.js");
/* harmony import */ var _modules_initMicromodal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/initMicromodal */ "./src/js/modules/initMicromodal.js");
/* harmony import */ var _modules_activateMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/activateMenu */ "./src/js/modules/activateMenu.js");
/* harmony import */ var _modules_createTabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/createTabs */ "./src/js/modules/createTabs.js");
/* harmony import */ var _modules_banTextareaSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/banTextareaSize */ "./src/js/modules/banTextareaSize.js");
/* harmony import */ var _modules_formValidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/formValidate */ "./src/js/modules/formValidate.js");
/* harmony import */ var _modules_checkPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/checkPhone */ "./src/js/modules/checkPhone.js");
/* harmony import */ var _modules_formSubmit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/formSubmit */ "./src/js/modules/formSubmit.js");










document.addEventListener("DOMContentLoaded", function () {
  Object(_modules_mouse_events__WEBPACK_IMPORTED_MODULE_0__["preventClickDefault"])();
  Object(_modules_headerInit__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_createNavigations__WEBPACK_IMPORTED_MODULE_2__["default"])('.header__item');
  Object(_modules_createNavigations__WEBPACK_IMPORTED_MODULE_2__["default"])('.menu-navigation', 300);
  Object(_modules_initMicromodal__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_activateMenu__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_banTextareaSize__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_checkPhone__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_modules_formValidate__WEBPACK_IMPORTED_MODULE_7__["default"])('#consultation-form');
  Object(_modules_formSubmit__WEBPACK_IMPORTED_MODULE_9__["default"])('#consultation-form');
  Object(_modules_createTabs__WEBPACK_IMPORTED_MODULE_5__["default"])('.services__tab-btn', ".services__content", ".services__tabs", "services__tab_active");
  new WOW().init();
});

/***/ }),

/***/ "./src/js/modules/activateMenu.js":
/*!****************************************!*\
  !*** ./src/js/modules/activateMenu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const activateMenu = () => {
  const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger');
  let Interval, Interval2, Interval3;
  function menuToggle() {
    let arrClasses = ['.header__menu', '.header__phone', '.hamburger', '.menu'];
    arrClasses.forEach(item => document.querySelector(item).classList.toggle('active'));
    document.body.classList.toggle('modal-show');
    if (menu.classList.contains('active')) {
      document.body.style.paddingRight = getComputedStyle(document.querySelector('.scroll-fix')).width;
    } else {
      document.body.style.paddingRight = '0px';
    }
  }
  function removeAllActive() {
    let menuLinks = document.querySelectorAll('.menu__link.active'),
      menuSocialLinks = document.querySelectorAll('.menu__social-link.active');
    function removeActiveClass() {
      for (var _len = arguments.length, links = new Array(_len), _key = 0; _key < _len; _key++) {
        links[_key] = arguments[_key];
      }
      links.forEach(item => {
        item.classList.remove('active');
      });
    }
    removeActiveClass(...menuLinks, ...menuSocialLinks);
  }
  hamburger.addEventListener('click', function () {
    const menuFirstList = document.querySelector('.menu__first').querySelectorAll('.menu__link'),
      menuSecondList = document.querySelector('.menu__second').querySelectorAll('.menu__link'),
      menuThirdList = document.querySelector('.menu__bottom').querySelectorAll('.menu__social-link');
    let item = 0,
      item2 = 0,
      item3 = 0;
    clearInterval(Interval);
    clearInterval(Interval2);
    clearInterval(Interval3);
    removeAllActive();
    function triggerInterval(menuList, intervalObj, item) {
      menuList[item].classList.add('active');
      if (item >= menuList.length) {
        clearInterval(intervalObj);
      } else if (!menu.classList.contains('active')) {
        clearInterval(intervalObj);
      }
    }
    Interval = setInterval(function () {
      triggerInterval(menuFirstList, Interval, item);
      item++;
    }, 200);
    Interval2 = setInterval(function () {
      triggerInterval(menuSecondList, Interval2, item2);
      item2++;
    }, 200);
    Interval3 = setInterval(function () {
      triggerInterval(menuThirdList, Interval3, item3);
      item3++;
    }, 200);
  });
  let closeBtn = document.querySelectorAll('.menu-close');
  closeBtn.forEach(item => item.addEventListener('click', menuToggle));
};
/* harmony default export */ __webpack_exports__["default"] = (activateMenu);

/***/ }),

/***/ "./src/js/modules/banTextareaSize.js":
/*!*******************************************!*\
  !*** ./src/js/modules/banTextareaSize.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const banTextareaSize = () => {
  $('textarea').each(function () {
    autosize(this);
  }).on('autosize:resized', function () {
    console.log('textarea height updated');
  });
};
/* harmony default export */ __webpack_exports__["default"] = (banTextareaSize);

/***/ }),

/***/ "./src/js/modules/checkPhone.js":
/*!**************************************!*\
  !*** ./src/js/modules/checkPhone.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkPhone = () => {
  //маска ввода телефона
  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $('input[name=phone]').click(function () {
    $(this).setCursorPosition(4);
  }).mask("+7 (999) 999-99-99");
  $('.feed-form__field-input').focus(function () {
    $(this).parent().addClass('feed-form__field-active');
  }).blur(function () {
    if (!$(this).val()) {
      $(this).parent().removeClass('feed-form__field-active');
    } else {
      return;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkPhone);

/***/ }),

/***/ "./src/js/modules/createNavigations.js":
/*!*********************************************!*\
  !*** ./src/js/modules/createNavigations.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createNavigations = (link, timeout) => {
  const linksList = document.querySelectorAll(link);
  linksList.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href'),
        hrefItem = document.querySelector(`${id}`),
        blockValue = hrefItem.getBoundingClientRect().top + scrollY;
      function scrollTo() {
        window.scrollTo({
          top: blockValue,
          behavior: "smooth"
        });
      }
      if (timeout) {
        setTimeout(() => {
          scrollTo();
        }, timeout);
      } else {
        scrollTo();
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (createNavigations);

/***/ }),

/***/ "./src/js/modules/createTabs.js":
/*!**************************************!*\
  !*** ./src/js/modules/createTabs.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createTabs = (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) => {
  // Tabs

  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);
  function hideTabContent() {
    tabsContent.forEach(item => item.classList.remove('active'));
    tabs.forEach(item => item.parentNode.classList.remove(activeClass));
  }
  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add('active');
    tabs[i].parentNode.classList.add(activeClass);
    activateTab(i);
  }

  // Запускает появление каждого item внутри активного tabContent через интервал
  function activateTab(i) {
    let id = document.querySelector(`#tabLink${i + 1}`).getAttribute("data-tab"),
      currentTabItems = document.querySelector(id).querySelectorAll(`.services-item`);
    clearInterval(staggerInterval);
    removeAllActiveTabs(currentTabItems);
    item = 0;
    staggerInterval = setInterval(function () {
      currentTabItems[item].classList.add('active');
      item++;
      if (item >= currentTabItems.length) clearInterval(staggerInterval);
    }, 200);
  }
  let staggerInterval,
    item = 0;
  const removeAllActiveTabs = function removeAllActivetabs(currentTabItems) {
    currentTabItems.forEach(item => item.classList.remove('active'));
  };
  tabsParent.addEventListener('click', event => {
    if (event.target && event.target.classList.contains(tabsSelector.slice(1))) {
      event.preventDefault();
      if (!event.target.parentNode.classList.contains(activeClass)) {
        tabs.forEach((item, i) => {
          if (event.target === item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    }
  });
  hideTabContent();
  showTabContent();
};
/* harmony default export */ __webpack_exports__["default"] = (createTabs);

/***/ }),

/***/ "./src/js/modules/formSubmit.js":
/*!**************************************!*\
  !*** ./src/js/modules/formSubmit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const formSubmit = form => {
  $(form).submit(function (e) {
    e.preventDefault();
    if (!$(this).valid()) {
      return;
    }
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input , textarea").val("");
      $('.feed-form__field').removeClass('feed-form__field-active');
      $('form').trigger('reset');
      $('.form__wrapper').fadeOut('slow');
      setTimeout(() => {
        $('.form__messages').fadeIn('slow');
        setTimeout(() => {
          $(".form.is-open").removeClass('is-open').attr('aria-hidden', 'true');
          $('.form__messages').attr("style", "display:none");
          $('.form__wrapper').attr("style", "display:block");
        }, 2500);
      }, 550); // не трогать вложенность
    });

    return false;
  });
};
/* harmony default export */ __webpack_exports__["default"] = (formSubmit);

/***/ }),

/***/ "./src/js/modules/formValidate.js":
/*!****************************************!*\
  !*** ./src/js/modules/formValidate.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const formValidate = form => {
  $(form).validate({
    highlight: function (element, errorClass) {
      $(element).add($(element).parent()).addClass("invalidElem");
    },
    unhighlight: function (element, errorClass) {
      $(element).add($(element).parent()).removeClass("invalidElem");
    },
    errorElement: "div",
    errorClass: "errorMsg",
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 40
      },
      phone: "required",
      comment: {
        maxlength: 89
      },
      checkbox: "required"
    },
    errorPlacement: function (error, element) {
      return true;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (formValidate);

/***/ }),

/***/ "./src/js/modules/headerInit.js":
/*!**************************************!*\
  !*** ./src/js/modules/headerInit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const headerInit = () => {
  const thresholdShow = 400,
    animationFadeInTime = 200,
    animationFadeOutTime = 150,
    header = document.querySelector('#header');

  // fade in logic
  // remove animation class after ends

  const handleFadeInHeader = function handleFadeInHeader() {
    header.classList.add('header-sticky');
    header.classList.add('animation-fade-in');
    setTimeout(function () {
      header.classList.remove('animation-fade-in');
    }, animationFadeInTime);
  };

  // fade out logic
  // remove animation class after ends and remove sticky

  const handleFadeOutLogic = function handleFadeOutLogic() {
    header.classList.add('animation-fade-out');
    setTimeout(function () {
      header.classList.remove('header-sticky');
      header.classList.remove('animation-fade-out');
    }, animationFadeOutTime);
  };
  const handleClearHeaderClasses = function handleClearHeaderClasses() {
    header.classList.remove('header-sticky');
    header.classList.remove('animation-fade-out');
  };
  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    //  to prevent multiple addClass oparations

    const checkHeaderStickyClass = document.querySelector('#header').classList.contains('header-sticky');
    //   show
    if (currentScrollPosition > thresholdShow && !checkHeaderStickyClass) {
      handleFadeInHeader();
      return;
    }
    //   hide
    if (currentScrollPosition < thresholdShow && checkHeaderStickyClass) {
      handleFadeOutLogic();
    }
    //   insta clear
    if (currentScrollPosition < thresholdShow / 3 && checkHeaderStickyClass) {
      handleClearHeaderClasses();
      return;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (headerInit);

/***/ }),

/***/ "./src/js/modules/initMicromodal.js":
/*!******************************************!*\
  !*** ./src/js/modules/initMicromodal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initMicromodal = () => {
  const cardItem = document.querySelectorAll('.card__prices-item');
  cardItem.forEach(card => {
    card.addEventListener('click', () => {
      const servicesItemsOpen = document.querySelectorAll('.services__model.is-open');
      servicesItemsOpen.forEach(item => {
        item.classList.remove('is-open');
        item.setAttribute('aria-hidden', 'true');
      });
    });
  });
  try {
    MicroModal.init({
      disableFocus: true,
      awaitCloseAnimation: true // set to false, to remove close animation
    });
  } catch (e) {
    console.log("micromodal error: ", e);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (initMicromodal);

/***/ }),

/***/ "./src/js/modules/mouse-events.js":
/*!****************************************!*\
  !*** ./src/js/modules/mouse-events.js ***!
  \****************************************/
/*! exports provided: preventClickDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventClickDefault", function() { return preventClickDefault; });
const preventClickDefault = () => {
  $('a.hamburger, a.services-item, a.card__prices-item, a.case-item').on('click', e => e.preventDefault());
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map