{

    const blobList = ["M33.4,-42.2C44,-31,53.7,-21.1,61.3,-6.6C68.8,7.9,74.3,27,65.9,34.9C57.6,42.9,35.5,39.8,18.7,41.8C1.9,43.8,-9.6,50.9,-19.1,48.9C-28.6,47,-36,36,-45.2,24.2C-54.4,12.3,-65.3,-0.6,-67.2,-15.7C-69.1,-30.8,-62,-48.1,-49.3,-59C-36.6,-69.8,-18.3,-74.2,-3.4,-70.1C11.4,-66,22.9,-53.4,33.4,-42.2Z",
        "M34.4,-39.7C45.8,-31.4,57.1,-21.7,64.6,-7.2C72.1,7.3,75.9,26.7,70,43.8C64.2,61,48.7,76,30.8,80.9C13,85.7,-7.2,80.4,-21.4,70.2C-35.5,60,-43.8,45,-53.4,30C-63.1,15,-74.2,0,-75,-16.3C-75.8,-32.6,-66.2,-50.1,-52,-57.8C-37.8,-65.6,-18.9,-63.6,-3.7,-59.1C11.5,-54.7,23,-47.9,34.4,-39.7Z",
        "M53.4,-57C68.8,-50.8,80.5,-33.5,81.1,-16.3C81.8,0.9,71.4,18,61.2,35.1C51.1,52.1,41.2,69,28.1,71.1C15.1,73.2,-1.2,60.5,-20.7,54.5C-40.3,48.4,-63.1,49,-69.6,39.4C-76,29.8,-66.1,9.9,-59.4,-7.4C-52.7,-24.8,-49.2,-39.6,-39.8,-46.9C-30.5,-54.3,-15.2,-54,1.9,-56.3C19,-58.5,38,-63.3,53.4,-57Z",
        "M30.9,-42.3C45.3,-32.1,65.9,-30.1,67.2,-22.7C68.4,-15.3,50.3,-2.4,38.7,6.2C27.1,14.8,22,19.1,16.7,30.7C11.3,42.3,5.7,61.3,-0.2,61.6C-6.2,62,-12.3,43.7,-22.7,33.7C-33.1,23.7,-47.8,22,-55.6,14.2C-63.4,6.5,-64.3,-7.4,-60.5,-19.9C-56.8,-32.5,-48.4,-43.8,-37.5,-55.2C-26.7,-66.5,-13.3,-78,-2.5,-74.5C8.2,-71,16.5,-52.5,30.9,-42.3Z",
        "M41.6,-56.1C49,-51.8,46.9,-33.2,43.3,-19.9C39.6,-6.5,34.4,1.5,32,10.9C29.6,20.2,29.9,31,25.1,37C20.2,43.1,10.1,44.6,-4.1,50.2C-18.3,55.9,-36.6,65.7,-39,58.8C-41.3,51.9,-27.7,28.3,-28.4,12.5C-29.1,-3.3,-44.1,-11.3,-44.9,-16.4C-45.8,-21.6,-32.5,-24.1,-22.7,-27.6C-12.9,-31,-6.4,-35.5,5.3,-42.8C17.1,-50.2,34.1,-60.3,41.6,-56.1Z",
        "M20,-40.2C24.2,-32.2,24.7,-23.4,29.3,-16.5C33.9,-9.7,42.6,-4.8,51,4.9C59.5,14.6,67.6,29.2,62.2,34.5C56.7,39.9,37.7,36.1,25,34.1C12.4,32.1,6.2,31.9,-3.9,38.6C-14,45.4,-28,59.1,-40.1,60.8C-52.3,62.5,-62.5,52.3,-66.6,40.1C-70.7,28,-68.6,14,-61.9,3.9C-55.2,-6.2,-43.8,-12.5,-36.8,-19.6C-29.8,-26.7,-27.3,-34.7,-21.9,-42C-16.4,-49.3,-8.2,-55.9,-0.2,-55.6C7.9,-55.3,15.8,-48.2,20,-40.2Z",
        "M26.1,-50C33.5,-40.8,39.1,-33.3,39.3,-25.3C39.4,-17.2,34.2,-8.6,33.5,-0.4C32.9,7.8,36.7,15.6,37.7,25.6C38.6,35.6,36.6,47.7,29.8,54.7C23,61.7,11.5,63.5,0.7,62.2C-10.1,60.9,-20.1,56.6,-32.9,53.1C-45.7,49.6,-61.2,47,-66.9,38.2C-72.6,29.5,-68.4,14.8,-60.8,4.4C-53.2,-6,-42.2,-12,-38.6,-24.3C-35,-36.6,-38.8,-55.2,-33.6,-65.7C-28.4,-76.1,-14.2,-78.4,-2.5,-74.1C9.3,-69.9,18.6,-59.1,26.1,-50Z",
        "M37.6,-64.7C47.6,-59.4,53.9,-47,56,-35.1C58.2,-23.2,56.2,-11.6,57.4,0.7C58.5,12.9,62.7,25.8,59.4,35.7C56.1,45.7,45.3,52.7,34.2,54.4C23,56,11.5,52.1,0.3,51.7C-10.9,51.2,-21.9,54,-28.6,49.9C-35.4,45.7,-37.9,34.5,-39.5,25C-41.1,15.6,-41.7,7.8,-45.3,-2.1C-48.8,-11.9,-55.3,-23.8,-51,-28.5C-46.7,-33.3,-31.5,-30.8,-21.2,-36C-10.9,-41.1,-5.5,-53.8,4.2,-61C13.8,-68.2,27.6,-69.9,37.6,-64.7Z",
        "M27.2,-53.4C32.3,-44.2,31.5,-30.9,41.5,-21.4C51.6,-11.8,72.7,-5.9,74.1,0.8C75.5,7.5,57.2,15,49.9,29.4C42.6,43.8,46.2,65.1,39.7,70.7C33.2,76.3,16.6,66.2,6.1,55.6C-4.4,45.1,-8.9,34.1,-19.1,30.6C-29.4,27.2,-45.4,31.4,-51.7,27.5C-58.1,23.7,-54.6,11.8,-56,-0.8C-57.4,-13.4,-63.6,-26.9,-57.8,-31.5C-51.9,-36.1,-33.9,-31.9,-22.3,-37.3C-10.6,-42.6,-5.3,-57.6,2.9,-62.6C11.1,-67.6,22.1,-62.5,27.2,-53.4Z",
        "M29.5,-52.1C38.7,-45.7,47.2,-38.9,48.4,-30.2C49.6,-21.4,43.6,-10.7,45.9,1.4C48.3,13.4,59,26.9,57.5,35C55.9,43,41.9,45.8,30.3,53.5C18.7,61.2,9.3,73.9,0.2,73.5C-8.9,73.1,-17.7,59.6,-31.3,53C-45,46.4,-63.3,46.8,-74.1,39.1C-84.9,31.4,-88.1,15.7,-85.6,1.4C-83.2,-12.9,-75.2,-25.8,-66.5,-37.2C-57.8,-48.5,-48.5,-58.2,-37.3,-63.6C-26.1,-68.9,-13.1,-70,-1.5,-67.4C10.1,-64.8,20.2,-58.6,29.5,-52.1Z"
    ];
    const colorList = ["rgba(128, 0, 128, 0.9)", "rgba(255, 105, 180, 0.7)", "rgba(255, 127, 80, 0.6)", "rgba(255, 68, 0, 0.5)"];


    let svg = d3.select("svg"),
        currentBlobs = randomBlobs(4),
        colors = colorList;

    let paths = svg
        .selectAll("path")
        .data(currentBlobs)
        .enter()
        .append("path")
        .style("fill", function(_, i) {
            return colors[i];
        })
    animate();

    function randomBlobs(numOfBlobs) {
        return d3.range(numOfBlobs).map(randomBlob);
    };

    function randomBlob() {
        const random = Math.floor(Math.random() * blobList.length);
        return blobList[random];
    };

    function animate() {
        let nextBlobs = randomBlobs(currentBlobs.length),
            interpolators = flubber.interpolateAll(currentBlobs, nextBlobs, { match: false, maxSegmentLength: 5 });

        currentBlobs = nextBlobs;

        paths
            .data(interpolators)
            .transition()
            .delay(10)
            .duration(4000)
            .attrTween("d", function(d) {
                return d;
            })
            .filter(function(_, i) {
                return !i;
            })
            .on("end", animate);

    };

};


document.addEventListener('mousestop', () => {
    document.body.style = `background-color: bisque`;
})

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


const allCursorList = document.querySelectorAll("#mainCursor, .cursor"); //, #svgCursor
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

//DETECTS WHEN MOUSE HASN'T BEEN MOVED FOR A DEFINED PERIOD OF TIME (10 seconds) (Needed the opposite of "mousemove")
(function(mouseStopDelay) {
    var timeout;
    document.addEventListener('mousemove', function(e) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            var event = new CustomEvent('mousestop', {
                detail: {
                    clientX: e.clientX,
                    clientY: e.clientY
                },
                bubbles: true,
                cancelable: true
            });
            e.target.dispatchEvent(event);
        }, mouseStopDelay);
    });
}(1000));