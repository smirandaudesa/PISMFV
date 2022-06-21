let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); 
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
    <p class="trackDetailPP">Canción: ${data.title}</p> 
    <p class="trackDetailPP">By: <a class="trackDetailText" href="./detail-artist.html?id=${data.artist.id}">${data.artist.name}</a> </p>
    <p class="trackDetailPP">Album: <a class="trackDetailText" href="./detail-album.html?id=${data.album.id}">${data.album.title}</a> </p>
    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
     <br><br><br>

        <button class="buttonTrack" >Agregar a Playlist</button>
    `


    let boton = document.querySelector(".buttonTrack")
    let array = []
    if(localStorage.getItem("playlist")&& localStorage.getItem("playlist")!=null) {
      array= JSON.parse(localStorage.getItem("playlist"))
    }

    if(array.includes(id)) {
      boton.innerHTML = "Sacar de la playlist"
    }


    boton.addEventListener("click", function(){
      if(array.includes(id)){
        array.splice(array.indexOf(id),1)
        boton.innerHTML = "Agregar a la playlist"
        console.log(array)
      } else{
        array.push(id)
        boton.innerHTML = "Sacar de la playlist"
        console.log(array)
      }
      let guardar = JSON.stringify(array)
      localStorage.setItem("playlist",guardar)
      console.log(localStorage)
      
      


    })

})
	.catch(function(error){
	console.log('El error fue: ' + error); 
})