let T = 0
let count = 0
basic.forever(function () {
    count = 0
    T = 1 - T
    basic.pause(500)
    if (T == 1) {
        count = 0
        led.toggle(count, 0)
    }
    pins.digitalWritePin(DigitalPin.P0, T)
    basic.pause(500)
    count = 1
    led.toggle(count, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    count = 1
    led.toggle(count, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(500)
    if (T == 1) {
        count = 0
        led.toggle(count, 0)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(500)
    count = 2
    led.toggle(count, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
    count = 2
    led.toggle(count, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
