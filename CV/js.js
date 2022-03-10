window.onscroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    document.querySelector(
        ".scroller"
    ).style.background = `linear-gradient(to bottom, #ffff ${scrollPercentRounded}%, #0000 ${scrollPercentRounded}%)`;


    document.getElementById("bW").style.width = "300px";

    /*if (scrollPercentRounded >= scrollPercentRounded - 1) {
        document.getElementById('bH').style.width = "90%"
    }*/

}

function watHeyo(i) {
    document.getElementById(i).innerHTML = "Heyo";
}

function getElmt(i) {
    var elmt = document.getElementById(i);
    elmt.scrollIntoView();
}


/*window.onscroll = function() { myFunction() };


function myFunction() {
    document.getElementById('bH').addEventListener("onscroll", onscroll)
    document.getElementById('bH').addEventListener(scroll)
    document.getElementById('bH').style.width = "350%";
}*/



function changeWidth(i) {

    document.getElementById(i).addEventListener("mouseover", mouseOver);
    document.getElementById(i).addEventListener("mouseout", mouseOut);

    function mouseOver() {
        document.getElementById(i).style.width = "350%";
    }

    function mouseOut() {
        document.getElementById(i).style.width = "300%";
    }

}