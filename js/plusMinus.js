$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).parent('.panel').find('.iconMinus').show();
    $(this).parent('.panel').find('.iconPlus').hide();
})

$('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).parent('.panel').find('.iconMinus').hide();
    $(this).parent('.panel').find('.iconPlus').show();
})