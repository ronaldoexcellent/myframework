//try {
    importStylesheets(["css/root.css"]);
    widgets.construct('div'), addClasses(widget, ['s-container', 's-margin-top', 's-padding', 's-content', 's-card-4', 's-round-large', 'calculator']), css(widget, 'width: 50%'), render($('layout'), widget);
    widgets.construct('div'), addClasses(widget, ['s-container', 's-padding', 's-content', 's-green', 's-xlarge', 'screen']), html(widget, '2+2'), render($('.calculator'), widget);
    $btns = ['C', 'Del', '(', ')', '7', '8', '9', '*', '4', '5', '6', '/', '1', '2', '3', '-', "0", '.', '+', '='];
    widgets.construct('div'), render($('.calculator'), widget);
    widgets.constructMultiple('button', 4), renderAll($$('.calculator div')[1], widget);
    clones($('.calculator'), $$('.calculator div')[1], 4);
    loop($$('button'), () => {
       html($$('button')[i], $btns[i - 1]), addClasses($$('button')[i], ['s-btn', 's-padding']);
    });
    function b(e) {
        rangeSelect(2, 18, () => {
            switch(html(e.currentTarget)) {
                case "C":
                    html($('.screen'), '0');
                    break;
                case "Del":
                    html($('.screen'), html($('.screen')).slice(-1, -1));
                    break;
                case $btns[i]:
                    if (html($('.screen')) != 0) {
                        pushAfter($('.screen'), html(e.currentTarget));
                    } else {
                        html($('.screen'), ''), pushAfter($('.screen'), html(e.currentTarget));
                    }
                    break;
                case "=":
                    html($('.screen'), eval(Number(html($('.screen')))));
            }
        })
    }
    loop($$('button'), () => click($$('button')[i], () => b(event)));
//}
//catch (e) {app.log(e)}
//tplclick($('body'), ()=> app.messages.show());