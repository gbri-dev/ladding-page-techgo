$(document).ready(function () {

  /* Efeito movimento do menu principal */
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

  /*end Menu */

  //jqueryMask 
  $('.date').mask('00/00/0000');
  $('#phone_with_ddd').mask('(00) 0 000-00000');
  $('.cpf').mask('000.000.000-00', { reverse: true });
  $('.money').mask('000.000.000.000.000,00', { reverse: true });
  $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" });
  $('#cep').mask('00000-000');


  //Validações
  $('.contato-form').on('submit', function (e) {
    e.preventDefault()

    const inputName = $('#nome')
    const inputEmail = $('#email')

    if (inputName.hasClass('erroModal') || inputEmail.hasClass('erroModal')) {
      console.log("verificar campos obrigatórios!")
      return false
    } else {
      $(this).submit()
      return true
    }

  })

  /*          FIM  */
  $('#email').on('blur', function (e) {
    e.preventDefault()
    const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

    if (this.value.match(emailValido)) {
      $(this).removeClass('erroModal')      
    }
    else {
      $(this).addClass('erroModal')    
    }
  })

  $('#nome').on('focusout', function (e) {
    e.preventDefault()
    let valorNome = $("#nome").val()
    if (valorNome == " " || valorNome.length <= 2) {
      $(this).addClass('erroModal')
    }
    else {
      $(this).removeClass('erroModal')
    }
  })

})
