// OJO MUESTRA MODAL COMPARTIR
$(document).ready(function () {
  $('#order-confirmation-modal').modal('show');
  $('#HideComent').hide();
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

// Show Coments
// Show
$('#ShowComent').click(function () {
  $('#comentarios').collapse('show');
  $('#ShowComent').hide();
  $('#HideComent').show();
});
// Hide
$('#HideComent').click(function () {
  $('#comentarios').collapse('hide');
  $('#HideComent').hide();
  $('#ShowComent').show();
});
