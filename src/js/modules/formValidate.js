const formValidate = (form) => {
    $(form).validate({
        highlight: function(element, errorClass) {
            $(element).add($(element).parent()).addClass("invalidElem");
        },
        unhighlight: function(element, errorClass) {
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
        errorPlacement: function(error,element) {
            return true;
        }
    });
}

export default formValidate;