
$(function() {
    var indiceAtual = 0;
    var indiceMaximo = $('.container .fotos').length;
    var delay = 7000;
    
    initSlider();

    function initSlider() {
        $('.container .fotos').eq(0).fadeIn();
        setInterval(function(){
            alternarSlider();
        },delay);
    }

    function alternarSlider() {
        $('.container .fotos').eq(indiceAtual).fadeOut(1);
        indiceAtual+=1;
        if(indiceAtual == indiceMaximo)
            indiceAtual = 0;
        $('.container .fotos').eq(indiceAtual).fadeIn(2000);
    }

});

