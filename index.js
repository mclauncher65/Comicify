window.onload = function(ev) {
    const elements = document.body.getElementsByTagName("*");

    for (const [i,element] of Object.entries(elements)) {
        element.style.fontFamily = 'Comic Sans MS'
    }
}

function comic() {
    const elements = document.body.getElementsByTagName("*");

    for (const [i,element] of Object.entries(elements)) {
        element.style.fontFamily = 'Comic Sans MS'
    }
}

setInterval(comic, 1*60)