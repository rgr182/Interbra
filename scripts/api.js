document.addEventListener("DOMContentLoaded", function() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            const data = JSON.parse(xhr.responseText);
            const usuariosLista = document.getElementById('usuarios-lista');
            
            data.forEach(usuario => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h3>${usuario.name}</h3>
                    <p><strong>Usuario:</strong> ${usuario.username}</p>
                    <p><strong>Email:</strong> ${usuario.email}</p>
                    <hr>
                `;
                usuariosLista.appendChild(listItem);
            });
        } else {
            console.error('Hubo un error al realizar la petición');
        }
    };

    xhr.onerror = function() {
        console.error('Error de red al intentar realizar la petición');
    };

    xhr.send();
});
