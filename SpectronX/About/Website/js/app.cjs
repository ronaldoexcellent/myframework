importStylesheets(["css/root.css"]);
loadApp();
// Add Logo To Homepage
attrib($('.home h1 img'), 'src', app.logo);
// Animate App Name on Hompage
typewrite($('.home h1 span'), html($('.home h1 span')), null, "true", 500, null);
// Menu Btn
click($('.menubtn'), () => $('nav').style.height = '60%');
// Close Menu
click($('.clsmenu'), () => $('nav').style.height = '0');
// TRansparent Btn
function defaultTransparency() {
    $$('nav .th-btns button')[2].style.background = "rgba(0, 180, 180, 0.4)";
}
// nav Themes
click($('.nav-dark-theme'), () => {
    css($('nav'), 'background:black; color:white'),
    $('nav span hr').style.border = "2px solid white";defaultTransparency();
}); 
click($('.nav-light-theme'), () => {
    css($('nav'), 'background:white; color:black'),
    $('nav span hr').style.border = "2px solid black";defaultTransparency();
});
click($('.nav-transparent-theme'), () => {
    css($('nav'), 'background:none; color:yellow; font-weight: 700'),
    $$('nav .th-btns button')[2].style.background = "rgba(223, 223, 223, 0.1)",
    $('nav span hr').style.border = "2px solid yellow";defaultTransparency();
});
// Nav Section
$pLink = $$('.pagelink');
// Validate Home Link
click($pLink[0], () => window.location = 'index.html');
// Validate Other Links & Load Pages
click($pLink[1], () => loadContent(() => {
    window.location = 'pages/features.html';
    localStorage.setItem('page', 'Features');
}));
click($pLink[2], () => loadContent(() => {
    window.location = 'pages/about.html';
    localStorage.setItem('page', 'About');
}));
click($pLink[3], () => loadContent(() => {
    window.location = 'pages/contacts.html';
    localStorage.setItem('page', 'Contacts');
}));
click($pLink[4], () => loadContent(() => {
    window.location = 'pages/support.html';
    localStorage.setItem('page', 'Support Page');
}));
click($pLink[5], () => loadContent(() => {
    window.location = 'files/downloads/SpectronX.zip';
    localStorage.setItem('page', 'Downloading...');
}));