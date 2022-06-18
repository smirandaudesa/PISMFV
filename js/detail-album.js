let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); // metodo para convertir el string en objeto literal clave valor
let id = queryStringObj.get('id');

console.log(id)
let div = document.querySelector('.contenido')
console.log(div)
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then(function(result){
    return result.json()
})
.then(function(info){
   div.innerHTML += `            <h1 class="tituloDetail">${info.title}</h1>
   <section class="trackDetailAlbum">
       <article>
           <img src="./img/man on the moon.png" class="detailTrackPic" alt=""> <br>
       
           <p class="albumDetailText" >By: </p><a class="trackDetailText" href="./detail-artist.html">Kid Cudi</a> <br>
           <p class="albumDetailText">Released on: 11/12/2020</p>
           <p class="albumDetailText">Genre:</p><a class="trackDetailText" href="./detail-genres.html">Trap</a> <br>
           <p class="albumDetailText">FULL TRACK:</p>
           <ol>`
           for(let i =0; i < info.tracks.data.length; i++){

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