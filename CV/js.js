window.onscroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    document.querySelector(
        ".scroller"
    ).style.background = 'linear-gradient(to bottom, #ffff ${scrollPercentRounded}%, #0000 ${scrollPercentRounded}%)';
   
}

function watHeyo(i) {
    document.getElementById(i).innerHTML = "Heyo";
}

function getElmt(i) {
    const elmt = document.getElementById(i);
    elmt.scrollIntoView();
}

(function() {

    let magic = document.querySelector('.magic');
    let magicWHalf = magic.offsetWidth / 2;
  
    document.body.addEventListener('mousemove',function(e){
      magic.style.left = e.pageX - magicWHalf+'px';
      magic.style.top = e.pageY - magicWHalf+'px';
    });
  
    document.body.addEventListener('mouseout',function(e){
      //magic.style.left = 'calc(50% - 10rem)';
      //magic.style.top = 'calc(50% - 10rem)';
    });
  
})();

  
/*window.onmouseover = () => {

    document.querySelector(
        ".startText"
    ).style.opacity = '10%';

    document.querySelector(

    )
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