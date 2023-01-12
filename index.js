$("#teste").click(function () {
    $('.menu-menu').toggleClass('show')
    $('.box-menu').removeClass('box-menu')
    $('.box-menu').addClass('bx-chevron-down')
});

$("#add").click(function () {

});


let i = 0

var nomes = new Array();
var curso = new Array();
var nota = new Array();


$('#add').click(function () {
    nomes.push($('#nome').val());
    curso.push($('#curso').val());
    nota.push($('#nota').val());
    listar()
    lista1()
})


function listar() {
    $('#lista').html(
        "<h1>" + nomes[i] + "</h1>" +
        "<h4>" + curso[i] + "</h4>" +
        "<span>" + nota[i] + "</span>"
    );

    i++
}

function lista1() {
    let text = ""
    const fruits = ["apple", "orange", "cherry"]
    fruits.forEach(myFunction);

    document.getElementById("lista1").innerHTML = text

    function myFunction(item, index) {
        text += index + ": " + item + "<br>";
    }
}
