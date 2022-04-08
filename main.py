x = 1
y = 0
display = 5
led.plot(x, y)
led.plot(x-1, y+1)
def on_button_pressed_ab():
    while True:
        x = 1
        y = 0
        for i in range(display-1):
            basic.clear_screen()
            led.plot(x, y)
            led.plot(x-1, y+1)
            basic.pause(3000)
            x += 1
            y += 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)