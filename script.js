// SCROLLER *******************************************************************************************************************SCROLLER**
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


// TINY FUNCTIONS *******************************************************************************************************TINY FUNCTIONS**
function watHeyo(i) {
    document.getElementById(i).innerHTML = "Heyo";
};

function getElmt(i) {
    document.getElementById(i).scrollIntoView();
};


// LIGHT SWITCH ***********************************************************************************************************LIGHT SWITCH**
function lightSwitch(i) {
    let lightSwitch = document.getElementById(i);
    let lightStyle = lightSwitch.currentStyle || window.getComputedStyle(lightSwitch);

    if (lightStyle.marginLeft == '10px') {
        d3.select("head")
            .select("link")
            .remove();

        d3.select("head")
            .insert("link", ":first-child")
            .attr("rel", "stylesheet")
            .attr("href", "styleLight.css");
        lightSwitch.style.cssText = `
        margin-left: 40px;
        `;
        document.body.style.cssText = `
        background: bisque;
        `;
        console.log(lightStyle.marginLeft)
    } else {
        d3.select("head")
            .select("link")
            .remove();

        d3.select("head")
            .insert("link", ":first-child")
            .attr("rel", "stylesheet")
            .attr("href", "styleDark.css");
        lightSwitch.style.cssText = `
        margin-left: 10px;
        `;
        document.body.style.cssText = `
        background: black;
        `;
        console.log(lightStyle.marginLeft);

    };
};


// CURSOR SHADOW *********************************************************************************************************CURSOR SHADOW**

const shadowID = ["shadow1", "shadow2", "shadow3", "shadow4"]

d3.select("body")
    .insert("div", ":first-child") //inserts before first child of parent (body)
    .attr("id", "shadowContainer");

for (let i = 0; i < shadowID.length; i++) {
    d3.select("#shadowContainer")
        .insert("div")
        .classed("shadow", true)
        .attr("id", shadowID[i]);
};

const shadowList = document.querySelectorAll(".shadow");

for (let i = 0; i < shadowList.length; i++) {

    document.addEventListener('mousemove', (e) => {
        shadowList[i].style.cssText = `
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;
    });

    document.addEventListener('mousedown', (e) => {
        shadowList[i].style.cssText = `
        width: ${shadowList[i].clientWidth = Math.max(1500)}px;
        height: ${shadowList[i].clientHeight = Math.max(1500)}px;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;
    });

    document.addEventListener('mouseup', (e) => { //Why does this work?? == vs. === &= false vs. value
        shadowList[i].style.cssText = `
        width: ${shadowList[i].clientWidth = false}; 
        height: ${shadowList[i].clientHeight = false};
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;
    });

    document.addEventListener('mouseleave', (e) => {
        shadowList[i].style.cssText = `
        width: ${shadowList[i].clientWidth = 0};
        height: ${shadowList[i].clientHeight = 0};
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        `;
    });

    document.onload = setToZero();

    function setToZero() {
        shadowList[i].style.cssText = `
        width: ${shadowList[i].clientWidth = 0};
        height: ${shadowList[i].clientHeight = 0};
        `;
    };
};

// SVG BLOB *******************************************************************************************************************SVG BLOB**
{
    const blobList = [
        "M253.3 -158.8C307.4 -52.5 316.1 67.5 266.3 147.7C216.5 228 108.3 268.5 29.8 251.3C-48.7 234.1 -97.4 159.3 -124.7 92C-152 24.8 -157.8 -34.9 -133.5 -123.9C-109.1 -213 -54.6 -331.5 22.5 -344.5C99.6 -357.5 199.2 -265 253.3 -158.8",
        "M270.9 -189.8C295.2 -114.2 220.7 -14.9 159.1 55.8C97.4 126.6 48.7 168.8 -40.6 192.2C-129.9 215.7 -259.8 220.3 -297.2 163.6C-334.6 106.8 -279.4 -11.3 -214.5 -110.3C-149.5 -209.3 -74.8 -289.2 24.2 -303.2C123.3 -317.2 246.5 -265.3 270.9 -189.8",
        "M138 -105.2C178.6 -9.4 211 65.5 186.6 115.4C162.2 165.3 81.1 190.2 -2.5 191.6C-86 193 -172.1 171 -237 97.7C-302 24.3 -345.8 -100.3 -302.8 -197.5C-259.8 -294.7 -129.9 -364.3 -40.6 -340.9C48.7 -317.5 97.4 -200.9 138 -105.2",
        "M240.3 -177.8C264.6 -96.5 205.4 -6.1 151.4 100.1C97.4 206.3 48.7 328.1 -28.9 344.8C-106.5 361.5 -213 273 -247 178.4C-280.9 83.8 -242.2 -16.8 -188.9 -114.7C-135.7 -212.7 -67.8 -307.8 20.1 -319.4C108 -331 215.9 -259 240.3 -177.8",
        "M170.4 -145.3C194.8 -56.2 170.5 14.1 134 65.3C97.4 116.6 48.7 148.8 -23.1 162.1C-95 175.5 -189.9 170 -235.7 113.4C-281.5 56.8 -278 -50.8 -230.5 -153.2C-183 -255.7 -91.5 -352.8 -9.2 -347.5C73 -342.2 146.1 -234.3 170.4 -145.3",
        "M317.3 -181C382.2 -70.7 386 77.2 322.9 141.7C259.8 206.3 129.9 187.5 24 173.7C-82 159.8 -164 150.9 -198.6 102.8C-233.2 54.7 -220.5 -32.7 -179.6 -129.2C-138.6 -225.7 -69.3 -331.3 28.4 -347.7C126.2 -364.2 252.3 -291.3 317.3 -181"
    ];
    const colors = [
        "rgb(128, 0, 150)",
        "rgba(255, 100, 160, 0.9)",
        "rgba(255, 50, 0, 0.9)"
    ];
    const blobContainer = ["blob1", "blob2", "blob3"]

    let svg = d3.select("svg"),
        currentBlobs = randomBlobs(colors.length);

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
            interpolators = flubber.interpolateAll(currentBlobs, nextBlobs, { match: false, maxSegmentLength: 30 });

        currentBlobs = nextBlobs;

        paths
            .data(interpolators)
            .transition()
            .delay(20)
            .duration(10000)
            .attrTween("d", function(d) {
                return d;
            })
            .filter(function(_, i) {
                return !i;
            })
            .on("end", animate);
    };
};

//DETECTS WHEN MOUSE HASN'T BEEN MOVED FOR A DEFINED PERIOD OF TIME (10 seconds) (Needed the opposite of "mousemove")
/*(function(mouseStopDelay) {
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
}(1000));*/