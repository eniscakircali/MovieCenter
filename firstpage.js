var images=new Array('img/firstpage/fi1.jpg','img/firstpage/fi2.jpg','img/firstpage/fi3.jpg','img/firstpage/fi4.jpg','img/firstpage/fi5.jpg');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.global-header')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(500,function(){
        setTimeout(doSlideshow,3000);
    });
}