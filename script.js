const blobList = ["M33.4,-42.2C44,-31,53.7,-21.1,61.3,-6.6C68.8,7.9,74.3,27,65.9,34.9C57.6,42.9,35.5,39.8,18.7,41.8C1.9,43.8,-9.6,50.9,-19.1,48.9C-28.6,47,-36,36,-45.2,24.2C-54.4,12.3,-65.3,-0.6,-67.2,-15.7C-69.1,-30.8,-62,-48.1,-49.3,-59C-36.6,-69.8,-18.3,-74.2,-3.4,-70.1C11.4,-66,22.9,-53.4,33.4,-42.2Z",
    "M34.4,-39.7C45.8,-31.4,57.1,-21.7,64.6,-7.2C72.1,7.3,75.9,26.7,70,43.8C64.2,61,48.7,76,30.8,80.9C13,85.7,-7.2,80.4,-21.4,70.2C-35.5,60,-43.8,45,-53.4,30C-63.1,15,-74.2,0,-75,-16.3C-75.8,-32.6,-66.2,-50.1,-52,-57.8C-37.8,-65.6,-18.9,-63.6,-3.7,-59.1C11.5,-54.7,23,-47.9,34.4,-39.7Z",
    "M53.4,-57C68.8,-50.8,80.5,-33.5,81.1,-16.3C81.8,0.9,71.4,18,61.2,35.1C51.1,52.1,41.2,69,28.1,71.1C15.1,73.2,-1.2,60.5,-20.7,54.5C-40.3,48.4,-63.1,49,-69.6,39.4C-76,29.8,-66.1,9.9,-59.4,-7.4C-52.7,-24.8,-49.2,-39.6,-39.8,-46.9C-30.5,-54.3,-15.2,-54,1.9,-56.3C19,-58.5,38,-63.3,53.4,-57Z",
    "M30.9,-42.3C45.3,-32.1,65.9,-30.1,67.2,-22.7C68.4,-15.3,50.3,-2.4,38.7,6.2C27.1,14.8,22,19.1,16.7,30.7C11.3,42.3,5.7,61.3,-0.2,61.6C-6.2,62,-12.3,43.7,-22.7,33.7C-33.1,23.7,-47.8,22,-55.6,14.2C-63.4,6.5,-64.3,-7.4,-60.5,-19.9C-56.8,-32.5,-48.4,-43.8,-37.5,-55.2C-26.7,-66.5,-13.3,-78,-2.5,-74.5C8.2,-71,16.5,-52.5,30.9,-42.3Z",
    "M41.6,-56.1C49,-51.8,46.9,-33.2,43.3,-19.9C39.6,-6.5,34.4,1.5,32,10.9C29.6,20.2,29.9,31,25.1,37C20.2,43.1,10.1,44.6,-4.1,50.2C-18.3,55.9,-36.6,65.7,-39,58.8C-41.3,51.9,-27.7,28.3,-28.4,12.5C-29.1,-3.3,-44.1,-11.3,-44.9,-16.4C-45.8,-21.6,-32.5,-24.1,-22.7,-27.6C-12.9,-31,-6.4,-35.5,5.3,-42.8C17.1,-50.2,34.1,-60.3,41.6,-56.1Z"
];

let svg = d3.select("svg"),
    currentBlobs = randomBlobs(4),
    colors = ["purple", "rgba(255, 105, 180, 0.7)", "rgba(255, 127, 80, 0.7)", "rgba(255, 68, 0, 0.7)"];

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
        .delay(30)
        .duration(2000)
        .attrTween("d", function(d) {
            return d;
        })
        .filter(function(d, i) { //loops end->start smoothly
            return !i;
        })
        .on("end", animate);
};

function randomBlobs(numOfBlobs) {
    return d3.range(numOfBlobs).map(randomBlob);
};

function randomBlob() {
    const random = Math.floor(Math.random() * blobList.length);
    return blobList[random];
};




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


const allCursorList = document.querySelectorAll("#mainCursor, .cursor, #svgCursor");
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