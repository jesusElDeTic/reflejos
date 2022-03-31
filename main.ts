basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(500)
let cuenta = 3
let tiempo = 0
for (let index = 0; index < 3; index++) {
    basic.showNumber(cuenta)
    cuenta = cuenta - 1
    basic.pause(100)
}
basic.showString("Go!")
let boton = randint(0, 1)
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
