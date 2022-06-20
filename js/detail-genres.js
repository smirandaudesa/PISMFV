let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); // metodo para convertir el string en objeto literal clave valor
let id = queryStringObj.get('id');

console.log(id)
let articulos = document.querySelector('.artist-list')
console.log(articulos)
let a = ""
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`)
.then(function(result){
    return result.json()
})
.then(function(genero){
    document.querySelector('.indexSubtitles').innerHTML = genero.name
    
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`)
.then(function(result){
    return result.json()
})
.then(function(info){
  
    console.log(info)
    for(let i = 0; i< info.data.length; i++){
        articulos.innerHTML += `<div>
        <li class="artistIndex"><a class="artistIndexLinks" href="./detail-artist.html?id=${info.data[i].id}">${info.data[i].name}</a></li>
        <img src="${info.data[i].picture_medium}" class="indexArtistPic" alt="">
    </div>`

    }
})
})

.catch(function (error) {
    console.log('el error fue ' + error);
})