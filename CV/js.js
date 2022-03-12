window.onscroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    document.querySelector(
        ".scroller"
    ).style.background = `linear-gradient(to bottom, #000 ${scrollPercentRounded}%, #0000 ${scrollPercentRounded}%)`;

}

function watHeyo(i) {
    document.getElementById(i).innerHTML = "Heyo";
}

function getElmt(i) {
    const elmt = document.getElementById(i);
    elmt.scrollIntoView();
}


{
    let cursor = document.querySelector('#cursors');
    const onMouseMove = (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    }
    document.addEventListener('mousemove', onMouseMove);
}





/*function changeWidth(i) { SO SMART BUT NO 

    let elmt = document.getElementById(i);
    
    elmt.addEventListener("mouseover", mouseOver);
    elmt.addEventListener("mouseout", mouseOut);

    function mouseOver() {
        elmt.style.width = "350%";
    }
    function mouseOut() {
        elmt.style.width = "300%";
    }
}*/