basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showNumber(5)
    }
    if (input.lightLevel() < 75) {
        basic.showNumber(4)
    }
    if (input.lightLevel() < 55) {
        basic.showNumber(3)
    }
    if (input.lightLevel() < 35) {
        basic.showNumber(2)
    }
    if (input.lightLevel() < 20) {
        basic.showNumber(1)
    }
})
