basic.showString("BOM DIA")
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . . # # .
    . . # . .
    # # # # #
    # # # # #
    `)
basic.pause(1000)
basic.clearScreen()
music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
