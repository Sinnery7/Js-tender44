const formSubmit = (form) => {
    $(form).submit(function(e) {
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
            }, 550);  // не трогать вложенность
        });
        return false;
    });
}

export default formSubmit;