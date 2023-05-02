console.clear;


/* consumeAPI("https://digimon-api.vercel.app/api/digimon"); */
consumeAPI("https://digimon-api.vercel.app/api/digimon");

function borrarTarjetas() {
    /*
        elimina todas las tarjetas de digimones existentes en la pagina
        Es decir, se eliminan todos los hijos del div con id ="tarjetaDigimon
    */
    console.log("dentro de eliminartarjetas")
    var elemento = document.getElementById("tarjetaDigimon");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

};

var btnBuscar = document.querySelector('#btnBuscar');
btnBuscar.addEventListener('click', function () {
    var txtNombre = document.querySelector('#txtNombre');

    console.log(btnBuscar);
    let urlBase = "https://digimon-api.vercel.app/api/digimon/name/" + txtNombre.value;
    console.log(urlBase);



    consumeAPI(urlBase);
    txtNombre.value = '';

});




/* function consumeAPI(urlBase, esModal) { */

function consumeAPI(urlBase) {
    /* funcion que lee digimones desde la API */
    /* puede retornar 0,1 ó "n" digimones */
    /* retorna un arreglo de digimones */

    console.log("dentro de consumeAPI --> " + urlBase);
    $.ajax({
        type: "get",
        url: urlBase,
        dataType: "json",
        success: function (response) {
            console.log("============ EL RESPONSE ============")
            console.log(response);
            console.log("============ FIN RESPONSE ============")
            /* if (!esModal) {
                muestraTarjetas(response);
            } else {
                console.log("se pinta y abre el modal");
            }
            return (response); */
            console.log("se pinta tarjeta");
            var tarjetaDigimon = document.querySelector('#tarjetaDigimon');
            //console.log(tarjetaDigimon);

            borrarTarjetas();  /* se eliminan todas la tarjetas de digimones previamente existentes en la pagina */

            /* var response = consumeAPI(urlBase); */

            let txtInnerHtml = "";
            txtInnerHtml += `<div class="row">`;
            response.forEach(function (objDigimon) {
                //console.log(objDigimon);

                txtInnerHtml += `<div class="col-12 col-md-6 col-lg-3">`;
                txtInnerHtml += `<div class="card">`;
                txtInnerHtml += `<img src="${objDigimon.img}" class="card-img-top img-fluid img-thumbnail" alt="imagen de ${objDigimon.name}">`;
                txtInnerHtml += `<div class="card-body">`;
                txtInnerHtml += `<h5 class="card-title">${objDigimon.name}</h5>`;
                txtInnerHtml += `<p class="card-text">Nivel: ${objDigimon.level}</p>`;
                txtInnerHtml += `</div>`;
                txtInnerHtml += `<button type="button" id="${objDigimon.name}" class="btn btn-primary">Consultar</button>`;
                txtInnerHtml += "</div>"
                txtInnerHtml += "</div>"
                //console.log(txtInnerHtml);

            });
            txtInnerHtml += "</div>"
            tarjetaDigimon.innerHTML = txtInnerHtml;

            // se agrega un controlador de eventos a cada botón de ver detalles
            const botones = document.querySelectorAll('.btn-primary');
            console.log("===========BOTONES==================")
            console.log(botones);
            botones.forEach(function (boton) {
                boton.addEventListener('click', function (event) {
                    // Obtener el nombre del digimon (que es igual al ID del botón)
                    var nombreDigimon = event.target.id;

                    console.log(`clieck en ${nombreDigimon}`);
                    // Hacer algo con el nombre del digimon, como mostrar el modal correspondiente
                    mostrarModal(nombreDigimon);
                });
            });
        },

        error: function (error) {

            console.log("============INICIO captura de error================");
            /* console.log("RESPONSE:==>");
            console.log(response); */
            console.log("ERROR: ==>");
            console.log(error);
            if (error.status === 400) {
                alert(`${error.responseJSON.ErrorMsg}, por favor intentelo nuevamente`)
                console.error("Error 400: ", error.responseJSON.ErrorMsg);

            } else {
                console.error("Error no identificado:", error);
            }
            console.log("============FIN captura de error================");
            return null;
        }
    });
}


function muestraTarjetas(urlBase) {

}

/*
CODIGO PARA PASAR un objeto a un arreglo, se va a realizar esto sólo para el botón buscar, ya que el json para un único digimon no viene en un arreglo
y para no estar construyendo más de una función de llenado se prefiere pasarlo a un arreglo
y así siempre trabajar las respuestas de la API como un arreglo

const jsonString = '{"a": 1, "b": 2, "c": 3}';
const obj = JSON.parse(jsonString);
const arr = Object.entries(obj);
console.log(arr); // Output: [['a', 1], ['b', 2], ['c', 3]]

*/

// Agregar un controlador de eventos a cada botón
/* const botones = document.querySelectorAll('.btn-primary');
console.log("===========BOTONES==================")
console.log(botones);
botones.forEach(function (boton) {
    boton.addEventListener('click', function (event) {
        // Obtener el nombre del digimon (que es igual al ID del botón)
        const nombreDigimon = event.target.id;

        console.log(`clieck en ${nombreDigimon}`);
        // Hacer algo con el nombre del digimon, como mostrar el modal correspondiente
        mostrarModal(nombreDigimon);
    });
}); */

function mostrarModal(nombreDigimon) {
    // Lógica para mostrar el modal con la información del digimon correspondiente
    // ...
    console.log("llamado de la api dentro del modal ");
    console.log(nombreDigimon);
    let urlBase = "https://digimon-api.vercel.app/api/digimon/name/" + nombreDigimon;
    console.log(urlBase);
    console.log("dentro de consumeAPI --> " + urlBase);
    $.ajax({
        type: "get",
        url: urlBase,
        dataType: "json",
        success: function (response) {
            console.log("============ EL RESPONSE ============")
            console.log(response);
            console.log("============ FIN RESPONSE ============")
            /* if (!esModal) {
                muestraTarjetas(response);
            } else {
                console.log("se pinta y abre el modal");
            }
            return (response); */
            console.log("se pinta modal");
            var tarjetaDigimon = document.querySelector('#tarjetaDigimon');
            //console.log(tarjetaDigimon);

            
            /* var response = consumeAPI(urlBase); */

            let txtInnerHtml = "";
            txtInnerHtml += `<div class="row">`;
            response.forEach(function (objDigimon) {
                //console.log(objDigimon);

                txtInnerHtml += `<div class="col-12 col-md-6 col-lg-3">`;
                txtInnerHtml += `<div class="card">`;
                txtInnerHtml += `<img src="${objDigimon.img}" class="card-img-top img-fluid img-thumbnail" alt="imagen de ${objDigimon.name}">`;
                txtInnerHtml += `<div class="card-body">`;
                txtInnerHtml += `<h5 class="card-title">${objDigimon.name}</h5>`;
                txtInnerHtml += `<p class="card-text">Nivel: ${objDigimon.level}</p>`;
                txtInnerHtml += `</div>`;
                txtInnerHtml += `<button type="button" id="${objDigimon.name}" class="btn btn-primary">Consultar</button>`;
                txtInnerHtml += "</div>"
                txtInnerHtml += "</div>"
                //console.log(txtInnerHtml);

            });
            txtInnerHtml += "</div>"
            tarjetaDigimon.innerHTML = txtInnerHtml;

            
            
        },

        error: function (error) {

            console.log("============INICIO captura de error================");
            /* console.log("RESPONSE:==>");
            console.log(response); */
            console.log("ERROR en muestraModal: ==>");
            console.log(error);
            if (error.status === 400) {
                alert(`${error.responseJSON.ErrorMsg}, por favor intentelo nuevamente`)
                console.error("Error 400: ", error.responseJSON.ErrorMsg);

            } else {
                console.error("Error no identificado:", error);
            }
            console.log("============FIN captura de error================");
            return null;
        }
    });
};
