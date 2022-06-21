let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); // metodo para convertir el string en objeto literal clave valor
let id = queryStringObj.get('id');

console.log(id)

let trackDetail = document.querySelector('.ttrackDetail')
console.log(trackDetail)

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);

    trackDetail.innerHTML += `    <img src="${data.album.cover}" class="detailTrackPic" alt=""> <br>
            
    <p class="trackDetailPP">By: ${data.artist.name} </p><a class="trackDetailText" href="./detail-artist.html?id=${data.artist.name}</a> <br>
    <p class="trackDetailPP">Album: ${data.album.title}</p><a class="trackDetailText" href="./detail-album.html?id=${data.album.title}</a>
    <p class="trackDetailPP">Genre: </p><a class="trackDetailText" href="./detail-genres.html?id=   </a> <br> <br> <br><br>
    <audio controls>
        <source class="reproductor" src="music/theVoid.mp3"  type="audio/mp3">
     
     </audio>
     <br><br><br>
    <form action="./playlist.html" method="get">
        <button class="buttonTrack" >Agregar a Playlist</button>
    </form>`

})
	.catch(function(error){
	console.log('El error fue: ' + error); 
})


//   div.innerHTML += `    <img src="./img/the void.jpg" class="detailTrackPic" alt=""> <br>
            
//   <p class="trackDetailPP">By: </p><a class="trackDetailText" href="./detail-artist.html">Kid Cudi</a> <br>
//   <p class="trackDetailPP">Album:</p><a class="trackDetailText" href="./detail-album.html">Man On The Moon III</a>
//   <p class="trackDetailPP">Genre: </p><a class="trackDetailText" href="./detail-genres.html">Trap</a> <br> <br> <br><br>
 //  <audio controls>
  //     <source class="reproductor" src="music/theVoid.mp3"  type="audio/mp3">
    
   // </audio>
    //<br><br><br>
   //<form action="./playlist.html" method="get">
    //   <button class="buttonTrack" >Agregar a Playlist</button>
   //</form>`
 
    //console.log(info)
//.catch(function (error) {
  //  console.log('el error fue ' + error);
//})
 



//  div.innerHTML += `<article class=trackDetail>    <img src="${data.picture_medium}" class="detailTrackPic" alt=""> <br>
            
// <p class="trackDetailPP">By: </p><a class="trackDetailText" href="./detail-artist.html?id=${info.artist.id}">${info.artist.name}</a> <br>
// <p class="trackDetailPP">Album:</p><a class="trackDetailText" href="./detail-album.html?id=${info.album.id}">${info.album.name}</a>
// <p class="trackDetailPP">Genre: </p>${generos} <br> <br> <br><br>
// <audio controls>

//    <source class="reproductor" src="   "  type="audio/mp3">

// </audio>
// <br><br><br>
//<form action="./playlist.html" method="get">
  //<button class="buttonTrack" >Agregar a Playlist</button>
//</form>`