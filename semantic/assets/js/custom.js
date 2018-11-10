$('footer .ui.accordion').accordion();
$('.menu #servicesLink')
    .popup({
        inline: true,
        hoverable: true,
        position: 'bottom center',
        delay: {
            show: 300,
            hide: 800
        }
    });

var app = {
    mainNav: $('nav#main'),
    masthaed: $('#masthead'),
    menuToggle: $('#menuToggle'),
    uiSidebar: $('.ui.vertical.menu.sidebar')

}

app.masthaed.visibility({
    onBottomPassed: function() {
        console.log("Test");
        if (!app.mainNav.hasClass('nav-background'))
            app.mainNav.addClass('nav-background');
    },
    onPassing: function() {
        console.log("Test");


        if (app.mainNav.hasClass('nav-background'))
            app.mainNav.removeClass('nav-background');
    },
    continuous: true
});


app.menuToggle.click(function(evt) {
    app.uiSidebar.sidebar('toggle');
    // console.log(sidebar);
});