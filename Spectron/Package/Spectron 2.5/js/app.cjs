// Test Connection JavaScript Compatibility [Remove if you no longer need]...

/* Try running these
    alert($('layout').parentElement.nodeName);
    alert(`Welcome To ${app.name}. Created by ${app.author}. Copyright ${app.copyright}.`);
    alert(d.fullDate());
*/
importStylesheets(["css/root.css"]);

app.state = (state) => {
    var destroy = () => layout.destroy();
    var hd = "<div class='s-top'><h1 class='app_state s-center s-animate-bottom' style='user-select:none'>";
    var reprint = () => setTimeout(()=> typewrite($('.app_state'), html(($('.app_state'))), null, 'true', 300), 9000);

    const $states = {
        maintenance : `${hd}This website is under maintenance.</h1>`,

        "repair" : `${hd}This website is under repair.</h1><div class="s-content s-center" style="height: 100%"><img style="width: 100%" src="states/images/repair.jpg"></div></div>`,

        upgrade : `${hd}This website is undergoing an upgrade.</h1>`,

        "development" : `${hd}This website is under development.</h1>`,

        shutdown : () => {
            return `${hd}This website has been temporarily shutdown!</h1>`
        }
    };

    var sum = (s) => {destroy(), html($('layout'), $states[s]), reprint()};

    switch (state) {
        case "maintenance":
            sum('maintenance');
            break;
        case "repair":
            sum('repair');
            break;
        case "upgrade":
            sum('upgrade');
            break;
        case "development":
            sum('development');
            break;
        case "shutdown":
            destroy();
            html($('layout'), $states.shutdown());
            reprint();
            break;
        default:
            destroy();
    }
};

shuffleWithin($$('h2'), html($('h1')));

app.state('repair');
//loopX($$('h2'), () => html(i, shuffle(html($('h1')))));