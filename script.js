const triangle = "M188.9 -229.9C229.9 -190.7 238.1 -117 273.3 -31.3C308.5 54.4 370.7 152.2 357.8 236.5C344.8 320.8 256.5 391.6 157.3 424.3C58 457 -52.2 451.7 -123.3 399.5C-194.3 347.2 -226.2 248.1 -279.6 159.5C-332.9 71 -407.7 -7.1 -416.2 -93.3C-424.8 -179.5 -367 -274 -286.5 -306.3C-206.1 -338.6 -103.1 -308.8 -14.6 -291.5C73.9 -274.1 147.8 -269.2 188.9 -229.9";
const squiggle = "M288.2 -339.1C362.5 -281.1 404.3 -179.9 417.6 -77.7C430.8 24.6 415.4 127.8 355.3 180C295.2 232.3 190.4 233.6 95.2 273.4C0 313.2 -85.5 391.5 -162 388.3C-238.4 385.1 -305.8 300.3 -329.2 212.8C-352.6 125.4 -331.9 35.3 -303.7 -41.3C-275.6 -117.8 -240 -180.7 -188.1 -242.7C-136.3 -304.7 -68.1 -365.9 19.4 -389C106.9 -412.1 213.8 -397.2 288.2 -339.1";
const fuckedtriangle = "M194.1 -240.7C267 -170.2 352.1 -123.7 374.6 -57C397.2 9.6 357.1 96.3 303.2 161.3C249.3 226.3 181.6 269.6 107.3 298C33.1 326.4 -47.8 339.9 -136.2 327.8C-224.6 315.7 -320.6 278.1 -340.2 212C-359.8 145.9 -303 51.2 -270.7 -33.2C-238.5 -117.5 -230.8 -191.7 -189.7 -267.8C-148.7 -343.9 -74.3 -421.9 -6.9 -413.8C60.6 -405.6 121.3 -311.2 194.1 -240.7";



let svgList = document.querySelectorAll("#target1, #target2, #target3, #target4, #target5");


for (let i = 0; i < svgList.length; i++) {

    document.addEventListener('mousedown', () => {
        let dList = svgList[i].getAttribute('d');
   
        if (dList === "") {
            svgList[i].setAttribute('d', triangle);
          
        } else if (dList === triangle) {
            svgList[i].setAttribute('d', squiggle);
            
        } else if (dList === squiggle) {
            svgList[i].setAttribute('d', fuckedtriangle);
           
        } else if (dList === fuckedtriangle) {
            svgList[i].setAttribute('d', triangle);
            
        }
        
    });

};

for (let i = 0; i < svgList.length; i++) {

    document.addEventListener('mousemove', (e) => {
        svgList[i].setAttributeNS(null,'viewBox', e.clientX + " " + e.clientY + " 500 500")
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