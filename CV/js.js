window.onscroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    document.querySelector(
        ".scroller"
    ).style.background = `linear-gradient(to bottom, #ffff ${scrollPercentRounded}%, #0000 ${scrollPercentRounded}%)`;
}

function myHeyo(i) {
    document.getElementById(i).innerHTML = "Heyo";
}

function getElmt(i) {
    var elmt = document.getElementById(i);
    elmt.scrollIntoView();
}

function changeButtonWidth(i) {
    
    document.getElementById(i).addEventListener("mouseover", mouseOver);
    document.getElementById(i).addEventListener("mouseout", mouseOut)

    function mouseOver() {
        document.getElementById(i).style.width = "350%";        
    }

    function mouseOut() {
        document.getElementById(i).style.width = "300%";
    }
           
}