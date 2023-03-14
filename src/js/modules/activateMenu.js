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

        function removeActiveClass(...links) {
            links.forEach(item => {
                item.classList.remove('active')
            })
        }
        removeActiveClass(...menuLinks, ...menuSocialLinks);
    }



    hamburger.addEventListener('click', function () {

        const menuFirstList = document.querySelector('.menu__first').querySelectorAll('.menu__link'),
            menuSecondList = document.querySelector('.menu__second').querySelectorAll('.menu__link'),
            menuThirdList = document.querySelector('.menu__bottom').querySelectorAll('.menu__social-link');

        let item = 0, item2 = 0, item3 = 0;

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
    closeBtn.forEach(item => item.addEventListener('click', menuToggle))
}

export default activateMenu;