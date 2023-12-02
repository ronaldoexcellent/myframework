const fNote = () => {
    return app.author + "<br> SpectronX Developer <br> &copy; Copyright " + app.copyright + ".";
}; const cRight = new Date().getFullYear();

// Package/App Data
// App root
let app = {
    name : "SpectronX",

    author : "Ronaldo Excellent",

    logo : document.querySelector('application').getAttribute('logo'),

    theme : "black",

    mode : "",

    projectStart : "7th November, 2023.",

    projectEnd : "13th November, 2023 (Actually less than 6 days).",

    copyright : cRight,

    footnote : () => fNote()
};

// App Components
const elements = ['header', 'slideshowMob', 'slideshow', 'sSlideshow', 'sHandle', 'sSHandle', 'menubtn', 'nav', 'footer'];

const components = {
    header : `
        <attrib class="s-container s-top s-display-topmiddle s-content s-black s-xlarge"></attrib>
        <menubtn></menubtn>
        <span style="user-select:none" class="s-display-topmiddle">${app.name}</span>
    `,

    slideshowMob : `
        <attrib class="s-hide-large s-hide-medium"></attrib>
        <img src="../../Images/spectronx1.jpg" style="width:100%;">
        <img src="../../Images/spectronx2.jpg" style="width:100%;">
    `,

    slideshow : [
        "<attrib class='s-hide-small'></attrib>",
        '<img src="../files/images/slide1.jpg">',
        '<img src="../files/images/slide2.jpg">',
        '<img src="../files/images/slide3.jpg">'
    ],

    sSlideshow: `
        <img src="../../Images/code1.png">
        <img src="../../Images/code2.png">
        <img src="../../Images/code3.png">
        <img src="../../Images/code4.png">
    `,

    sHandle : [
        '<div class="s-center s-container s-section s-large s-text-white s-display-bottommiddle s-hide-small" style="width:100%; cursor:default;">',
        '<span class="sH s-badge s-border s-transparent" style="height:13px;width:13px;padding:0;"></span>&nbsp;',
        '<span class="sH s-badge s-border s-transparent" style="height:13px;width:13px;padding:0;"></span>&nbsp;',
        '<span class="sH s-badge s-border s-transparent" style="height:13px;width:13px;padding:0;"></span>&nbsp;',
        '</div>'
    ],

    sSHandle : `
        <div class="s-center s-container s-section s-large s-text-white s-display-bottommiddle s-hide-small" style="width:100%; cursor:default;">
            <span class="s-badge s-border s-transparent" style="height:13px;width:13px;padding:0;"></span>&nbsp;
            <span class="s-badge s-border s-transparent" style="height:13px;width:13px;padding:0;"></span>&nbsp;
            <span class="s-badge s-border s-transparent" style="height:13px;width:13px;padding:0;"></span>&nbsp;
            <span class="s-badge s-border s-transparent" style="height:13px;width:13px;padding:0;"></span>&nbsp;
        </div>
    `,

    menubtn : "<attrib class='fa fa-bars s-ripple s-button s-green s-block' style='margin-left: -16px'></attrib>",

    nav : `
        <attrib class="s-card-4 s-round-xxlarge"></attrib>
        <span class="clsmenu s-block s-center s-round-xlarge s-hover-red" style="cursor:pointer;">&times;</span>

        <div class="th-btns s-center s-margin-top s-margin-bottom">
            <b>Theme:</b> <br> <button class="nav-dark-theme fa fa-certificate s-black s-button s-hover-orange"></button>

            <button class="nav-light-theme fa fa-certificate s-white s-button s-hover-orange"></button>

            <button class="nav-transparent-theme fa fa-certificate s-button s-text-white s-hover-orange" style="text-shadow: 1px 1px 4px #000;"></button>
        </div>

        <div class="pagelink s-row s-padding s-hover-black" style="width:100%; cursor:pointer">
            <div class="s-col s-center" style="width: 15%;"> <i class="fa fa-home s-large"></i></div>
            <div class="rest" title="Go to Home"> Home </div>
        </div>

        <div class="pagelink s-row s-padding s-hover-black" style="width:100%; cursor:pointer">
            <div class="s-col s-center" style="width: 15%;"> <i class="fa fa-gear s-large"></i></div>
            <div class="rest" title="Go to Features"> Features </div>
        </div>

        <div class="pagelink s-row s-padding s-hover-black" style="width:100%; cursor:pointer">
            <div class="s-col s-center" style="width: 15%;"> <i class="fa fa-info-circle s-large"></i></div>
            <div class="rest" title="Go to About"> About </div>
        </div>

        <div class="pagelink s-row s-padding s-hover-black" style="width:100%; cursor:pointer">
            <div class="s-col s-center" style="width: 15%;"> <i class="fa fa-message s-large"></i></div>
            <div class="rest" title="Go to Contacts"> Contacts </div>
        </div>

        <div class="pagelink s-row s-padding s-hover-black" style="width:100%; cursor:pointer">
            <div class="s-col s-center" style="width: 15%;"> <i class="fa fa-donate s-large"></i></div>
            <div class="rest" title="Go to Support Page"> Support Me </div>
        </div>
        
        <hr>
    `,

    footer : `
        <attrib class="s-container s-content s-black s-large s-center s-padding"></attrib>
        Contact Me:<br>
        <div style="line-height: 2em;">
            <a href="tel:+2349114349748" class="fa fa-phone"></a>
            <a href="sms:+2349114349748" class="fa fa-envelope"></a>
            <a href="https://www.facebook.com/ronaldinhoexcellent" class="fab fa-facebook"></a>
            <a href="https://m.me/ronaldinhoexcellent" class="fab fa-facebook-messenger"></a>
            <a href="https://www.twitter.com/ronaldoexcel" class="fab fa-twitter"></a>
            <a href="https://www.instagram.com/ronaldo.excellent" class="fab fa-instagram"></a>
            <a href="https://www.linkedin.com/in/ronaldinhoexcellent1212" class="fab fa-linkedin"></a>
            <a href="https://www.github.com/ronaldoexcellent" class="fab fa-github"></a>
            <a href="mailto:ronaldinhoexcellent@gmail.com" class="fab fa-google"></a>
        </div>
        Copyright &copy; ${app.copyright}.<br>All Rights Reserved.
    `
};