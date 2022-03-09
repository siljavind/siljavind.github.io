
    
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

    function myHeyo() {
        document.getElementById("Button2").innerHTML = "Heyo";
    }

