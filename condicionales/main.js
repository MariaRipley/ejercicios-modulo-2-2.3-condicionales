'use strict';

//Control de acceso

let userName = document.querySelector('.user__name').value;
if (userName === 'María' || userName === 'Luisa') {
    alert ('Bienvenida ' + userName);
} else {
    alert ('Lo siento pero el usuario que has introducido no está registrado');
}
