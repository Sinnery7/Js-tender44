const createNavigations = (link, timeout) => {

    const linksList = document.querySelectorAll(link);

    linksList.forEach((item) => {
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
                }, timeout)
            } else {
                scrollTo();
            }
        })
    })
}

export default createNavigations;