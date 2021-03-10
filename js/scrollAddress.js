// Nos permite mostrar el formulario para agregar una nueva direccion y
// hace un scroll haci el elemento que contiene el form
$(document).ready(function () {
  $('#contentAddAddress').hide();

  $('#btnAddAddress').click(function () {
    if ($('#contentAddAddress').is(':hidden')) {
      $('#contentAddAddress').show();
      $('html,body').animate(
        {
          scrollTop: $('#contentAddAddress').offset().top,
        },
        300
      );
    } else {
      $('#contentAddAddress').hide();
    }
  });
});
