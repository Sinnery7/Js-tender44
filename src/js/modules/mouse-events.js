export const preventClickDefault = () => {
    $('a.hamburger, a.services-item, a.card__prices-item, a.case-item').on('click', (e) => e.preventDefault());
};
