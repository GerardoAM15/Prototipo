const nombreInput = document.getElementById('nombreInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaNombres = document.getElementById('listaNombres');

agregarBtn.addEventListener('click', () => {
    const nombre = nombreInput.value.trim();

    if (nombre === '') {
        nombreInput.value = '';
        nombreInput.focus();
        alert('Por favor ingresa un nombre antes de agregar.');
        return;
    }

    if (nombre.length < 3) {
        nombreInput.focus();
        alert('El nombre debe tener al menos 3 letras. No se puede agregar.');
        return;
    }

    if (!/^[a-zA-Z]+$/.test(nombre)) {
        nombreInput.focus();
        alert('El nombre solo puede contener letras. No se pueden agregar números ni otros caracteres.');
        return;
    }

    const elemento = document.createElement('li');
    elemento.textContent = nombre;
    listaNombres.appendChild(elemento);

    nombreInput.value = '';
    nombreInput.focus();
});

nombreInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        agregarBtn.click();
    }
});
