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



//////////////////////////////contenido de las pruebas///////////////////////////////////777
const puzzles = [
    {
        "nombre": "Primera prueba",
        "keyword": "inicio",
        "acertijo": "Siguiendo la estrella de oriente hasta aquí hemos llegado, si miras debajo de ella obtendras tu pista para hallar tus regalos.",
        "ahorcado": "",
        "imagen": "",
        "audio": ""
    },
    {
        "nombre": "Segunda prueba",
        "keyword": "tata la mejor",
        "acertijo": "Aunque tengo cuatro patas,<br>yo nunca puedo correr,<br>tengo la comida encima,<br>y no la puedo comer.<br>",
        "ahorcado": "",
        "imagen": "",
        "audio": ""
    },
    {
        "nombre": "Tercera prueba",
        "keyword": "arco",
        "acertijo": "En el patio tendrás que cazar tu siguiente pista, afina tu puntería.",
        "ahorcado": "",
        "imagen": "",
        "audio": ""
    },
    {
        "nombre": "Cuarta prueba",
        "keyword": "escalada",
        "acertijo": "Agrio es su sabor, bastante dura su piel y si lo quieres tomar tienes que estrujarlo bien.",
        "ahorcado": "",
        "imagen": "",
        "audio": ""
    },
    {
        "nombre": "Quinta prueba",
        "keyword": "usalo",
        "acertijo": "Por un túnel subo,<br>por un túnel bajo, <br>y si me aprietas un botón,<br>te hago caso",
        "ahorcado": "",
        "imagen": "",
        "audio": ""
    },
    {
        "nombre": "Sexta prueba",
        "keyword": "encuentrala",
        "acertijo": "Se acerca el final<br>y aunque el lugar puedas encontrar <br>sin la llave no podrás entrar.",
        "ahorcado": "",
        "imagen": "",
        "audio": ""
    },
    {
        "nombre": "Quiz Game",
        "keyword": "palabra final",
        "acertijo": "Al ahorcado tendrás que jugar si la última pista quieres completar.<br>Tendrás una letra por cada respuesta correcta.<br><br>¿A qué país pertence esta bandera?",
        "ahorcado": "_ _ _ _ _ _ _",
        "imagen": "./images/bandera_quiz.jpg",
        "audio": ""
    },
    {
        "nombre": "Quiz Game", //11
        "keyword": "sudafrica",
        "acertijo": "¿Cúal es el único número que tiene tantas letras como indica su cifra",
        "ahorcado": "_ _ M _ _ _ _",
        "imagen": "",
        "audio": ""
    },

    {
        "nombre": "Quiz Game", //por aquí
        "keyword": "cinco",
        "acertijo": "Descubre la película que tu madre te escenifica a continuación...",
        "ahorcado": "_ _ M _ _ T _",
        "imagen": "",
        "audio": ""
    },
    {
        "nombre": "Quiz Game", //9
        "keyword": "solo en casa",
        "acertijo": ` ¿Qué hechizo usó Harry para matar a Lord Voldemort?<br>
        A. expelliarmus<br>
        B. Expecto Patronum<br>
        C. Avada Kedavra<br>
        D. accio<br>`,
        "ahorcado": "_ A M _ _ T _",
        "imagen": "",
        "audio": ""
    },
    {
        "nombre": "Quiz Game", //10
        "keyword": "expelliarmus",
        "acertijo": "¿Cual de los siguientes es un adverbio de lugar?<br>A. ay<br>B. hay<br>C. ahí<br>D. ai",
        "ahorcado": "_ A M A _ T _",
        "imagen": "",
        "audio": ""
    },
    {
        "nombre": "Quiz Game", //11
        "keyword": "ahi",
        "acertijo": "Si un gallo pone 3 huevos cada 2 días. ¿Cuántos días tardarán 4 gallos en poner 2 docenas de huevos?",
        "ahorcado": "_ A M A S T _",
        "imagen": "",
        "audio": ""
    },
    {
        "nombre": "Quiz Game",
        "keyword": "dos",
        "acertijo": "Completa la frase de la canción...",
        "ahorcado": "_ A M A S T E",
        "imagen": ".",
        "audio": `<audio controls>
        <source src="./audio/lapatrulla.mp3" type="audio/mpeg">    
        </audio>`
    },

    {
        "nombre": "¡A por ellos!", //11
        "keyword": "la maria para que no te lleven a comisaria",
        "acertijo": "Los regalos se esconden bajo un remanso de paz",
        "ahorcado": "N A M A S T E",
        "imagen": "Los regalos se esconden bajo un remanso de paz",
        "audio": ""
    },

];


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