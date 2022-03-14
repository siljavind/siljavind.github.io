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

const allCursorList = document.querySelectorAll("#mainCursor, .cursor");
const shadowList = document.querySelectorAll(".cursor");

for (let i = 0; i < allCursorList.length; i++) {
    document.addEventListener('mousemove', (e) => {
        allCursorList[i].style.cssText = `
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;        
    });
};

for (let i = 0; i < shadowList.length; i++) {

    document.addEventListener('mousedown', (e) => {
        shadowList[i].style.cssText = `
        width: ${shadowList[i].clientWidth + 1000}px;
        height: ${shadowList[i].clientHeight + 1000}px;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;
    });        

    document.addEventListener('mouseup', (e) => {
        shadowList[i].style.cssText = `
        width: ${shadowList[i].clientWidth - 1000}px;
        height: ${shadowList[i].clientHeight -1000}px;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;
    });
    
    document.addEventListener('mouseleave', (e) => {
        shadowList[i].style.cssText = `
        width: 100px;
        height: 100px;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `
    })

    document.addEventListener("onload", myFunction());
    function myFunction() {
        shadowList[i].style.cssText =`
        width: 0px;
        height: 0px;
        `
    }
};
  


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