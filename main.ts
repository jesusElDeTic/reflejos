function cuentaTiempo () {
    tiempo = 0
}
function juego () {
    boton = randint(0, 1)
    if (boton == 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
    cuentaTiempo()
}
input.onButtonPressed(Button.A, function () {
    if (boton == 0) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    juego()
})
input.onButtonPressed(Button.B, function () {
    if (boton == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    juego()
})
let boton = 0
let tiempo = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(500)
let cuenta = 3
for (let index = 0; index < 3; index++) {
    basic.showNumber(cuenta)
    cuenta = cuenta - 1
    basic.pause(100)
}
basic.clearScreen()
basic.showString("Go!")
basic.clearScreen()
juego()
loops.everyInterval(100, function () {
    tiempo += 100
})
