let selectPrioridad = document.querySelector('#prioridad');

selectPrioridad.addEventListener('change', capturarPrioridad);

function capturarPrioridad(event) {
    let prioridad = event.target.value;

    let listaFiltradaPorPrioridad = filtrarXprioridad(tareas, prioridad);

    pintarTareas(listaFiltradaPorPrioridad);

}
let inputTitulo = document.getElementById('tareaTitulo');
inputTitulo.addEventListener('input', capturarTitulo)

function capturarTitulo(event) {
    let titulo = event.target.value;
    let listaFiltradaTitulo = buscarXtitulo(tareas, titulo);
    pintarTareas(listaFiltradaTitulo);
}


inputTitulo = document.querySelector('#nuevaTarea');
let selectPrioridad2 = document.querySelector('#prioridad2')


selectPrioridad2.addEventListener('change', capturarAgregar)


function capturarAgregar(event) {

    let pListaTareas = tareas;
    let pTitulo = inputTitulo.value.toLowerCase();
    let pprioridad = selectPrioridad2.value.toLowerCase();
    let nuevaTarea = {

        titulo: pTitulo,
        prioridad: pprioridad,
    }


    pListaTareas.push(nuevaTarea)
    pintarTareas(tareas)
}

btnBorrar = document.getElementById('borrar');
btnBorrar.addEventListener('Click', borrarTarea);

function borrarTarea(event) {
    let tareaBorrar = document.getElementsByClassName("tarea");
    tareaBorrar.parentNode.removeChild(tareaBorrar);
}