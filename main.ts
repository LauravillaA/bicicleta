basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        music.playTone(622, music.beat(BeatFraction.Whole))
        basic.pause(200)
        basic.clearScreen()
    }
})
