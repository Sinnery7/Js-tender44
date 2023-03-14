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
            handleFadeInHeader()
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
    })


}

export default headerInit;