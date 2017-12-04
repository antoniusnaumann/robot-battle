jQuery(function ($) {
    var boxHeight = $('#profile-description').height();
    $('img').css('height', boxHeight + 'px');
});

jQuery(function ($) {
    var headerHeight = parseInt($('#profile-header').height()) + parseInt($('#profile-header').css('margin-bottom'));
    $('#profile-image').css('padding-top', headerHeight + 'px');
});


var timer = false;
$(window).resize(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        console.log('resized');
        jQuery(function ($) {
            var boxHeight = $('#profile-description').height();
            $('img').css('height', boxHeight + 'px');
        });

        jQuery(function ($) {
            var headerHeight = parseInt($('#profile-header').height()) + parseInt($('#profile-header').css('margin-bottom'));
            $('#profile-image').css('padding-top', headerHeight + 'px');
        });
    }, 200);
});