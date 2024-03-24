function openNav() {
    var sideNavWidth = 250;
    if (window.innerWidth < 500) {
        document.getElementById("c1").style.opacity = "0";
    }

    if (window.innerWidth >= 500) {
        var c1Element = document.getElementById("c1");
        var currentMarginRight = parseFloat(getComputedStyle(c1Element).marginRight);
        c1Element.style.marginRight = (currentMarginRight + sideNavWidth + 20) + "px";
    }
    document.getElementById("mySidenav").style.width = sideNavWidth + "px";
    document.getElementById("openButton").style.opacity = "0";
    document.getElementById("openButton").style.zIndex = "0";
    document.getElementById("closeButton").style.display = "flex";
    document.getElementById("upArrow").style.opacity = "0";
    document.getElementById("moreArrow").style.opacity = "0";
    document.getElementById("moreArrow").style.zIndex = "0";
    document.getElementById("navMail").style.opacity = "0";
    document.getElementById("navMail").style.zIndex = "0";
    document.getElementById("call").style.opacity = "0";
    document.getElementById("call").style.zIndex = "0";

}
    
function closeNav() {
    var sideNavWidth = 250;
    if (window.innerWidth < 500) {
        document.getElementById("c1").style.opacity = "1";
    }

    if (window.innerWidth >= 500) {
        var c1Element = document.getElementById("c1");
        var currentMarginRight = parseFloat(getComputedStyle(c1Element).marginRight);
        c1Element.style.marginRight = (currentMarginRight - sideNavWidth -20) + "px";
    }
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("openButton").style.opacity = "0.8";
    document.getElementById("openButton").style.zIndex = "2";
    document.getElementById("closeButton").style.display = "none";
    document.getElementById("upArrow").style.opacity = "0.8";
    document.getElementById("moreArrow").style.opacity = "0.8";
    document.getElementById("moreArrow").style.zIndex = "2";
    document.getElementById("navMail").style.opacity = "0.8";
    document.getElementById("navMail").style.zIndex = "2";
    document.getElementById("call").style.opacity = "0.8";
    document.getElementById("call").style.zIndex = "2";
}
