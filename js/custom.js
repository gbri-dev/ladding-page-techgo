// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {

   $('.owl-carousel').owlCarousel();

   // Configuração de produtos

   $('.featured-item a').addClass('btn btn-dark stretch-link');

   $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')

   $('.featured-item h4').dblclick(function () {
      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });
      // let titulo = $('.featured-item:first h4')
      $(this).append('Frete Gratis')
   });

   /*
    * Manipulação de eventos
    */

   // $('.featured-item a').on('blur', function (event) {

   //    event.preventDefault();

   //    alert('Produto esgotado');

   // })

   /* Callback
   * entendendo ações que começam ao termino de outra
   */



   // $('.featured-item:nth(2)').hide(500, function () {
   //    alert($(this).find('h4').text() + ' Esgotado')
   // })
   //    .show(500, function () {
   //       alert($(this).find('h4').text() + ' Em estoque')
   //    })
})

function comprarItem() {
   $('.featured-item:nth(2)').hide(500, function () {
      alert($(this).find('h4').text() + ' Esgotado')
   })
      .show(500, function () {
         alert($(this).find('h4').text() + ' Em estoque')
      })
}
