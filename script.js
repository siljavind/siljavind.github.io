const blobList = ["M58.8,-22.9C64.6,-1.4,49.5,23,26.8,40.3C4.1,57.6,-26.3,67.7,-45.6,55.4C-64.9,43.1,-73.2,8.3,-63.8,-18.3C-54.3,-44.8,-27.2,-63.2,-0.3,-63.1C26.5,-63,53.1,-44.4,58.8,-22.9Z",
    "M39.9,-12C45.5,4,39.3,24.8,22.1,39.5C4.9,54.1,-23.3,62.5,-36.9,52.3C-50.5,42.1,-49.5,13.2,-40.9,-7.1C-32.3,-27.3,-16.2,-38.9,0.5,-39.1C17.2,-39.3,34.4,-28,39.9,-12Z",
    "M62.2,-25.4C68.5,-1.1,52.8,25.1,31.2,40.1C9.6,55.2,-18.1,59.1,-35.2,47C-52.3,34.9,-58.9,6.8,-51.3,-19.5C-43.6,-45.7,-21.8,-70.2,3.1,-71.2C28,-72.2,56,-49.8,62.2,-25.4Z"
];

let svg = d3.select("svg"),
    width = 1000,
    height = 1000,
    currentBlobs = randomBlobs(3),
    colors = ["blue", "purple", "hotpink"];

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
        interpolators = flubber.interpolateAll(currentBlobs, nextBlobs, { match: false }); /*match: false = blobs can't be a match*/

    currentBlobs = nextBlobs;

    paths /*add onmovemove somehow maybe*/
        .data(interpolators)
        .transition()
        .delay(40)
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
    return d3.range(numOfBlobs).map(randomBlob);     
}

function randomBlob() {   
        const random = Math.floor(Math.random() * blobList.length);
        return blobList[random];
};

/*const svgList = document.querySelectorAll("path");
console.log(svgList);
for (let i = 0; i < svgList.length; i++) {
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