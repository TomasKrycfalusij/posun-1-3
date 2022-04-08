x = 1
y = 0
display = 5
while True:
    for i in range(display-1):
        basic.clear_screen()
        led.plot(x, y)
        led.plot(x-1, y+1)
        basic.pause(1000)
        x += 1
        y += 1
    x = 1
    y = 0