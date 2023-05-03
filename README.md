
![Imagen de portada](https://user-images.githubusercontent.com/128870121/235820757-1c8c2ccf-0764-4878-9c61-cf644328f17d.jpg)


<h3> Ejercicio de consolidación módulo 02 </h3>
<h2> Consumo de API Digimon</h2>

(Es lo mejor que pude con mis actuales conocimientos de bootstrap y javascript.)

Traté de reutilizar el consumo de la API en los tres llamados existentes, pero no me fue posible ya que me daba error "undefined" pusto que la página se estaba cargando más rápido que la respuesta
de la API y como aún no manejo correctamente el tema de las promesas y await's, entonces no tuve otra opción que replicar el llamado a la API (dos funciones con distintos endpoints).  Ambos endpoints los había manejado como paso por parámetro hacia una única función, pero no logré resolver el tema de la asincronia, así que tuve que replicar el llamado :(

<h3>La página (index.html) cuenta con:</h3>

1. Un link "Digimon Catálogo" el cual permite refrescar la página.  
2. Un cuadro de búsqueda por nombre de digimon y su correspondiente botón buscar.  
3. Un botón "Ver detalle de YYY", donde YYY es el nombre del digimon seleccionado y permite abrir una pantalla modal.  
4. Un botón de modo oscuro/modo claro que permite al usuario seleccionar el "modo" que desee según su preferencia  
   - (esto fue sacado de un tutorial --> https://www.youtube.com/watch?v=R1V4CvKgNUI) y los iconos se obtienen a traves del CDN de iconos de bootstrap  

![image](https://user-images.githubusercontent.com/128870121/235825252-0f3bd2af-acb8-4932-b898-f84edb945560.png)
![image](https://user-images.githubusercontent.com/128870121/235825290-42de7fdf-11eb-4f64-8c97-a22eb5fd9c38.png)


***Funcionamiento:***

***Al cargar la pagina "index.html":***  
1. Se realiza llamado a API para obtener todos los digimones.  
2. Si el llamado es exitoso, entonces:  
   - A través de uso del DOM se eliminan todas las tarjetas de digimones previamente cargadas en la pagina (si es que existen)  
   - Se agrega dinamicamente a la pagina cada digimon obtenido a través de tarjetas bootstrap 5.3; por cada digimon se agrega una nueva tarjeta  
   - además, en cada tarjeta se agrega un control de evento al botón "Ver detalle de..." para posteriormente poder visualizar en una ventana modal el detalle de un determinado digimon.  
  
***Al pinchar el titulo "Digimon Catálogo":***  
1. Se recarga la página (por ende se ejecutan las mismas acciones del punto anterior).


***Al realizar búsqueda de un determinado Digimon:***  
1. Se llama a API con la url del endpoint de búsqueda por nombre.  
2. Si el llamado es exitoso:  
   - A través de uso del DOM se eliminan todas las tarjetas de digimones previamente cargadas en la pagina (si es que existen)  
   - Se agrega dinamicamente a la pagina una tarjeta con los datos del digimon seleccionado  
   - Se agrega un control de evento al botón "Ver detalle de..." de la tarjeta del digimon buscado (para posteriormente poder visualizar en una ventana modal el detalle del digimon seleccionado)  
3. Si el llamado no es exitoso:  
   - Si la API devuelve error 400, entonces se emite alerta de que el nombre del digimon ingresado no existe. 
   - Si es otro código de error, entonces se emite el detalle del mensaje de error por consola y la pagina queda tal cual como está actualmente (no se eliminan tarjetas previas y no se pinta ninguna nueva tarjeta)  


***Al seleccionar botón "Ver detalle de <nombre_digimon>":***  

Ejemplo:  
![image](https://user-images.githubusercontent.com/128870121/235824259-9b206a5f-10fd-439d-ab0b-c34bfd85cb53.png)

1. Se llama a API con la url del endpoint de búsqueda por nombre y se le pasa el nombre del digimon de la tarjeta seleccionada.  
2. Si el llamado es exitoso:  
   - A través de uso del DOM se eliminan todos los tag's asociados a una ventana modal (si es que existen)  
   - Se agrega dinamicamente a la pagina los tags relativos a la ventana modal con la información del digimon seleccionado.  
   - Se despliega la ventana modal.  
  
3. Si el llamado no es exitoso:  
   - Si la API devuelve error 400, entonces se emite alerta de que el nombre del digimon seleccionado no existe. 
   - Si es otro código de error, entonces se emite el detalle del mensaje de error por consola y la pagina queda tal cual como está actualmente (no se eliminan tarjetas previas y no se pinta ninguna nueva tarjeta)  

**(acabo de aprender algo de como construir este readme, nunca lo había realizado)**

