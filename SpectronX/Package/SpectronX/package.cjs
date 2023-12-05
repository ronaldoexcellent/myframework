const fNote = () => {
    return app.author + "<br> Spectron Developer <br> &copy; Copyright " + app.copyright + ".";
}; const cRight = new Date().getFullYear();

// Package/App Data
// App root
const app = {
    name : "",

    author : "",

    logo : document.querySelector('application').getAttribute('logo'),

    theme : "",

    mode : "",

    projectStart : "",

    projectEnd : "",

    copyright : cRight,

    footnote : fNote
};

// App Components
const elements = [];

const components = {};