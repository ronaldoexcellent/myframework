// Samples

// Button Component
loopX($$('myBtn'), () => {
    widgets.construct('button');
    click(widget, () => alert('hello'));
    render(i, widget);
});