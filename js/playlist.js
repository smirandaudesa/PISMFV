let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

/* capturar el elemento en el dom */;

let section = document.querySelector('.playlistDetail');

let cancionesFavoritas = '';

let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/2154548'
console.log(url);

/* Evaluar el localStorage */

if (playlist == null || playlist.length == 0) {
    section.innerHTML = '<p>No hay canciones en la playlist</p>';
} else {
    /* Si contiene elementos */

    for (let i = 0; i < playlist.length; i++) {
        /* Buscar el personaje */   
        
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {

                cancionesFavoritas += `<article class="headerPadre">
                                        <a href="./detail-album.html?id=${data.album.id}">Ir a detalle</a>
                                        <img class="image-genre" src="${data.album.cover_big}"/>
                                        </a>

                                        <a href="./detail-track.html?id=${data.id}">Ir a detalle</a>
                                        <p class="lista">Canción:${data.titulo}</p>
                                        </a>

                                        <a href="./detail-artist.html?id=${data.artist.id}">
                                        <p class="lista">Artista:${data.artist.name}</p>
                                        </a>

                                        <a href="./detail-album.html?id=${data.album.id}">
                                        <p class="lista">Album:${data.album.titulo}</p>
                                        </a>

                                        <iframe src=${data.preview} frameborder="0"></iframe>
                                        </article>`

                                     
                                    <hr>` 
                section.innerHTML = cancionesFavoritas;

            }).catch(function(error) {
                console.log(error);
            })
    }
}