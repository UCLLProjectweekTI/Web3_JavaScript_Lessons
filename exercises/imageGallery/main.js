/**
 * Sets the source attribute of the displayed image to the image where user has clicked on
 */
function setSource(evt) {
    let crtImage = evt.target.getAttribute("src");
    let displayedImage = document.querySelector('.displayed-img');
    displayedImage.setAttribute("src", crtImage);
}

/**
 * Creates bar with thumbnails
 * and adds click event to each thumbnail
 */
function createThumbBar() {
    let nbOfImages = 5;
    for (let i = 1; i <= nbOfImages; i++) {
        let thumbBar = document.querySelector('.thumb-bar');
        let newImage = document.createElement('img');
        newImage.setAttribute('src', "images/pic" + i + ".jpg");
        thumbBar.appendChild(newImage);
        newImage.addEventListener("click", setSource, false);
    }
}


/** Wires up the Darken/Lighten button
 */
function changeButton() {
    let overlay = document.querySelector('.overlay');
    let btn = event.target;
    switch (btn.getAttribute('class')) {
        case 'dark':
            btn.setAttribute('class', 'light');
            overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
            break;
        default:
            btn.setAttribute('class', 'dark');
            overlay.style.backgroundColor = "rgba(0,0,0,0)";
            break;
    }
}


window.addEventListener("load", function () {
    createThumbBar();
    document.querySelector('button').addEventListener("click", changeButton, false);
}, false);
