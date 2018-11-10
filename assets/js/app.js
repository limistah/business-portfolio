// alert('We are here');

var app = {
    mainNav: $('nav#main'),
    masthaed: $('#masthead'),
    menuToggle: $('#menuToggle'),
    uiSidebar: $('.ui.vertical.menu.sidebar')
    
}

app.masthaed.visibility({
    onBottomPassed: function () {
        if (!app.mainNav.hasClass('nav-background'))
            app.mainNav.addClass('nav-background');
    },
    onPassing: function () {
        if (app.mainNav.hasClass('nav-background'))
            app.mainNav.removeClass('nav-background');
    },
    continuous: true
});


app.menuToggle.click(function(evt) {
    app.uiSidebar.sidebar('toggle');
    // console.log(sidebar);
});



