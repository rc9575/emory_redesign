var curr = 0;

function transition(num) {
    curr += num;
    var slides = document.getElementsByClassName("article");
    if (curr >= slides.length) {
        curr = 0;
    }
    else if(curr < 0) {
        curr = slides.length-1;
    }
    show_slide(curr);
}

function show_slide(num) {
    var slides = document.getElementsByClassName("article");
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i <= slides.length - 1; i++) {
        slides[i].style.display = "none";
    }
    slides[num].style.display = "flex";

    for (i = 0; i <=dots.length-1; i++) {
        dots[i].className = dots[i].className.replace("current", "");
    }
    dots[num].className += " current";
}
  
