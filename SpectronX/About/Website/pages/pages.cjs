importStylesheets(["../css/root.css", "pages.css"]);
pushAfter($('title'), ` - ${localStorage.getItem('page')}`);

attrib($('header menubtn'), 'class', 'fa fa-bars s-left s-black s-button s-ripple');

// Animate App Name
typewrite($('header span'), html($('header span')), null, "true", 500, null);

// Menu Btn
click($('menubtn'), () => $('nav').style.height = '60%');

// Close Menu
click($('.clsmenu'), () => $('nav').style.height = '0');

// TRansparent Btn
function defaultTransparency() {
    $$('nav .th-btns button')[2].style.background = "rgba(0, 180, 180, 0.4)";
}

// nav Themes
click($('.nav-dark-theme'), () => {
    css($('nav'), "background: black; color: white;"); defaultTransparency();
});
    
click($('.nav-light-theme'), () => {
    css($('nav'), "background: white; color: black;"); defaultTransparency();
});

click($('.nav-transparent-theme'), () => {
    css($('nav'), "background: none; color: yellow; font -weight: 700");
    $$('nav .th-btns button')[2].style.background = "rgba(223, 223, 223, 0.1)"; defaultTransparency();
});

// Nav Section
$pLink = $$('.pagelink');
// Validate Home Link
click($pLink[0], () => window.location = '../index.html');
// Validate Other Links & Load Pages
click($pLink[1], () => loadContent(() => {
    window.location = 'features.html';
    localStorage.setItem('page', 'Features');
}));
click($pLink[2], () => loadContent(() => {
    window.location = 'about.html';
    localStorage.setItem('page', 'About');
}));
click($pLink[3], () => loadContent(() => {
    window.location = 'contacts.html';
    localStorage.setItem('page', 'Contacts');
}));
click($pLink[4], () => loadContent(() => {
    window.location = 'support.html';
    localStorage.setItem('page', 'Support Page');
}));
click($pLink[5], () => loadContent(() => {
    window.location = '../files/downloads/SpectronX.zip';
    localStorage.setItem('page', 'Downloading...');
}));
// Animate slides
loopX($$('slideshow img'), () => addClass(i, randomize(['s-animate-top', 's-animate-bottom', 's-animate-left', 's-animate-right'])));
loopX($$('sSlideshow img'), () => addClass(i, randomize(['s-animate-top', 's-animate-bottom', 's-animate-left', 's-animate-right'])));
animate($('slideshow'), 'automatic', 4000, null, null, $$('.sH'));
animate($('slideshowMob'), 'automatic', 400);
animate($('sSlideshow'), 'automatic', 4000, null, null, $$('sSHandle div span'));
// Footer links
loopX($$('footer a'), () => {
    css(i, "text-decoration:none"), addClasses(i, ["s-xlarge", "s-padding-left", "s-hover-text-blue"]);
});