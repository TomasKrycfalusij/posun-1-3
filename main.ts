let x = 1
let y = 0
let display = 5
led.plot(x, y)
led.plot(x - 1, y + 1)
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    let x: number;
    let y: number;
    while (true) {
        x = 1
        y = 0
        for (let i = 0; i < display - 1; i++) {
            basic.clearScreen()
            led.plot(x, y)
            led.plot(x - 1, y + 1)
            basic.pause(3000)
            x += 1
            y += 1
        }
    }
})
