// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {

   $('.owl-carousel').owlCarousel();

   // Ouvinte de eventos .nav-model-open
   $('.nav-modal-open').on('click', function (e) {
      e.preventDefault();

      let elem = $(this).attr('rel')
      $('.modal-body').html($('#' + elem).html())

      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal($('#exampleModalToggle'))
      myModal.show()
   })

   /* - Checar se o nome é válido (mais de 2 caracteres)
    * - Checar se o email é válido com ao menos um @ e .
    * - Checar se o CPF é válido com regex 
    */
   $('#FormName').on('focusout', function (e) {
      e.preventDefault()
      // let Campo = $('#FormName').val();
      // validate(Campo)
      let valorNome = $("#FormName").val()
      if (valorNome == " " || valorNome.length <= 2) {
         $(this).addClass('erroModal')
      }
      else {
         // elem.parent().find('.text-muted').hide()
         $(this).removeClass('erroModal')
      }
   })

   //Válida CPF e CNPJ expressão regex: ([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})
   $('#FormCPF').on('focusout', function (e) {
      e.preventDefault()
      const cpfValido = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/i;

      if (this.value.match(cpfValido)) {
         $(this).removeClass('erroModal')
      }
      else {
         // elem.parent().find('.text-muted').hide()
         $(this).addClass('erroModal')
      }
   })

   /*          FIM  */


   $('.featured-item h4').append('<span class="badge bg-secondary">Novo</span>')


   $('.featured-item h4').dblclick(function () {
      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
         'padding': '15',
      });
      $(this).append('Frete Gratis');
   });

   $('.featured-item a').on('blur', function (event) {
      event.preventDefault(); //vai tirar o comportamento padrão do link 'a'
      $(this).addClass('btn btn-dark stretch-link');
   })

   $(".cadastro #btnCadastrar").on('mouseenter', function (event) {
      event.preventDefault();
      var div = $(this);
      div.animate({ left: '100px' }, "fast");
      div.animate({ fontSize: '3em' }, "fast");
   })
   $(".cadastro #btnCadastrar").on('mouseleave', function (event) {
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
   const tempo = 1000
   $('#btnCadastrar').on('click', function (e) {
      e.preventDefault()
      if ($('#nomeInput').val() == '') {
         $('#nomeInput').animate({
            border: '1px solid #f00',
         }, tempo, function () {
            console.log($(this).val())
         })
      }
   })

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
