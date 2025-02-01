var mesas = [
    { id: 1, estado: 'disponivel', lugares: 4, local: 'Palco' },
    { id: 2, estado: 'disponivel', lugares: 2, local: 'Varanda' },
    { id: 3, estado: 'disponivel', lugares: 6, local: 'Salão Principal' }
];

function iniciar() {
    var container = document.getElementById('mesas');

    for (var i = 0; i < mesas.length; i++) {
        var mesa = document.createElement('div');
        mesa.className = 'mesa ' + mesas[i].estado;

        mesa.innerHTML =
            '<div class="status">' +
            getSimboloStatus(mesas[i].estado) + ' Mesa ' + mesas[i].id +
            '</div>' +
            '<div class="info">' +
            '<div>Lugares: ' + mesas[i].lugares + '</div>' +
            '<div>' + mesas[i].local + '</div>' +
            '</div>';

        mesa.onclick = criarClique(i);
        container.appendChild(mesa);
    }
}

function criarClique(index) {
    return function () {
        var estados = ['disponivel', 'ocupado', 'agendado'];
        var novaPosicao = (estados.indexOf(mesas[index].estado) + 1) % 3;
        mesas[index].estado = estados[novaPosicao];

        var elemento = document.getElementsByClassName('mesa')[index];
        elemento.className = 'mesa ' + mesas[index].estado;
        elemento.getElementsByClassName('status')[0].innerHTML =
            getSimboloStatus(mesas[index].estado) + ' Mesa ' + mesas[index].id;
    };
}

function getSimboloStatus(estado) {
    if (estado === 'disponivel') return '✔';
    if (estado === 'ocupado') return '✗';
    if (estado === 'agendado') return '⌛';
    return '';
}

window.onload = iniciar;