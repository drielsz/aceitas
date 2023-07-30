box_n = document.querySelector('.box-not')
box_n.style.position = "relative"
box_n.style.top = '40px'

var primary_background = document.querySelector('.wrapper-int')

function addE(){
    var wb = primary_background.offsetWidth; 
    var hb = primary_background.offsetHeight;
    box_n.style.top = `${Math.floor((hb-100)*Math.random())}px`;
    box_n.style.left = `${Math.floor((wb-100)*Math.random())}px`;
    box_n.style.right = `${Math.floor((wb)*Math.random())}px`;
    console.log(`${Math.floor((wb-100)*Math.random())}px`)
}

box_n.addEventListener("mouseover", addE)