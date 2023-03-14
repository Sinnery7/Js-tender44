const initMicromodal = () => {
    const cardItem = document.querySelectorAll('.card__prices-item');

    cardItem.forEach(card => {
        card.addEventListener('click', () => {
            const servicesItemsOpen = document.querySelectorAll('.services__model.is-open');

            servicesItemsOpen.forEach(item => {
                item.classList.remove('is-open');
                item.setAttribute('aria-hidden', 'true');
            })
        })
    });
    try {
        MicroModal.init({
            disableFocus: true,
            awaitCloseAnimation: true,// set to false, to remove close animation
        });
    } catch (e) {
        console.log("micromodal error: ", e);
    }
}

export default initMicromodal;