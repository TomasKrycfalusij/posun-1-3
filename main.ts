let x = 1
let y = 0
let display = 5
while (true) {
    for (let i = 0; i < display - 1; i++) {
        basic.clearScreen()
        led.plot(x, y)
        led.plot(x - 1, y + 1)
        basic.pause(1000)
        x += 1
        y += 1
    }
    x = 1
    y = 0
}
