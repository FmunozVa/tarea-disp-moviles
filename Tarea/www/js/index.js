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
   
    $('#sub').bind('click', listo);
 
}, false);

 
function listo(){
    var nombre = $('#nombre').val();
  
    if(nombre.length > 0 ){
      myApp.showPreloader('Iniciando sesión...');
      $.ajax({
          dataType: 'json',
          type: 'GET',
          data: {
              
          },
          url: 'http://indicadoresdeldia.cl/webservice/indicadores.json',
          
          success: function (data, status, xhr) {
                
         if(data!=null){
                 localStorage.setItem('nombre',nombre);
                    localStorage.setItem('ayer',data.santoral.ayer);
                    localStorage.setItem('hoy',data.santoral.hoy);
                     localStorage.setItem('maniana',data.santoral.maniana);
                    localStorage.setItem('dolar',data.moneda.dolar);
                     localStorage.setItem('euro',data.moneda.euro);
                     localStorage.setItem('uf',data.indicador.uf);
                      localStorage.setItem('ipc',data.indicador.ipc);
                      localStorage.setItem('utm',data.indicador.utm);
                      localStorage.setItem('imacec',data.indicador.imacec);
                     localStorage.setItem('normal',data.restriccion.normal);
                     localStorage.setItem('manhana',data.restriccion.normal_maniana);
                     localStorage.setItem('catalitico',data.restriccion.catalitico);
             
                myApp.hidePreloader();
                  window.location = "registro.html";
         
          }
            
         else{
              myApp.hidePreloader();
                  myApp.alert('Datos Incorrectos','Tarea'); 
                       
          }
      }
          
        
    });

             }else{
      myApp.alert('Debe Ingresar los datos solicitados','Lab Evaluado');
    }
}
    
 

