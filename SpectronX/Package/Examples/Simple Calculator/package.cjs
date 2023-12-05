const fNote = () => {
    return app.author + "<br> Spectron Developer <br> &copy; Copyright " + app.copyright + ".";
}; const cRight = new Date().getFullYear();

// Package/App Data
// App root
const app = {
    name : "Simple Calculator",

    author : "Ronaldo Excellent",

    logo : document.querySelector('application').getAttribute('logo'),

    theme : "magenta",

    mode : "",

    projectStart : "5th December, 2023. 3:22PM",

    projectEnd : "",

    copyright : cRight,

    footnote : fNote
};

// App Components
const elements = [];

const components = {};