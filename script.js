src = "https://unpkg.com/flubber@0.3.0";
src = "https://d3js.org/d3.v7.min.js";
const blob = ["M34,-35.9C48.2,-28.6,66.8,-21.8,72.8,-9.6C78.9,2.7,72.5,20.4,61.5,31.7C50.5,43,34.8,47.8,18.6,55.6C2.5,63.4,-14.2,74.2,-28.3,71.7C-42.3,69.2,-53.7,53.4,-60.9,37.1C-68,20.7,-70.8,3.9,-65,-8.4C-59.1,-20.6,-44.6,-28.2,-32.3,-35.9C-20.1,-43.5,-10,-51.1,-0.1,-51C9.9,-50.9,19.8,-43.1,34,-35.9Z",
    "M39.4,-51.5C49.5,-38.5,55.1,-24.6,53.4,-12.6C51.6,-0.7,42.6,9.3,37.5,25C32.5,40.7,31.4,62,20.6,73C9.8,84.1,-10.7,84.9,-29.5,78.9C-48.3,73,-65.4,60.3,-73.2,43.7C-81,27.2,-79.5,6.7,-70.1,-6.4C-60.7,-19.5,-43.4,-25.3,-30.4,-37.8C-17.4,-50.3,-8.7,-69.6,3,-73.1C14.6,-76.7,29.3,-64.5,39.4,-51.5Z",
    "M28.2,-42C36.3,-26.8,42.6,-17.7,47.5,-6C52.4,5.7,55.9,20,53,35.7C50,51.4,40.6,68.5,27,73C13.3,77.5,-4.5,69.4,-19.9,61C-35.3,52.6,-48.2,44,-60.8,30.9C-73.4,17.8,-85.6,0.3,-84.5,-16.5C-83.4,-33.2,-69,-49.1,-52.7,-62.9C-36.4,-76.6,-18.2,-88.3,-4.1,-83.4C10,-78.6,20,-57.2,28.2,-42Z"
];

/*const blob = ["M188.9 -229.9C229.9 -190.7 238.1 -117 273.3 -31.3C308.5 54.4 370.7 152.2 357.8 236.5C344.8 320.8 256.5 391.6 157.3 424.3C58 457 -52.2 451.7 -123.3 399.5C-194.3 347.2 -226.2 248.1 -279.6 159.5C-332.9 71 -407.7 -7.1 -416.2 -93.3C-424.8 -179.5 -367 -274 -286.5 -306.3C-206.1 -338.6 -103.1 -308.8 -14.6 -291.5C73.9 -274.1 147.8 -269.2 188.9 -229.9",
    "M288.2 -339.1C362.5 -281.1 404.3 -179.9 417.6 -77.7C430.8 24.6 415.4 127.8 355.3 180C295.2 232.3 190.4 233.6 95.2 273.4C0 313.2 -85.5 391.5 -162 388.3C-238.4 385.1 -305.8 300.3 -329.2 212.8C-352.6 125.4 -331.9 35.3 -303.7 -41.3C-275.6 -117.8 -240 -180.7 -188.1 -242.7C-136.3 -304.7 -68.1 -365.9 19.4 -389C106.9 -412.1 213.8 -397.2 288.2 -339.1",
    "M194.1 -240.7C267 -170.2 352.1 -123.7 374.6 -57C397.2 9.6 357.1 96.3 303.2 161.3C249.3 226.3 181.6 269.6 107.3 298C33.1 326.4 -47.8 339.9 -136.2 327.8C-224.6 315.7 -320.6 278.1 -340.2 212C-359.8 145.9 -303 51.2 -270.7 -33.2C-238.5 -117.5 -230.8 -191.7 -189.7 -267.8C-148.7 -343.9 -74.3 -421.9 -6.9 -413.8C60.6 -405.6 121.3 -311.2 194.1 -240.7"
];*/

let svg = d3.select("svg"),
    width = 1000,
    height = 1000,
    currentBlobs = randomBlobs(1),
    colors = ["black"];

let paths = svg
    .selectAll("path")
    .data(currentBlobs)
    .enter()
    .append("path")
    .style("fill", function(d, i) {
        return colors[i];
    });
animate();

function animate() {
    let nextBlobs = randomBlobs(currentBlobs.length),
        interpolators = flubber.interpolateAll(currentBlobs, nextBlobs, { match: false });

    currentBlobs = nextBlobs;

    paths
        .data(interpolators)
        .transition()
        .delay(20)
        .duration(1000)
        .attrTween("d", function(d) {
            return d;
        })
        .filter(function(d, i) {
            return !i;
        })
        .on("end", animate);
}

function randomBlobs(numOfBlobs) {
    console.log(randomBlob);
    return d3.range(numOfBlobs).map(randomBlob);

}

function randomBlob() {
    var sides = 3 + Math.floor(Math.random() * 10),
        r = 50 + Math.random() * 100,
        x = r + Math.random() * (width - r * 2),
        y = r + Math.random() * (height - r * 2);

    return d3.range(sides).map(function(i) {
        return [
            Math.cos(Math.PI / 2 + 2 * Math.PI * i / sides) * r + x,
            Math.sin(Math.PI / 2 + 2 * Math.PI * i / sides) * r + y,

        ];
    });
}

/*function randomBlob() {

    return d3.range().map(function() {
        const random = Math.floor(Math.random() * blob.length);
        console.log(random);
        return random;
    });
};*/

let svgList = document.querySelectorAll("#target1, #target2, #target3, #target4, #target5, #target6");

for (let i = 0; i < svgList.length; i++) {

    document.addEventListener('mousedown', () => {
        let dList = svgList[i].getAttribute('d');

        if (dList === "") {
            svgList[i].setAttribute('d', blob[0]);

        } else if (dList === blob[0]) {
            svgList[i].setAttribute('d', blob[1]);

        } else if (dList === blob[1]) {
            svgList[i].setAttribute('d', blob[2]);

        } else if (dList === blob[2]) {
            svgList[i].setAttribute('d', blob[0]);

        }
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