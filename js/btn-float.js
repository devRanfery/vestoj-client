// $(document).ready(function () {
//   $('#hide').on('click', function () {
//     $('#element').hide();
//     return false;
//   });

//   $('#show').on('click', function () {
//     $('#element').show();
//     return false;
//   });
// });

$(document).ready(function () {
  $('#min').click(function () {
    //Solo si el valor del campo es diferente de 0
    if ($('#cantidadInput').val() != 0)
      //Decrementamos su valor
      $('#cantidadInput').val(parseInt($('#cantidadInput').val()) - 1);
  });

  $('#plus').click(function () {
    //Aumentamos el valor del campo
    $('#cantidadInput').val(parseInt($('#cantidadInput').val()) + 1);
  });

  $('#logout-modal').modal('show');
});

// BTN TOGGLE SOCIAL
$('.container-social').hide();
$('#btn-dialog-social-ocultar').hide();

$('#btn-dialog-social').click(function () {
  $('.container-social').show();
  $('#btn-dialog-social').hide();
  $('#btn-dialog-social-ocultar').show();
});

$('#btn-dialog-social-ocultar').click(function () {
  $('.container-social').hide();
  $('#btn-dialog-social').show();
  $('#btn-dialog-social-ocultar').hide();
});

$('#viewRegister').click(function () {
  $('#loginModal').modal('hide');
  $('#modalRegister').modal('show');
});

$('#recuperar').click(function () {
  $('#loginModal').modal('hide');
  $('#modalRegister').modal('hide');
  $('#passwordModal').modal('show');
});
