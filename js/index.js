let articulos = document.querySelectorAll('article');
console.log(articulos);


fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
    .then(function(result){
        return result.json()
    })
    .then(function(info){
        console.log(info)

        for(let i = 0; i < 5; i++){
            articulos[0].innerHTML += `<div>
            <li class="trackIndex"><a class="trackIndexLinks" href="./detail-track.html?id=${info.tracks.data[i].id}">${info.tracks.data[i].title}</a></li> 
            <img src="${info.tracks.data[i].album.cover_medium}" class="indexSongPic" alt="">
            <li class="artistIndex"><a class="artistIndexLinks" href="./detail-artist.html?id=${info.tracks.data[i].artist.id}">${info.tracks.data[i].artist.name}</a></li>
        </div>`
        }
        for(let i = 0; i < 5; i++){
            articulos[1].innerHTML += `<div>
            <li class="albumIndex"><a class="albumIndexLinks" href="./detail-album.html?id=${info.albums.data[i].id}">${info.albums.data[i].title}</a></li>
            <img src="${info.albums.data[i].cover_medium}" class="indexAlbumsPic" alt="">
        </div>`
        }
        for(let i = 0; i < 5; i++){
            articulos[2].innerHTML += `<div>
            <li class="artistIndex"><a class="artistIndexLinks" href="./detail-artist.html?id=${info.artists.data[i].id}">${info.artists.data[i].name}</a></li>
            <img src="${info.artists.data[i].picture}" class="indexArtistPic" alt="">
        </div>`
        }
        
    })
    .catch(function (error) {
        console.log('el error fue ' + error);
    })