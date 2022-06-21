let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
console.log(id)
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);
    let listaAlbum = "";
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`)
    .then(function(response){
        return response.json();
    })
    .then(function(discos){
        console.log(discos)
        let main = document.querySelector("main")
        for (let i = 0; i< 5 ; i++){
            listaAlbum += `<li><a class="albumDetailTrackList" href="./detail-album.html?id=${discos.data[i].id}">${discos.data[i].title}</a> </li>`
        }
        main.innerHTML = `   <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
     
        <h1 class="tituloDetail"> <a href="./detail-artist.html?id=${id}">${data.name}</a></h1>
        <section class="trackDetailArtist">
           <article class="detailArtistArticle">
               <img src="${data.picture_medium}" class="detailArtistPic" alt=""> <br>
           
               <p class="detailArtistPP" >Top 5 Tracks:</p>
                  <ol>
                       ${listaAlbum}
                  </ol>
           </article>
       </section> 
        `

        
    })

})
	.catch(function(error){
	console.log('El error fue: ' + error);
})