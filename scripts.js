//////////////////////////////////vistas//////////////////////////////////////////////
const inicio = `<header class="pb-2">
<h1 class="text-white fw-bolder text-break display-1">Yincana</h1>
</header>
<section class=" d-flex flex-column justify-content-center ">
<h2 class="text-center text-white fw-bold">Regalos perdidos</h2>
<p class="text-center text-white p-3">Hace unos días, una gran tormenta de arena en el desierto sorprendió a nuestros queridos Reyes Magos….Cuando finalmente se pudieron refugiar, ¡vieron que sus camellos habían desaparecido y con ellos, toda la carga que llevaban! Ahora necesitan la ayuda de todos los niños del mundo para poder llegar a tiempo en la entrega de los regalos</p>
<div class="text-center">
<button onclick="start()" id="start_yincana" type="button" class=" btn btn-success btn-lg w-auto">Empezar</button>
</div>        
</section>`;

const puzzle =`<header class="p-3 m-0">
    <h1 id="puzzle_name" class="text-white fw-bolder text-break display-1"></h1>
</header>
<section class=" d-flex flex-column align-items-center">
    <p id="puzzle_description" class="text-center text-white p-3 "></p>
    <div class="text-center">
        <input id="input-keyword" type="text" class=" mb-4 w-75 rounded p-2" placeholder="Palabra clave">
        <button onclick="nextPuzzle()" id="start_yincana" type="button" class=" btn btn-success btn-lg w-auto ">Siguiente</button>
    </div>     
    <img id="mapa-tesoro" src="" alt="" class="w-75 m-3">   
</section>`;

//////////////////////////////contenido de las pruebas///////////////////////////////////777
const puzzles = [
    {
        "nombre": "Primera prueba",
        "keyword": "",
        "acertijo": "Siguiendo la estrella de oriente hasta aquí hemos llegado, si miras debajo obtendras tu pista para hallar tus regalos.",
        "mapa_tesoro": "./images/mapa_tesoro.jpg"
    },
    {
        "nombre": "Segunda prueba",
        "keyword": "tata la mejor",
        "acertijo": "Aunque tengo cuatro patas,<br>yo nunca puedo correr,<br>tengo la comida encima,<br>y no la puedo comer.<br>",
        "mapa_tesoro": "./images/mapa_tesoro.jpg"
    },
    {
        "nombre": "Tercera prueba",
        "keyword": "arco",
        "acertijo": "En el patio tendrás que cazar tu siguiente pista, afina tu puntería.",
        "mapa_tesoro": "./images/mapa_tesoro.jpg"
    },
    {
        "nombre": "Cuarta prueba",
        "keyword": "escalada",
        "acertijo": "Agrio es su sabor, bastante dura su piel y si lo quieres tomar tienes que estrujarlo bien.",
        "mapa_tesoro": "./images/mapa_tesoro.jpg"
    },
    {
        "nombre": "Quinta prueba",
        "keyword": "usalo",
        "acertijo": "Por un túnel subo,<br>por un túnel bajo, <br>y si me aprietas un botón,<br>te hago caso",
        "mapa_tesoro": "./images/mapa_tesoro.jpg"
    },
    {
        "nombre": "Sexta prueba",
        "keyword": "key",
        "acertijo": "Se acerca el final<br> y aunque el lugar puedas encontrar <br>sin la llave no podrás entrar.",
        "mapa_tesoro": "./images/mapa_tesoro.jpg"
    },
    {
        "nombre": "Séptima prueba",
        "keyword": "respira",
        "acertijo": "Los regalos se esconden bajo un remanso de paz",
        "mapa_tesoro": "./images/mapa_tesoro.jpg"
    }
];

/////////////////////7lógica del programa//////////////////////////////////////

let main = document.getElementById('main');

//inicia la yincana, carga los datos de la primera prueba
function start (){    
    update_main(puzzle)
    nextPuzzle()
}

function nextPuzzle (cookie = null){    
    let input_keyword = ""
    if(cookie === null){
        input_keyword = document.getElementById("input-keyword").value || "";
        document.getElementById("input-keyword").value = ""; 
    }else{
        input_keyword = cookie
    }
        

    switch (input_keyword.toLowerCase()) {
        case puzzles[6].keyword:   
            localStorage.setItem('keyword', puzzles[6].keyword);
            content_puzzle = puzzles[6]
            update_puzzle(puzzles[6])
            break;
        case puzzles[5].keyword:   
            localStorage.setItem('keyword', puzzles[5].keyword);
            content_puzzle = puzzles[5]
            update_puzzle(puzzles[5])
            break;
        case puzzles[5].keyword:   
            localStorage.setItem('keyword', puzzles[5].keyword);
            content_puzzle = puzzles[5]
            update_puzzle(puzzles[5])
            break;
        case puzzles[4].keyword:   
            localStorage.setItem('keyword', puzzles[4].keyword);
            content_puzzle = puzzles[4]
            update_puzzle(puzzles[4])
            break;

        case puzzles[3].keyword:
            localStorage.setItem('keyword', puzzles[3].keyword);
            content_puzzle = puzzles[3]
            update_puzzle(puzzles[3])
            break;

        case puzzles[2].keyword:
            localStorage.setItem('keyword', puzzles[2].keyword);
            content_puzzle = puzzles[2]
            update_puzzle(puzzles[2])
            break;

        case puzzles[1].keyword:
            localStorage.setItem('keyword', puzzles[1].keyword);
            update_puzzle(puzzles[1])
            break;

        case puzzles[0].keyword:
            content_puzzle = puzzle[0]
            update_puzzle(puzzles[0])
            break;

    }
}

//actualiza la vista con los datos de la siguiente prueba y almacena la última clave obtenida en el localstorage
function update_puzzle(pz){    
    document.getElementById('puzzle_name').innerHTML =pz.nombre
    document.getElementById('puzzle_description').innerHTML = pz.acertijo
    document.getElementById('mapa-tesoro').src= pz.mapa_tesoro
}



//cuando la pantalla carga si no hay ningún reto resuelto accede a la pág inicial, en caso contrario va al reto que corresponda
window.onload = ()=>{
    if (localStorage.getItem("keyword")!== null){
        console.log( "entra")
        update_main(puzzle)
        nextPuzzle(localStorage.getItem("keyword"));
    }else{
        update_main(inicio)
    }
}

//actualiza el nodo main con el contenido que se le pasa por parámetro
function update_main(content){
    main.innerHTML = content;  
}