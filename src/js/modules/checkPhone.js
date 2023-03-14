const checkPhone = () => {

    //маска ввода телефона
    $.fn.setCursorPosition = function(pos) {
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

    $('input[name=phone]').click(function(){
        $(this).setCursorPosition(4);
    }).mask("+7 (999) 999-99-99");


    $('.feed-form__field-input').focus(function () {
        $(this).parent().addClass('feed-form__field-active');

    }).blur(function () {
        if(!$(this).val()) {
            $(this).parent().removeClass('feed-form__field-active');
        } else {
            return;
        }
    });
}

export default checkPhone;