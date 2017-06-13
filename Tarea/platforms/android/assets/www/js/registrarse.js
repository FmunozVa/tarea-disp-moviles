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
    $("#reg").bind('click', exito);
    
}, false);





function exito(){
    var run = $('#run').val();
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var email = $('#email').val();
    var pass = $('#clave').val();
    var nick = $('#nick').val();
    
    if(run.length>0 && nombre.length > 0 && apellido.length > 0 && email.length > 0 && pass.length > 0 && nick.length>0 ){
       $.ajax({
          dataType: 'json',
          type: 'GET',
          data: {
              
              run :run,
              nombres: nombre,
              apellidos: apellido,
              email: email,
              pass: pass,
              nickname: nick
          },
          url: 'http://servicioswebmoviles.hol.es/index.php/REGISTER_UBB',
          
           success: function (data, status, xhr) {
                
              if(data.resp){
                 
                  myApp.hidePreloader();
                  window.location = "index.html";
             }else{
                  myApp.hidePreloader();
                  myApp.alert('Datos Incorrectos','Lab Evaluado');
            }
          },
         error: function (xhr, status) {
              myApp.hidePreloader();
            
              myApp.alert('Error!','Lab Evaluado');
             
          }
      });
        
    }else{
      myApp.alert('Debe Ingresar los datos solicitados','Lab Evaluado');
    }
}
    