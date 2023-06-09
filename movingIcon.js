const movingIcon = document.getElementById('movingIcon');
let xPosition = 0;
let yPosition = 0;
let xSpeed = 0.5;
let ySpeed = 0.4;

function moveIcon() {
    xPosition += xSpeed;
    yPosition += ySpeed;

    if (xPosition + movingIcon.clientWidth > document.documentElement.clientWidth || xPosition < 0) {
        xSpeed = -xSpeed;
    }

    if (yPosition + movingIcon.clientHeight > document.documentElement.clientHeight || yPosition < 0) {
        ySpeed = -ySpeed;
    }

    movingIcon.style.left = xPosition + 'px';
    movingIcon.style.top = yPosition + 'px';

    requestAnimationFrame(moveIcon);
}

moveIcon();