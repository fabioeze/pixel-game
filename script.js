// define locais brancos
const pixelVal0a = document.querySelectorAll(".pixel[value='0']");
const btns = document.querySelectorAll('.btnColorsGrid button');

function branco() {
    pixelVal0a.forEach(function (el) {
        el.classList.add('cor0p');
    });
}

branco();

let state = 0;
let button = 0;

// Função para lidar com eventos de toque ou clique
function handleTouchEvent(event, value) {
    if (state === value) {
        event.target.classList.add('cor' + value + 'p');
        verificaState();
    } else {
        event.target.style.background = 'gray';
    }
}

// Adicione manipuladores de eventos de toque
pixelVal0a.forEach(function (pxSelect) {
    pxSelect.addEventListener("touchstart", function (event) {
        let value = parseFloat(event.target.getAttribute("value"));
        handleTouchEvent(event, value);
    });

    pxSelect.addEventListener("touchmove", function (event) {
        let value = parseFloat(event.target.getAttribute("value"));
        handleTouchEvent(event, value);
    });
});

// Adicione manipulador de evento de toque final
document.addEventListener("touchend", function (event) {
    pixelVal0a.forEach(function (el) {
        el.style.background = ''; // Limpa o estilo de fundo
    });
});

// Função para verificar o estado
function verificaState() {
    const seleciona = document.querySelectorAll('.cor' + state + 'p');
    const selecionados = seleciona.length;

    const totalSeleciona = document.querySelectorAll('.pixel[value="' + state + '"]');
    const totalSelecionados = totalSeleciona.length;

    if (selecionados === totalSelecionados) {
        state = 0;
        const buttonSelected = document.querySelector('.active');
        buttonSelected.disabled = true;
        buttonSelected.classList.add('disabled');
        btns.forEach(function (btn) {
            btn.classList.remove('active');
        });
    }
}
