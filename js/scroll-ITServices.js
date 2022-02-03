var element = document.getElementById("via-logo");
var elm = document.getElementById("nav-swap");
var node = document.getElementById("nav-color");
var toggler = document.getElementById("togglerBtn")

function darkFunctionDigital() {
    node.classList.toggle("darkNav");
}

function scrollFunction() {
    var elmnt = document.getElementById("5");
    elmnt.scrollIntoView();
  }

// intersection observer
const numSteps = 20.0;

let prevRatio = 0.0;

window.addEventListener("load", (event) => {
    createObserver();
}, false);



function createObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdlist()
    };

    observer = new IntersectionObserver(handleIntersect, options);

    document.querySelectorAll(".snap-child").forEach(e => observer.observe(e));
}

function buildThresholdlist() {
    let thresholds = [];
    let numSteps = 20;

    for ( let i=1.0; i < numSteps; i++ ) {
        let ratio = i/numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
         
        let classLogo = entry.target.dataset.classlogo;
        let classNav = entry.target.dataset.classnav;
        let classColor = entry.target.dataset.classcolor;
        let  togglerBtn = entry.target.dataset.togglerbtn;


        if (entry.intersectionRatio > prevRatio) {

            // console.log(entry)

            // elm.classList.add('navbar-none')


            element.classList.add(classLogo);
            elm.classList.add(classNav);
            toggler.classList.add(togglerBtn)
            // node.classList.add(classColor);

            node.classList.remove('navbar-dark')
            node.classList.remove('navbar-light')

            if ( classColor !== undefined) {
                node.classList.add(classColor);
            }else{
                node.classList.add('navbar-dark');
            }

            if  ( entry.target.id == ('mainPage')){
                elm.classList.remove('navbar-none')
            }

            


        } else {


            // elm.classList.remove('navbar-none')



            element.classList.remove(classLogo);
            // elm.classList.remove(classNav);
            toggler.classList.remove(togglerBtn);
            // node.classList.remove(classColor);
        }

        prevRatio = entry.intersectionRatio;
    });
}

// fixed nav function //

function fixedNavFunction() {
    const fixedGone = document.getElementById ("nav-color");

    if (fixedGone.classList.contains('fixed-top')) {
        fixedGone.classList.remove ("fixed-top");
    } else {
        fixedGone.classList.add("fixed-t op");
    }
    
}

// display none on scroll



window.onscroll = function (e) {  
    console.log('Hello')
    elm.classList.add('navbar-none')
} 

$(document).ready(function(){

    $( window ).scroll(function() {
        console.log('Hello');  
    });

});


