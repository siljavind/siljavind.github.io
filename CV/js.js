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

function watHeyo(i) {
    document.getElementById(i).innerHTML = "Heyo";
}

function getElmt(i) {
    const elmt = document.getElementById(i);
    elmt.scrollIntoView();
}

(function() {
    var follower, init, mouseX, mouseY, positionElement, printout, timer;
  
    follower = document.getElementById('follower');
  
    printout = document.getElementById('printout');
  
    mouseX = (event) => {
      return event.clientX;
    };
  
    mouseY = (event) => {
      return event.clientY;
    };
  
    positionElement = (event) => {
        var mouse;
        mouse = {
          x: mouseX(event),
          y: mouseY(event)
        };
        follower.style.top = mouse.y + 'px';
        return follower.style.left = mouse.x + 'px';
    };
  
    timer = false;
  
    window.onmousemove = init = (event) => {
      var _event;
      _event = event;
      return timer = setTimeout(() => {
        return positionElement(_event);
      }, 1);
    };
  
  }).call(this);


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