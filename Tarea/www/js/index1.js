// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
document.addEventListener('deviceready', function(){
   
  $('#ini').bind('click', inicio);
}, false);

document.addEventListener('deviceready', function(){
   var nombre=localStorage.getItem('nombre');
    $('#nombre').html(localStorage.getItem('nombre'));

    var  ayer= localStorage.getItem('ayer');
    var ayer1= ayer.substr(0,-10);
    var ayer2=ayer.substr(-8)
 ayer.split(",");
     var  hoy= localStorage.getItem('hoy');
    var maniana=localStorage.getItem('maniana');
    var resp;
    if(nombre.toUpperCase()==ayer[1].toUpperCase()){
        resp=" Ayer estuvo de santo, feliz santo atrazado";
    }else{
        if(nombre.toUpperCase()==ayer[0].toUpperCase()){
             resp=" Ayer estuvo de santo, feliz santo atrazado";
        }else{
            if(nombre.toUpperCase()==hoy.toUpperCase()){
                resp=" Muchas Felicidades por su santo, paselo bien";
            }else{
                if(nombre.toUpperCase()==maniana.toUpperCase()){
                    resp=" Maniana estara de santo, disfrutelo";
                }else{
                    resp=" No estara de santo proximamente";
                }
            }
        }
    }
    
    $('#hoy').html(localStorage.getItem('hoy'));
    $('#ayer').html(localStorage.getItem('ayer'));
    $('#maniana').html(localStorage.getItem('maniana'));
    $('#dolar').html(localStorage.getItem('dolar'));
    $('#euro').html(localStorage.getItem('euro'));
    $('#uf').html(localStorage.getItem('uf'));
    $('#ipc').html(localStorage.getItem('ipc'));
        $('#utm').html(localStorage.getItem('utm'));
    $('#imacec').html(localStorage.getItem('imacec'));
    $('#normal').html(localStorage.getItem('normal'));
    $('#manhana').html(localStorage.getItem('manhana'));
    $('#catalitico').html(localStorage.getItem('catalitico'));
myApp.alert(resp,"tarea")

    
}, false);

function inicio(){
    window.location = "index.html";
}
