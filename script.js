// define as constantes dos pixeis

const pixelVal0a = document.querySelectorAll(".pixel[value='0']")

// define locais brancos

function branco() {

    $(pixelVal0a).addClass('cor0p');

}

branco()

//Script state

let state = 0
let button = 0
var btns = document.querySelectorAll('.btnColorsGrid button');

// botões seleção de cor

function stateF(number) {

    if (state === number) {

        button = 0;
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

    var seleciona = document.querySelectorAll('.cor'+state+'p');
    var selecionados = $(seleciona).length
    
    var totalSeleciona = document.querySelectorAll('.pixel[value="'+state+'"]')
    var totalSelecionados = $(totalSeleciona).length

    if (selecionados === totalSelecionados) {

        state = 0

        var buttonSelected = document.querySelector('.active');
        buttonSelected.disabled = true;
        $(buttonSelected).addClass('disabled');

        $(btns).removeClass('active');

    } else {
        console.log('aaaaa')
    }
}


let pixelNotWhite = document.querySelectorAll('span:not([value="0"])')

pixelNotWhite.forEach(function (pxSelect) {

    pxSelect.addEventListener("click", function (event) {

        let el = event.target
        let valueString = el.getAttribute("value")
        let value = parseFloat(valueString)

        if (state === value) {

            $(el).addClass('cor'+value+'p');

            verificaState()

        } else {

            $(el).css('background','gray')

        }

    })
})


