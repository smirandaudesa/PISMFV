let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); // metodo para convertir el string en objeto literal clave valor
let id = queryStringObj.get('id');

console.log(id)
let div = document.querySelector('.contenido')
console.log(div)
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then(function(result){
    return result.json() //convertir el string en un obj literal json
})
.then(function(info){
    let generos = "Este disco no tiene generos"
    for(let i = 0; i < info.genres.data.length; i++){
        if(i == 0){
            generos = `<a class="" href="./detail-genres.html?id=${info.genres.data[i].id}">${info.genres.data[i].name}</a>`
        }else{
            generos += `, <a class="" href="./detail-genres.html?id=${info.genres.data[i].id}">${info.genres.data[i].name}</a>`
        }
    }

   div.innerHTML += ` <h1 class="tituloDetail">${info.title}</h1>
   <section class="trackDetailAlbum">
       <article>
           <img src="${info.cover_medium}" class="detailTrackPic" alt=""> <br>
       
           <p class="albumDetailText" >By: </p><a class="trackDetailText" href="./detail-artist.html?id=${info.artist.id}">${info.artist.name}</a> <br>
           <p class="albumDetailText">Release date: ${info.release_date}</p>
           <p class="albumDetailText">Genre:</p>${generos} <br>
           <p class="albumDetailText">FULL TRACK:</p>
           <ol>`
           for(let i =0; i < info.tracks.data.length; i++){ // esra dentro del for  porque lo quiero repetir i ++ es un contador

            div.innerHTML += `
                <li><a class="albumDetailTrackList" href="./detail-track.html?id=${info.tracks.data[i].id}">${i+1}. ${info.tracks.data[i].title}</a></li>`
        }
        div.innerHTML += `
           </ol> 
           <br><br>

       </article>

   </section>`
    console.log(info)
})
.catch(function (error) {
    console.log('el error fue ' + error);
})