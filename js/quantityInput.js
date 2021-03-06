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
});
