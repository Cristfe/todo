function filtrarXprioridad(pListaTareas, pPrioridad) {
    let listaXPrioridad = new Array();

    listaXPrioridad = pListaTareas.filter(tarea => tarea.prioridad == pPrioridad.toLowerCase());

    return listaXPrioridad;
}

function filtrarXId(pListaTareas, pIdMin, pIdMax, pRango = "interior") {
    let listaFiltrada = new Array();

    let filtrar = (parseInt(pIdMax) >= parseInt(pIdMin)) ? true : false;


    if (pRango == 'interior' && filtrar == true) {
        listaFiltrada = pListaTareas.filter(tarea => tarea.idTarea >= pIdMin && tarea.idTarea <= pIdMax);
    } else if (pRango == "exterior" && filtrar == true) {
        listaFiltrada = pListaTareas.filter(function(tarea) {
            return (tarea.idTarea >= 0 && tarea.idTarea <= pIdMin) || (tarea.idTarea >= pIdMax && tarea.idTarea <= 1000);
        })
    } else {
        alert('Id maxima es menor que id minima');
    }

    return listaFiltrada;

}

let seccionTareas = document.querySelector('#tareas');

function pintarTareas(pListaTareas) {
    seccionTareas.innerHTML = "";
    pListaTareas.forEach(tarea => pintarTarea(tarea));
}

function pintarTarea(pTarea) {

    let article = document.createElement('article');
    let button = document.createElement('button')
    button.id = "borrar";
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    let liId = document.createElement('li');
    let div = document.createElement('div');
    div.className = "prioridad";


    let contentButton = document.createTextNode('Borrar')
    let contentH3 = document.createTextNode(pTarea.titulo);
    let contentPrioridad = document.createTextNode(pTarea.prioridad);



    liId.innerText = 'ID Tarea: ' + pTarea.idTarea

    button.appendChild(contentButton);
    h3.appendChild(contentH3);

    div.appendChild(contentPrioridad);


    ul.appendChild(liId);
    article.appendChild(button);
    article.appendChild(h3);

    article.appendChild(ul);
    article.appendChild(div);


    seccionTareas.appendChild(article);

}

let listaTareasPorMensual = filtrarXprioridad(tareas, 'urgente');
let listaTareasPorUrgentePorId = filtrarXId(listaTareasPorMensual, 0, 1000);

pintarTareas(tareas);


function buscarXtitulo(pListaTareas, pTitulo) {
    let listaFiltrada = pListaTareas.filter(tareas =>
        tareas.titulo.includes(pTitulo));

    return listaFiltrada
}

function agregarTarea(pListaTareas, pTitulo, pPrioridad) {

    let nuevaTarea = {

        titulo: pTitulo,
        prioridad: pPrioridad,
    }

    pListaTareas.push(nuevaTarea);
    pintarTareas(tareas)
}