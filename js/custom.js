// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {

   $('.owl-carousel').owlCarousel();

   // Configuração de produtos



   $('.featured-item h4').append('<span class="badge bg-secondary">Novo</span>')
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
         'padding': '15',
      });
      // let titulo = $('.featured-item:first h4')
      $(this).append('Frete Gratis');
   });

   $('#nomeInput').on('blur', function (event) {
      event.preventDefault(); //vai tirar o comportamento padrão do link 'a'
      // let Nome = this.value != null;
      if (this.value == null) {
         alert('Preencha o campo com o seu primeiro nome.')
      }
   })
   $('#emailInput').on('blur', function (event) {
      event.preventDefault(); //vai tirar o comportamento padrão do link 'a'
      if (this.value == null)
         alert('Preencha o campo com o seu e-mail principal!')
   })

   $('.featured-item a').on('blur', function (event) {
      event.preventDefault(); //vai tirar o comportamento padrão do link 'a'
      $(this).addClass('btn btn-dark stretch-link');
   })

   $(".cadastro .btncadastro").on('mouseenter', function (event) {
      event.preventDefault();
      var div = $(this);
      div.animate({ left: '100px' }, "fast");
      div.animate({ fontSize: '3em' }, "fast");
   })
   $(".cadastro .btncadastro").on('mouseleave', function (event) {
      event.preventDefault();
      var div = $(this);
      div.animate({ left: '-100px' }, "slow");
      div.animate({ fontSize: '1em' }, "slow");
   })

   $(".nav-item").on('mouseenter', function (event) {
      event.preventDefault();
      $(this).animate({
         left: '250px',
         right: '-250px',
         opacity: '0.5',
         height: '150px',
         width: '150px'
      });
   });
   $(".nav-item").on('mouseleave', function (event) {
      event.preventDefault();
      $(this).animate({
         left: '-250px',
         right: '250px',
         opacity: '100',
         width: '100px'
      });
   });
   /*
    * Manipulação de eventos
    * blur é quando você tirar um elemento do foco  
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

   $('.featured-item').hover(function () {
      $(this).css({
         'filter': 'grayscale()',
      })
   },
      function () {
         $(this).css({
            'filter': 'none',
         })
      }
   )
})

function comprarItem() {
   $('.featured-item:nth(2)').hide(500, function () {
      alert($(this).find('h4').text() + ' Esgotado')
   })
      .show(500, function () {
         alert($(this).find('h4').text() + ' Em estoque')
      })
}
