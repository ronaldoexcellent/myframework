importStylesheets(["css/root.css"]);
//app.extends2D();
const canvas = document.createElement('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
css($('layout'), "cursor:pointer");
const ctx = canvas.getContext('2d');

// is the mouse being dragged (clicked down)?
let isDragging = false;

// last positions used to calculated speed
//  and thickness of stroke
let lastPosX = null;
let lastPosY = null;

tplclick($('layout'), () => alert('2D Context Rendered!'));
function $activeObj(evt) {
    loopX($$('layout *'), () => scale(i, 1));
    scale(evt.target, 1.5);
}
loopX($$('layout *'), () => {
    attrib(i, 'contentEditable', true);
    attrib(i, 'draggable', true);
    click(i, () => $activeObj(event));
});
alert($('layout').BoundingClientRect().height);
mousemove($('layout'), () => rotateX($('layout'), `${$('layout').BoundingClientRect().height}deg`));
/*
function rotationStart(event: MouseEvent) {
   currentDegree = getCurrentRotation(element);
   center = {x: event.pageX, y: event.pageY}
}

function rotation(event: MouseEvent) {
   let radians = Math.atan2(event.pageX - center.x, event.pageY - center.y);

  if (radians > 0) {
    ++currentDegree;
  } else {
    --currentDegree;
  } 

  el.style.transform = `rotate(${currentDegree}deg)`;
  center = {x: pageX, y: pageY};
}

*/
const onStart = evt => {
    evt.preventDefault();
    if (evt.touches) {
        evt = evt.touches[0];
    }
    isDragging = true;
    lastPosX = evt.clientX;
    lastPosY = evt.clientY;
};

const onEnd = evt => {
    evt.preventDefault();
    if (evt.touches) {
        evt = evt.touches[0];
    }
    isDragging = false;
    lastPosX = null;
    lastPosY = null;
};

const onMove = evt => {
    evt.preventDefault();
    if (evt.touches) {
        evt = evt.touches[0];
    }
    if (!isDragging) {
        return;
    }

    const xPos = evt.clientX;
    const yPos = evt.clientY;
    const xDif = xPos - lastPosX;
    const yDif = yPos - lastPosY;

    // radius of stroke is calculated based on speed
    let speed = Math.sqrt((xDif * xDif) + (yDif * yDif));
    if (speed > 20) {
        speed = 20;
    }

    ctx.beginPath();
    ctx.arc(xPos, yPos, speed, 0, 2 * Math.PI);
    ctx.fill();

    lastPosX = xPos;
    lastPosY = yPos;
};
/*
const onStart = evt => {
    evt.preventDefault();
    if (evt.touches) {
        evt = evt.touches[0];
    }
    isDragging = true;

    // if ctrlKey is pressed, we erase (with white)
    ctx.fillStyle = evt.ctrlKey ? '#fff' : '#000';
    lastPosX = evt.clientX;
    lastPosY = evt.clientY;
}

const onEnd = evt => {
    evt.preventDefault();
    if (evt.touches) {
        evt = evt.touches[0];
    }
    isDragging = false;
    lastPosX = null;
    lastPosY = null;
}

const onMove = evt => {
    evt.preventDefault();
    if (evt.touches) {
        evt = evt.touches[0];
    }
    if (!isDragging) {
        return;
    }

    const xPos = evt.clientX;
    const yPos = evt.clientY;
    const xDif = xPos - lastPosX;
    const yDif = yPos - lastPosY;

    // radius of stroke is calculated based on speed
    let speed = Math.sqrt((xDif * xDif) + (yDif * yDif));
    if (speed > 20) {
        speed = 20;
    }

    ctx.beginPath();
    ctx.arc(xPos, yPos, speed, 0, 2 * Math.PI);
    ctx.fill();

    lastPosX = xPos;
    lastPosY = yPos;
}

$('layout').addEventListener('mousedown', onStart);
$('layout').addEventListener('touchstart', onStart);

$('layout').addEventListener('mouseup', onEnd);
$('layout').addEventListener('touchend', onEnd);

$('layout').addEventListener('mousemove', onMove);
$('layout').addEventListener('touchmove', onMove);

// some browsers pop up the right-click context menu
//  when ctrlKey is pressed with a mouse click. This disables
//  such behavior.
$('layout').addEventListener('contextmenu', evt => {
    evt.preventDefault();
    return false;
});

document.body.style.margin = '0';
render($('layout'), canvas);*/