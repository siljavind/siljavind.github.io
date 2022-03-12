window.onscroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    document.querySelector(
        ".scroller"
    ).style.background = `linear-gradient(to bottom, #ffff ${scrollPercentRounded}%, #0000 ${scrollPercentRounded}%)`;

}

function watHeyo(i) {
    document.getElementById(i).innerHTML = "Heyo";
}

function getElmt(i) {
    const elmt = document.getElementById(i);
    elmt.scrollIntoView();
}

/*const winSize = (e) => {
    let rect = e.getBoundingClientRect();

    let left = rect.left + window.scrollX;
    let top = rect.top + window.scrollY;
    let right = rect.right + window.scrollX;
    let bottom = rect.bottom + window.scrollY;

    if (rect.x === undefined) x = left;
    else x = rect.x + window.scrollX;

    if (rect.y === undefined) y = top;
    else y = rect.y + window.scrollY;

    let width = rect.width;
    let height = rect.height;

    return { left, top, right, bottom, width, height };
};*/




let cursor = document.querySelector('#cursor');
const onMouseMove = (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.rop = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

/*cursor.addEventListener('mousemove', e => {


    let rect = e.target.getBoundingClientRect();

    let left = rect.left + window.scrollX;
    let top = rect.top + window.scrollY;
    let right = rect.right + window.scrollX;
    let bottom = rect.bottom + window.scrollY;

    let x = rect.x + window.scrollX;

    let y = rect.y + window.scrollY;

    let width = rect.width;
    let height = rect.height;




    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    cursor.style.setProperty('--x', x + 'px');
    cursor.style.setProperty('--y', y + 'px');
});*/









/*let winWidth = window.innerWidth;
let winHeight = window.innerHeight;
let x = e.clientX - winWidth.left;
let y = e.clientY - winHeight.top;
cursor.style.setProperty('--x', x + 'px')
cursor.style.setProperty('--y', y + 'px')


/*window.onmouseover = () => {

    document.querySelector(
        ".startText"
    ).style.opacity = '10%';

    document.querySelector(

    )
}

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