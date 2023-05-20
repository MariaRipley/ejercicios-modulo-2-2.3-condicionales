'use strict';

//Control de acceso

let userName = document.querySelector('.user__name').value;
if (userName === 'María' || userName === 'Luisa') {
    alert ('Bienvenida ' + userName);
} else {
    alert ('Lo siento pero el usuario que has introducido no está registrado');
}

//Completa las condiciones

let perfectNumber = 17;

if (perfectNumber === 0) {
  console.log('El número es 0')
} else if (perfectNumber < 0) {
  console.log('El número es negativo')
} else if (perfectNumber + 2 > 13 && perfectNumber + 2 <= 20) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
} else if (perfectNumber > 20 && perfectNumber < 50) {
  console.log('El número es mayor que 20 pero menor que 50')
} else {
  console.log('el número no es 123123125')
}

//Conversor de edad de perro a humano

let dogAge = document.querySelector('.dog__age').value;

if (dogAge === 1) {
    console.log ('Tu perro tiene 15 años humanos');
} else if (dogAge <= 2) {
    console.log ('Tu perro tiene ' + dogAge*9 + ' años humanos');
} else {
    console.log ('Tu perro tiene ' + dogAge*5 + ' años humanos');
}
