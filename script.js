// define as constantes dos pixeis

const pixelVal0a = document.querySelectorAll(".pixel[value='0']")

// define locais brancos

function branco() {

    $(pixelVal0a).addClass('cor0p');

}

branco()

//Script state

let state = 0
//let button = 0
const btns = document.querySelectorAll('.btnColorsGrid button');

// botões seleção de cor

function stateF(number) {

    if (state === number) {

        //button = 0;
        state = 0

        $(btns).removeClass('active')

    } else {

        state = number

        button = document.querySelector('.btn' + number + 'c')

        $('.remove').removeClass('active')
        $(button).addClass('active');

    }
}

function verificaState() {

    var seleciona = document.querySelectorAll('.cor' + state + 'p');
    var selecionados = $(seleciona).length

    var totalSeleciona = document.querySelectorAll('.pixel[value="' + state + '"]')
    var totalSelecionados = $(totalSeleciona).length

    if (selecionados === totalSelecionados) {

        state = 0

        var buttonSelected = document.querySelector('.active');
        //buttonSelected.disabled = true;
        $(buttonSelected).addClass('disabled');

        $(btns).removeClass('active');

    }
}

function handleEvent(event, value) {

    let el = event.target

    if (state === value) {
        $(el).addClass('cor' + value + 'p');
        verificaState()
    } else {
        $(el).css('background', 'gray')
    }

}

const pixelNotWhite = document.querySelectorAll('span:not([value="0"])')

pixelNotWhite.forEach(function (pxSelect) {

    let mouseEvent = 0

    pxSelect.addEventListener("mousedown", function (event) {
        let el = event.target
        let valueString = el.getAttribute("value")
        let value = parseFloat(valueString)
        mouseEvent = 1

        handleEvent(event, value)

        $(pixelNotWhite).on('mousemove', function (event) {
            el = event.target
            valueString = el.getAttribute("value")
            value = parseFloat(valueString)

            handleEvent(event, value)

        });

    })

    document.addEventListener("mouseup", function (event) {
        mouseEvent = 0
        $(pixelNotWhite).off("mousemove");
    });



    pxSelect.addEventListener("touchmove", function (event) {
        el = event.target
        valueString = el.getAttribute("value")
        value = parseFloat(valueString)

        console.log(el)
        console.log(valueString)
        console.log(value)
        handleEvent(event, value)

    })

});


//document.addEventListener("touchend", function (event) {
//   mouseEvent = 0
//   $(pixelNotWhite).off("touchmove");
//})