window.onscroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    document.querySelector(
        ".scroller"
    ).style.background = `linear-gradient(to bottom, #000 ${scrollPercentRounded}%, #0000 ${scrollPercentRounded}%)`;

};

function watHeyo(i) {
    document.getElementById(i).innerHTML = "Heyo";
};

function getElmt(i) {
    document.getElementById(i).scrollIntoView;
};

function lightOn(i) {
    let button = document.getElementById(i);
    let style = button.currentStyle || window.getComputedStyle(button);

    if (style.marginLeft == '10px') {
       button.style.cssText = `
        margin-left: 50px;
        `;
    }
    else {
        button.style.cssText = `
        margin-left: 10px;
        `;
    }
};
 

/*const allCursorList = document.querySelectorAll("#mainCursor, .cursor");
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
        width: ${shadowList[i].clientWidth = Math.max(1500)}px;
        height: ${shadowList[i].clientHeight = Math.max(1500)}px;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;
    });

    document.addEventListener('mouseup', (e) => {
        shadowList[i].style.cssText = `
        width: ${shadowList[i].clientWidth == 1000}px;
        height: ${shadowList[i].clientHeight == 1000}px;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;
    });

    document.addEventListener('mouseleave', (e) => {
        shadowList[i].style.cssText = `
        width: ${shadowList[i].clientWidth = 1}px;
        height: ${shadowList[i].clientHeight = 1}px;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;
    })

    document.addEventListener('load', onLoad());

    function onLoad() {
        shadowList[i].style.cssText = `
        width: ${shadowList[i].clientWidth = 1}px;
        height: ${shadowList[i].clientHeight = 1}px;
        `;
    }
};*/