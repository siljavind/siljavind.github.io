const triangle = "M150 0 L75 200 L225 200 Z";
const squiggle = "M20 230 Q40 205 50 230 T90 230";
const triangle1 = "M150 0 L75 20 L225 200 Z";



const svgList = document.querySelectorAll("#target1, #target2, #target3, #target4, #target5");


for (let i = 0; i < svgList.length; i++) {

    document.addEventListener('mousedown', () => {
        let dList = svgList[i].getAttribute('d');
        console.log(dList);

        if (dList = "") {
            svgList[i].setAttribute('d', triangle);
            console.log(dList);

        } else if (dList = triangle) {
            svgList[i].setAttribute('d', squiggle);
            console.log(dList);

        } else if (dList = squiggle) {
            svgList[i].setAttribute('d', triangle1);
            console.log(dList);

        } else if (dList = triangle1) {
            svgList[i].setAttribute('d', triangle);
            console.log(dList);
        }

        console.log(dList);

    });


};


/*for (let i = 0; i < svgList.length; i++) {

    document.addEventListener('mousemove', (e) => {
        svgList[i].style.cssText = `
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;
    });
};*/


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
    document.getElementById(i).scrollIntoView();
};

function lightSwitch(i) {
    let lightSwitch = document.getElementById(i);
    let style = lightSwitch.currentStyle || window.getComputedStyle(lightSwitch);

    if (style.marginLeft == '10px') {
        lightSwitch.style.cssText = `
        margin-left: 40px;
        background-color: white;
        `;
        document.body.style.cssText = `
        background-color: white;
        `;
    } else {
        lightSwitch.style.cssText = `
        margin-left: 10px;
        background-color: rgb(10, 10, 10);
        `;
        document.body.style.cssText = `
        background-color: black;
        `;
    };
};


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
};