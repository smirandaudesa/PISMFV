let lista = document.querySelector('#listadoGeneros')
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
.then(function(result){
    return result.json()
})
.then(function(info){
    console.log(info)
    for(let i = 0; i < info.data.length; i++){
        lista.innerHTML += `<li><a class="albumDetailTrackList" href="./detail-genres.html?id=${info.data[i].id}">${info.data[i].name}</a></li>`

    }
})
.catch(function (error) {
    console.log('el error fue ' + error);
})