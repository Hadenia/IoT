/*Programa baseado no tutorial 
no site: https://braziljs.org/blog/interacao-com-hardware-usando-javascript/  

Por Hadênia Rodrigues e BRuno Silva */

/*Utilizando o framework Johnny-five do módulo Node.js*/

/*Como pre-requisitos foram necessários instalar o Node.js e o framework Johnny-five por meio:
    No linux: npm install johnny-five
    Na mesma pasta que foi instalada salvamos o arquivo led_teste.js e abrimos por meio:
    node led_teste.js
Necessário fazer upload do arquivo File > Examples > Firmata > StandardFirmata no IDE do Arduino
*/

/*Criamos o blink (Hello World do Arduino) por meio do JavaScript */

var five = require('johnny-five');

// Instanciamos uma placa
var board = new five.Board();

// O evento de ready é disparado quando a comunicação 
// é estabelecida entre o processo Node.js e o Arduino 

board.on('ready', function() { // Instanciamos um led no pino 13 
    var led = new five.Led(13);
    // Chamamos o método blink do led que recebe 
    led.blink(500); 
});