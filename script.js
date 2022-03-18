//$(document).ready(function(){
 //   $("#barras").click(function(){
 //      $("#menu").toggleClass("#menu-ativo")
 //})
//})

$(document).ready(function(){
    $("#carrosel img:eq(0)").addClass("a-ativo").show()
})

setInterval(slide, 1000)
function slide(){
    if($(".a-ativo").next().length){
        $(".a-ativo").removeClass("a-ativo").hide().next().addClass("a-ativo").show()
    }else{
        $(".a-ativo").removeClass().hide()
        $("#carrosel img:eq(0)").addClass("a-ativo").show()
    }
}



function mostrar(){
    window.alert ("Bem vindo!")
}
let email = document.getElementById ("campo-email");

function enviaremail(){
    let emaildigitado = email.value;
    console.log(emaildigitado)
}
