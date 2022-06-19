let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); // metodo para convertir el string en objeto literal clave valor
let id = queryStringObj.get('id');


fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556')
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);
})
	.catch(function(error){
	console.log('El error fue: ' + error); 
})




/*let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); // metodo para convertir el string en objeto literal clave valor
let id = queryStringObj.get('id');

/*console.log(id)
let div = document.querySelector('.contenido')
console.log(div)
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/`)
.then(function(result){
    return result.json()
})
.then(function(info){
   div.innerHTML += `    <img src="./img/the void.jpg" class="detailTrackPic" alt=""> <br>
            
   <p class="trackDetailPP">By: </p><a class="trackDetailText" href="./detail-artist.html">Kid Cudi</a> <br>
   <p class="trackDetailPP">Album:</p><a class="trackDetailText" href="./detail-album.html">Man On The Moon III</a>
   <p class="trackDetailPP">Genre: </p><a class="trackDetailText" href="./detail-genres.html">Trap</a> <br> <br> <br><br>
   <audio controls>

       <source class="reproductor" src="music/theVoid.mp3"  type="audio/mp3">
    
    </audio>
    <br><br><br>
   <form action="./playlist.html" method="get">
       <button class="buttonTrack" >Agregar a Playlist</button>
   </form>`
 
    console.log(info)
})
.catch(function (error) {
    console.log('el error fue ' + error);
})
 redireccionar  correctamente en el*/
