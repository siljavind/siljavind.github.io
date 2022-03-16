const blob1 = "M150 0 L75 200 L225 200 Z";
const blob2 = "M59.7 -99.5C79.8 -91.9 100.1 -80.7 92.5 -63.5C84.9 -46.3 49.5 -23.2 30.8 -10.8C12.2 1.7 10.4 3.3 16.9 18.6C23.4 33.9 38.2 62.9 36.8 62C35.3 61.2 17.7 30.6 4.1 23.5C-9.5 16.5 -19 32.9 -22.3 34.8C-25.6 36.7 -22.8 24.1 -18.4 15.9C-13.9 7.7 -8 3.8 -26.3 -10.6C-44.6 -25 -87.3 -50 -91.9 -58.5C-96.4 -67 -63 -59.1 -41.3 -65.7C-19.7 -72.4 -9.8 -93.7 5 -102.4C19.8 -111 39.7 -107 59.7 -99.5";
const blob3 = "M24.7 -35.8C40.5 -33.8 67.4 -44.1 71.2 -40.2C74.9 -36.3 55.5 -18.2 44.4 -6.4C33.2 5.3 30.5 10.7 34 27.1C37.5 43.6 47.2 71.2 42.6 93.5C38 115.8 19 132.9 -1.3 135.2C-21.7 137.5 -43.3 125.1 -60.9 110.2C-78.6 95.4 -92.1 78.2 -81.3 59.4C-70.4 40.7 -35.2 20.3 -28.6 3.8C-21.9 -12.7 -43.9 -25.3 -47.4 -31.4C-50.9 -37.5 -35.9 -36.9 -25 -41.7C-14 -46.6 -7 -56.8 -1.3 -54.6C4.5 -52.5 9 -37.9 24.7 -35.8";



const svgList = document.querySelectorAll("#target1, #target2, #target3, #target4, #target5");

for (let i = 0; i < svgList.length; i++) {

    document.addEventListener('mousemove', (e) => {
        svgList[i].style.cssText = `
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;
    });
};
for (let i = 0; i < svgList.length; i++) {
    const dList = svgList[i].getAttribute('d');

    if (dList[i] = "") {
        svgList[i].setAttributeNS(null, 'd', blob1)
    };
    if (dList[i] = blob1) {
        svgList[i].setAttributeNS(null, 'd', blob2)
    };
    if (dList[i] = blob2) {
        svgList[i].setAttributeNS(null, 'd', blob3)
    };
    if (dList[i] = blob3) {
        svgList[i].setAttributeNS(null, 'd', blob1)
    };

};
console.log(target1);



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