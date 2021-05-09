input.onGesture(Gesture.LogoUp, function () {
    Rotation2 += 1
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function () {
    Rotation2 = 0
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
})
let Rotation2 = 0
Rotation2 = 0
basic.forever(function () {
    basic.showNumber(Rotation2)
    basic.pause(200)
})
