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

function myHeyo() {
    document.getElementById("bW").innerHTML = "Munky";
}

function getElmt(i) {
    var elmt = document.getElementById(i);
    elmt.scrollIntoView();
}

function changeWidth(i){
    const allElmts = [document.getElementsByClassName(menu)]
    const otherElmts = new Array[allElmts];
    var elmt = document.getElementById(i);
    otherElmts.sort(function(otherElmts, i){return otherElmts - i});
    
    elmt.style.width = "40em";


    class Players{
        constructor(){
            this.menu = []
        }
    }
}