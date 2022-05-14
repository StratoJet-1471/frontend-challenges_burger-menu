$(document).ready(() => {
    $('.header__burger').click((event) => {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock'); //Чтобы при открытом бурегре контент, который он собой закрывает, не скроллился.
    });
});
