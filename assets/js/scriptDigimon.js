console.clear;



consumeAPI("https://digimon-api.vercel.app/api/digimon");


/* var aRefresh = document.getElementById('aRefresh');
aRefresh.addEventListener('click', _ => {
            location.reload();
}) */

var aHome = document.getElementById('aHome');
aHome.addEventListener('click', function () {
    location.reload();

});

function eliminaNodos(pTag) {
    /*  Elimina los hijos de un determinado Tag.
        Por ejemplo: elimina todas las tarjetas de digimones existentes en la pagina
        Es decir, se eliminan todos los hijos del div con id ="tarjetaDigimon
    */
        /* "tarjetaDigimon" */
    console.log("dentro de eliminaNodos -->" + pTag)
    var elemento = document.getElementById(pTag);
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

};

var btnBuscar = document.querySelector('#btnBuscar');
btnBuscar.addEventListener('click', function () {
    var txtNombre = document.querySelector('#txtNombre');

    console.log(btnBuscar);
    let urlBase = "https://digimon-api.vercel.app/api/digimon/name/" + txtNombre.value;

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
            /* 
            console.log("============ EL RESPONSE ============")
            console.log(response);
            console.log("============ FIN RESPONSE ============")
            console.log("se pinta tarjeta"); 
            */
            var tarjetaDigimon = document.querySelector('#tarjetaDigimon');
            //console.log(tarjetaDigimon);

            eliminaNodos("tarjetaDigimon");  /* se eliminan todas la tarjetas de digimones previamente existentes en la pagina */

            /* var response = consumeAPI(urlBase); */

            var cont = 0;
            var txtInnerHtml = "";
            var abierto = false;
            
            response.forEach(function (objDigimon) {
                cont += 1;
    
                if (cont == 1) {
                    txtInnerHtml += `<div class="row">`;
                    abierto = true;
                } 
                
                //console.log(objDigimon);

                txtInnerHtml += `<div class="col-12 col-md-6 col-lg-3">`;
                txtInnerHtml += `<div class="card">`;
                txtInnerHtml += `<img src="${objDigimon.img}" class="card-img-top img-fluid img-thumbnail" alt="imagen de ${objDigimon.name}">`;
                txtInnerHtml += `<div class="card-body">`;
                txtInnerHtml += `<h5 class="card-title">${objDigimon.name}</h5>`;
                txtInnerHtml += `<p class="card-text">Nivel: ${objDigimon.level}</p>`;
                txtInnerHtml += `</div>`;
                txtInnerHtml += `<button type="button" id="${objDigimon.name}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">`
                txtInnerHtml += `Ver detalle de ${objDigimon.name}`
                txtInnerHtml += `</button>`
                txtInnerHtml += "</div>"
                txtInnerHtml += "</div>"
                //console.log(txtInnerHtml);

                if (cont == 4) {
                    txtInnerHtml += "</div>";
                    abierto = false;
                    cont =0;
                }
            });
            
            if (abierto ) {
                console.log("quedo abierto, asi que se cierra el div");
                txtInnerHtml += "</div>";
                abierto = false;
            }
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

function mostrarModal(nombreDigimon) {
    // Lógica para mostrar el modal con la información del digimon correspondiente

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
            var tarjetaDigimonModal = document.querySelector('#staticBackdrop');
            console.log(tarjetaDigimonModal);

            eliminaNodos("staticBackdrop");  /* se eliminan los nodos dependientes de staticBackdrop */

            /* var response = consumeAPI(urlBase); */

            let txtInnerHtml = "";
            
            response.forEach(function (objDigimon) {
                console.log("------INICIO objDigimon------");
                console.log(objDigimon);
                console.log("------FIN objDigimon------");

                // Se construye string con nodos de la pantalla modal con 
                // información del digimon seleccionado
                txtInnerHtml += `<div class="modal-dialog">`;
                txtInnerHtml += `   <div class="modal-content">`;
                txtInnerHtml += `       <div class="modal-header">`;
                txtInnerHtml += `           <h1 class="modal-title fs-5" id="staticBackdropLabel">Detalle de digimon seleccionado</h1>`;
                txtInnerHtml += `           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
                txtInnerHtml += `       </div>`;
                txtInnerHtml += `       <div class="modal-body">`;
                txtInnerHtml += `           <div class="row">`;
                txtInnerHtml += `               <div class="col">`;
                txtInnerHtml += `                   <img src="${objDigimon.img}" class="card-img-top img-fluid img-thumbnail" alt="imagen de ${objDigimon.name}">`;
                txtInnerHtml += `               </div>`;
                txtInnerHtml += `               <div class="col">`;
                txtInnerHtml += `                   <h3 class="card-text">Nombre: ${objDigimon.name}</h3>`;
                txtInnerHtml += `                   <h3 class="card-text">Nivel: ${objDigimon.level}</h3>`;
                txtInnerHtml += `               </div>`;
                txtInnerHtml += `           </div>`;
                txtInnerHtml += `       </div>`;
                txtInnerHtml += `       <div class="modal-footer">`;
                txtInnerHtml += `           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>`;
                txtInnerHtml += `       </div>`;
                txtInnerHtml += `   </div>`;
                txtInnerHtml += `</div>`;
            });
            tarjetaDigimonModal.innerHTML = txtInnerHtml; 
        },
        error: function (error) {

            console.log("============INICIO captura de error================");
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




