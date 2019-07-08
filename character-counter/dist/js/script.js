$(document).on("input", ".counter", function () {
    var limite = 100;
    var caracteresDigitados = $(this).val().length;
    var caracteresRestantes = limite - caracteresDigitados;

    $(".characters").text(caracteresRestantes);

});