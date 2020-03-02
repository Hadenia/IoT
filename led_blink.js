var five = require('johnny-five');

// Instanciamos uma placa
var board = new five.Board();

// O evento de ready é disparado quando a comunicação 
// é estabelecida entre o processo Node.js e o Arduino 

board.on('ready', function() { // Instanciamos um led no pino 13 
    var led = new five.Led(13);
    // Chamamos o método blink do led que recebe 
    led.high();
    setInterval(function(){
        led.low();
        setTimeout(function(){
            led.high();
        }, 200);
    }, 400);
});