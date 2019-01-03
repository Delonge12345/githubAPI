$(document).ready(function(){
    let touch = $('.touch-menu');
    
    let menu = $('nav');

$(touch).on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('touch-menu_active');
    $(this).toggleClass('line-vert');
    
    menu.slideToggle();
});
$(window).resize(function() {
    let wid = $(window).width();
    if(wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    
    });
});

