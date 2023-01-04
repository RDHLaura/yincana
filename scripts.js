import puzzles from './data.json' assert { type: 'JSON' };
console.log(puzzles)
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
    <div class="text-center" id="container-keyword">
        <input id="input-keyword" type="text" class=" mb-4 w-75 rounded p-2" placeholder="Palabra clave">
        <button onclick="nextPuzzle()" id="start_yincana" type="button" class=" btn btn-success btn-lg w-auto " autofocus>Siguiente</button>
    </div>        
    <p class="text-white fw-bolder mt-3 display-4" id="ahorcado"></p>
    <img id="imagen" src="" alt="" class="w-75 m-3">  
    <div id="audio"></div>    
</section>`;


//const puzzles = [


/////////////////////lógica del programa//////////////////////////////////////

//inicia la yincana, carga los datos de la primera prueba 
function start (){   
    localStorage.setItem('keyword', puzzles[0].keyword); 
    update_main(puzzle)
    nextPuzzle()
}


function nextPuzzle (){   
    //si no se ha recargado la pag coge el valor del input y si no hay nada el de la key del localstorage
    const input_keyword = document.getElementById("input-keyword").value || localStorage.getItem("keyword") 
    const next_puzzle = puzzles.filter(element=>{return element.keyword===input_keyword.toLowerCase()});
    //si la palabra clave no coincide con ningún reto carga la pantalla de inicio, en caso contrario carga los datos del siguiente reto
    if(next_puzzle.length !== null){
        document.getElementById("input-keyword").value = ""; //limpia el valor del input keyword
        localStorage.setItem('keyword', next_puzzle[0].keyword);
        //elimina el nodo del input si se trata del último reto
        if(next_puzzle[0].keyword === puzzles[puzzles.length - 1].keyword){
            document.getElementById("container-keyword").remove();
            localStorage.removeItem("keyword")
        }
        update_puzzle(next_puzzle[0])
    }else{
        update_main(inicio)
    }    
}

//actualiza la vista con los datos de la siguiente prueba y almacena la última clave obtenida en el localstorage
function update_puzzle(pz){    
    document.getElementById('puzzle_name').innerHTML =pz.nombre
    document.getElementById('puzzle_description').innerHTML = pz.acertijo
    document.getElementById('imagen').src= pz.imagen
    document.getElementById('ahorcado').innerHTML =pz.ahorcado
    document.getElementById('audio').innerHTML =pz.audio
    
}


//cuando la pantalla carga si no hay ningún reto resuelto accede a la pág inicial, en caso contrario va al reto que corresponda
window.onload = ()=>{ 
    if (localStorage.getItem("keyword")!== null){
        update_main(puzzle)
        nextPuzzle();
    }else{
        update_main(inicio)
    }
}

//actualiza el nodo main con el contenido que se le pasa por parámetro
function update_main(content){
    const main = document.getElementById('main');
    main.innerHTML = content;  
}