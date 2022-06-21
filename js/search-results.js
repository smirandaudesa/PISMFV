let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); // metodo para convertir el string en objeto literal clave valor
let q = queryStringObj.get('búsqueda');
console.log(q)

let resultado = document.querySelector('.tituloDetail')
let lista = document.querySelector('.listaResultado')
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${q}`)
    .then(function (result) {
        return result.json()
    })
    .then(function (info) {
        // for recorriendo data 
        console.log(info)
        if (info.data.length == 0) {
            resultado.innerHTML = ` no hay resultado de busqueda para: ${q}`

        }else{
            
            resultado.innerHTML = `Resultado de busqueda para: ${q}`
            for(let i = 0; i < info.data.length; i++){ // if o else????
            lista.innerHTML += `<li><a class="searchTracks" href="./detail-artist.html?id=${info.data[i].artist.id}">${info.data[i].artist.name}</a>  <a class="searchTracks" href="./detail-track.html?id=${info.data[i].id}">${info.data[i].title}</a> <img class="searchMiniPic" src="${info.data[i].album.cover_small}" alt=""></li>`
        }
} 

    })
    .then(function () {
        document.querySelector(".gif").style.display = "none"
    })
    .catch(function (error) {
        console.log('el error fue ' + error);
    })
   
    let formulario = document.querySelector('form');
 
    formulario.addEventListener('submit', function(e) {
     /* Primera linea de todo evento */
         e.preventDefault();
        let inputBusqueda = document.querySelector('input');
 
        if (inputBusqueda.value == '') {
           alert('Debes ingresar una palabra');
        } else if(inputBusqueda.value.length <= 3){
           alert('Debes ingresar mas de 3 caracteres');
        }else {
           this.submit()
        }
    });
    
    /*
    if (info.data.length > 0) {
        resultado.innerHTML = `<li><a class="searchTracks" href="./detail-artist.html"> Drake  </a> <img class="searchMiniPic" src="${info.data.album.cover_small}" alt=""></li>`

    }
    */