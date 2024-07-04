/* Header Scroll */
window.addEventListener('scroll', function() {
  let header = document.querySelector('.navbar')

  header.classList.toggle('scrolled', window.scrollY>0)
})

let booknooks = document.getElementById('lista');

// Traer los datos de los booknooks, datos.json con Ajax
$(document).ready(function() {
    $.get({
      url: '../../datos.json',
      dataType: 'json',
      success: function(datos) {
        let html 
        $.each(datos, function(index, elemento){
          console.log(index);
          console.log(elemento);

          html = '<div class="col-md-4 mb-4">';
          html += '<div class="card p-4" style="max-width: 20rem;">';
          html += '<img src="' + elemento.imagen + '" class="card-img-top img-fluid" alt="nook-uno">';
          html += '<div class="card-body">';
          html += '<h5 class="card-title-pro">' + elemento.titulo + '</h5>';
          html += '<p class="card-text-pro">' + elemento.descripcion + '</p>';
          html += '<p class="card-text-pre">' + elemento.precio + '</p>';
          html += '<a href="#" class="btn btn-outline-secondary">Ver producto</a>';
          html += '</div>';
          html += '</div>';
          html += '</div>';

          $('#lista').append(html);
        })
      },
      error: function() {
        console.log('No está funcionando');
      }
    });
});

//categorias
$('#jardin').click(function() {
  $.get({
    url: '../../datos.json',
    dataType: 'json',
    success: function(datos) {
      let html 
      $('#lista').empty();

      $.each(datos, function(index, elemento){
        console.log(index);
        console.log(elemento);

        if (elemento.categoria === 'jardin') {

        html = '<div class="col-md-4 mb-4">';
        html += '<div class="card p-4" style="max-width: 100%;">';
        html += '<img src="' + elemento.imagen + '" class="card-img-top img-fluid" alt="nook-uno">';
        html += '<div class="card-body">';
        html += '<h5 class="card-title-pro">' + elemento.titulo + '</h5>';
        html += '<p class="card-text-pro">' + elemento.descripcion + '</p>';
        html += '<p class="card-text-pre">' + elemento.precio + '</p>';
        html += '<a href="#" class="btn btn-outline-secondary">Ver producto</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';

        $('#lista').append(html);
      }
      })
    },
    error: function() {
      console.log('No está funcionando');
    }
  });
});

//Toast

document.getElementById('botonToast').addEventListener('click', function () {
  const toastElement = document.getElementById('liveToast');
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
});

//Color titulo booknooks destacados
$('#colorTexto').on('change', function(){
  let currentColor = $('#colorTexto').val(); //obtiene el valor/color de select del texto
   // en .css() el primer valor es el que sa va a cambiar, y el segundo valor es el que se quiere establecer
  $('.titulo-seccion-dos').css('color', currentColor); //establece el color del texto
})

// AOS
AOS.init();


// Fancybox
Fancybox.bind("[data-fancybox]");

function ventana(){
  let heightPantalla = screen.height;
  let widthPantalla = screen.width;
  let midHeight = heightPantalla / 2;
  let midWidth = widthPantalla / 2;
  let altura = midHeight / 2;
  let mitad = midWidth / 2;

  let ventana = "width=" + midWidth + ", height=" + midHeight + ",top=" + altura + ",left=" + mitad;

  abrirVentana = window.open("assets/pages/producto.html", "popup", ventana)

  setTimeout(3000)
}

let contenedorRespuesta = document.querySelector('.contenedor-respuesta')

$.get({
  url: '../../mensaje-f.html',
  dataType: 'html',
  success: function(respuesta){
    contenedorRespuesta.innerHTML = respuesta
  }, error: function(){
    console.log(error);
  }
})