var quantidade = $('div#testimonials ul').length;

var limite = (quantidade * 336) *-1;
var largura = limite - 336;

var view_largura = $('section#witness div#witness-center').width();
$('div#testimonials').css('width', limite * -1);

$('div#teste').html(limite);



$('div#witness-left').click( function() {
    posicao_atual = $('div#testimonials').position().left;
    nova_posicao = posicao_atual - view_largura;
    $('div#testimonials').animate({left:nova_posicao},1000);

    }
)




$('div#witness-right').click( function(){
        $('div#teste').html('Clicou no direita');

    }
)