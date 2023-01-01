
//vistas
const inicio = `<header class="pb-5">
<h1 class="text-white fw-bolder text-break display-1">Yincana</h1>
</header>
<section class=" d-flex flex-column justify-content-center ">
<h2 class="text-center">Bienvenido a la yincana de los Reyes Magos</h2>
<p class="text-center">Encuentra tus regalos</p>
<div class="text-center">
<button onclick="start()" id="start_yincana" type="button" class=" btn btn-light btn-lg w-auto">Empezar</button>
</div>        
</section>`;

const puzzle =`<header class="pb-5">
<h1 class="text-white fw-bolder text-break display-1">Prueba 1</h1>
</header>
<section class=" d-flex flex-column justify-content-center ">
<h2 id="puzzle_name" class="text-center"></h2>
<p id="puzzle_description" class="text-center"></p>
<div class="text-center">
    <input id="input-keyword" type="text" class="form-control mb-2" placeholder="Palabra clave">
    <button onclick="nextPuzzle()" id="start_yincana" type="button" class=" btn btn-light btn-lg w-auto">Siguiente</button>
</div>        
</section>`;

const puzzles = [
    {
        "nombre": "primer prueba",
        "keyword": "",
        "acertijo": "siguiente"
    },
    {
        "nombre": "Arco1",
        "keyword": "palabra_clave1",
        "acertijo": "Lo que sea"
    },
    {
        "nombre": "Arco2",
        "keyword": "palabra_clave2",
        "acertijo": "Lo que sea"
    },
    {
        "nombre": "Arco3",
        "keyword": "palabra_clave3",
        "acertijo": "Lo que sea"
    },
    {
        "nombre": "Arco4",
        "keyword": "palabra_clave4",
        "acertijo": "Lo que sea"
    }
];

let main = document.getElementById('main');

function start (){
    
    update_main(puzzle)
    nextPuzzle()
}

function nextPuzzle (cookie = null){    
    let input_keyword = null
    if(cookie === null){
        input_keyword = document.getElementById("input-keyword").value || "";
    }else{
        input_keyword = cookie
    }
        

    switch (input_keyword) {
        case puzzles[4].keyword:  
        console.log(4)          
            content_puzzle = puzzles[4]
            storage_keyword(puzzles[4].keyword)
            update_puzzle(puzzles[4])
            break;

        case puzzles[3].keyword:
            console.log(3)
            content_puzzle = puzzles[3]
            storage_keyword(puzzles[3].keyword)
            update_puzzle(puzzles[3])
            break;

        case puzzles[2].keyword:
            console.log(2)
            content_puzzle = puzzles[2]
            storage_keyword(puzzles[2].keyword)
            update_puzzle(puzzles[2])
            break;

        case puzzles[1].keyword:
            console.log(1)
            storage_keyword(puzzles[1].keyword)
            update_puzzle(puzzles[1])
            break;

        case puzzles[0].keyword:
            console.log(0)
            content_puzzle = puzzle[0]
            storage_keyword(puzzles[0].keyword)
            update_puzzle(puzzles[0])
            break;

    }
}

function update_puzzle(pz){
    console.log("update_puzzle")
    document.getElementById('puzzle_name').innerHTML =pz.nombre
    document.getElementById('puzzle_description').innerHTML = pz.acertijo
}

function storage_keyword (keyword){
    localStorage.setItem('keyword', keyword);
}

window.onload = ()=>{
    if (localStorage.getItem("keyword")!== ""){
        update_main(puzzle)
        nextPuzzle(localStorage.getItem("keyword"));
    }else{
        update_main(inicio); 
    }
}


function update_main(content){
    main.innerHTML = content;  
}