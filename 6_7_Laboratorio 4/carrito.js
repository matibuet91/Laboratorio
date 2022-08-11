function copiarNombre(){
    //busco el input para tomar el nombre
    var miNombre = document.getElementById('nombre');
    //busco el label donde quiero copiar el dato
    var miNombreCopiado = document.getElementById('minombrecopiado');
    //limpiar el contenido anterior:
    miNombreCopiado.innerHTML = '';
    //tomamos el nombre ingresado en el input y lo asignamos a nuestro label
    miNombreCopiado.innerHTML = 'Mi nombre es: ' + miNombre.value;
}

function cambiarIcono(){
    //busco el logo
    var logo = document.getElementById('logo');
    logo.src = './imagenes/envios.jpg';
    logo.height= '50';

    var labelPrincipal = document.getElementById('porId');
    //muestro el color original
    alert(labelPrincipal.style.color);

    labelPrincipal.style.color = 'red';
    //mostramos el color luego de cambiarlo
    alert(labelPrincipal.style.color);
}

document.addEventListener('DOMContentLoaded', function () {
    // alert('Hola Mundo');

    //ESTOY HACIENDO UNA BUSQUEDA POR ID
    document.getElementById('porId').innerHTML = 'Elemento por id';

    //ESTOY HACIENDO UNA BUSQUEDA POR ETIQUETA
    var myEtiqueta = document.getElementsByTagName('span');
    myEtiqueta[0].innerText = myEtiqueta[0].innerHTML + 'Elemento por etiqueta';
    myEtiqueta[1].innerHTML = myEtiqueta[1].innerHTML + 'Elemento 2 por etiqueta';

    // var myEtiqueta2 = document.getElementsByTagName('span');
    // myEtiqueta2[1].innerHTML = myEtiqueta2[1].innerHTML + 'Esta etiqueta es por otra busqueda';

    //ESTOY HACIENDO UNA BUSQUEDA POR NOMBRE
    document.getElementsByName('porNombre')[0].innerHTML = 'Elemento por nombre';

    //ESTOY HACIENDO UNA BUQUEDA POR CLASE
    document.getElementsByClassName('porClase')[0].innerHTML = 'Elemento por clase';




}, false);