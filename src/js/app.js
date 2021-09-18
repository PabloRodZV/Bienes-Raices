document.addEventListener('DOMContentLoaded', function(){

    eventListener();
    darkMode();
});

function darkMode(){

    // Con este codigo puedo ver cual es el tema del sistema para aplicar mi dark mode
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode')  //Si el sistema esta como tema oscuro se va a agregar la clase darkmode
    } else {
        document.body.classList.remove('dark-mode') // si el sistema esta como claro se va a remover darkmode
    }
    // con este codigo deteca automaticamente si el sistema cambia y cambia el color de la pagina.
    prefiereDarkMode.addEventListener('change', function(){
        if(prefiereDarkMode.matches){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        } 
    })

    const botonDarkMode = document.querySelector('.dark-mode-boton');
       botonDarkMode.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');
       }); 
    
}

function eventListener(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);

    
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    } else{
        navegacion.classList.add('mostrar');
    }
}
