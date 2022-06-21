let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

let listaPlaylist = document.querySelector('#listaPlaylist');
console.log(listaPlaylist)
let titulo = document.querySelector(".tituloDetail")

if (playlist == null || playlist.length == 0) {
    titulo.innerHTML = 'No hay canciones en la playlist';
} else {

    for (let i = 0; i < playlist.length; i++) { 
        let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+playlist[i]
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(info) {
                console.log(info)
                listaPlaylist.innerHTML += `<li><a class="searchPlaylist" href="./detail-artist.html?id=${info.artist.id}">${info.artist.name}</a>  <a class="searchPlaylist" href="./detail-track.html?id=${info.id}">${info.title}</a> <img class="searchMiniPic" src="${info.album.cover_small}" alt=""></li>`

            })

            .catch(function(error) {
                console.log(error);
            })
        }
    }