//Variaveis



document.querySelector('#new0').style.display ='block'

var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var noticias = document.querySelectorAll('.listaDeArtigos-item');
var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');

new0.style.display = 'block'

//Criando indicador de slide atual
var indicadorSlideAtuall = document.createElement('span');
indicadorSlideAtuall.classList.add('escondeVisualmente');
indicadorSlideAtuall.id = 'escondeVisualmente';
indicadorSlideAtuall.textContent = '(SlideAtual)';

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {

    //btn.href = 'javascript:void(0)'
    noticias.forEach(function(noticia){
      noticias.style.display = 'none';


      if (this.getAttribute('data-sliderItem') === noticia.getAttribute('data-noticia')) {
        noticia.styled.display = 'block'
      }
    }.bind(this0));

    document.querySelector('.listaDeArtigos-slider-item.escondeVisualmente')
    .remove();
    this.append(indicadorSlideAtuall);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})