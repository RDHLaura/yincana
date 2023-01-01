//////////////////////////////////vistas//////////////////////////////////////////////
const inicio = `<header class="pb-5">
<h1 class="text-white fw-bolder text-break display-1">Yincana</h1>
</header>
<section class=" d-flex flex-column justify-content-center ">
<h2 class="text-center text-white">Bienvenido a la yincana de los Reyes Magos</h2>
<p class="text-center text-white">Encuentra tus regalos</p>
<div class="text-center">
<button onclick="start()" id="start_yincana" type="button" class=" btn btn-success btn-lg w-auto">Empezar</button>
</div>        
</section>`;

const puzzle =`<header class="p-3 m-0">
    <h1 id="puzzle_name" class="text-white fw-bolder text-break display-1"></h1>
</header>
<section class=" d-flex flex-column justify-content-center ">
    <p id="puzzle_description" class="text-center text-white pb-3 "></p>

    <div class="text-center">
        <input id="input-keyword" type="text" class=" mb-4 w-75 rounded p-2" placeholder="Palabra clave">
        <button onclick="nextPuzzle()" id="start_yincana" type="button" class=" btn btn-success btn-lg w-auto ">Siguiente</button>
    </div>        
</section>`;

//////////////////////////////contenido de las pruebas///////////////////////////////////777
const puzzles = [
    {
        "nombre": "Primera prueba",
        "keyword": "",
        "acertijo": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi at nunc imperdiet facilisis. Nulla facilisi. Nulla et orci nibh. Morbi faucibus tempor nibh eu viverra. Sed et tellus mi. Ut at porttitor turpis. Ut sagittis dolor porttitor sem porttitor condimentum. Vestibulum rutrum augue non mattis sodales.",
        "mapa_tesoro": "./images/mapa_tesoro.jpg"

    },
    {
        "nombre": "Segunda prueba",
        "keyword": "palabra_clave1",
        "acertijo": "Lo que sea",
        "mapa_tesoro": "./images/mapa_tesoro.jpg"
    },
    {
        "nombre": "Tercera prueba",
        "keyword": "palabra_clave2",
        "acertijo": "Lo que sea",
        "mapa_tesoro": "./images/mapa_tesoro.jpg"
    },
    {
        "nombre": "Cuarta prueba",
        "keyword": "palabra_clave3",
        "acertijo": "Lo que sea",
        "mapa_tesoro": "./images/mapa_tesoro.jpg"
    },
    {
        "nombre": "Quinta prueba",
        "keyword": "palabra_clave4",
        "acertijo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi at nunc imperdiet facilisis. Nulla facilisi. Nulla et orci nibh. Morbi faucibus tempor nibh eu viverra. Sed et tellus mi. Ut at porttitor turpis. Ut sagittis dolor porttitor sem porttitor condimentum. Vestibulum rutrum augue non mattis sodales.",
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
        

    switch (input_keyword) {
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