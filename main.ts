input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.showLeds(`
        . . . # .
        . . . # #
        # # # . .
        # # # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showString("Quim")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
