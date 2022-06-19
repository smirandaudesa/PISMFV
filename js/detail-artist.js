// usar endpoinmt correcto
// https://api.deezer.com/artist/${id} esto para nombre y foto
// https://api.deezer.com/artist/${id}/albums esto para albums
// un fecth adentr del otro solo queda  un catch(ultimo)
//     fetch(`https://cors-anywhere.herokuapp.comhttps://api.deezer.com/artist/${id}/albums`)
/*fetch
then
then(fetchthenthen)
catch
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); // metodo para convertir el string en objeto literal clave valor
let id = queryStringObj.get('id');

console.log(id)
let div = document.querySelector('.contenido')
console.log(div)
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
.then(function(result){
    return result.json()
})
.then(function(info){
 
    console.log(info)
})
.catch(function (error) {
    console.log('el error fue ' + error);
})
// redireccionar  correctamente
//Foto del cantante/ artista.
//Nombre del cantante/ artista.
//Lista de máximo 5 albums.*/


fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/25')
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);
})
	.catch(function(error){
	console.log('El error fue: ' + error);
})

/* //<img src="./img/kid cudi.jpeg" class="detailArtistPic" alt=""> <br>
            
        <p class="detailArtistPP" >Top 5 Tracks:</p>
           <ol>
                <li><a class="albumDetailTrackList" href="./detail-track.html">${info.picture_medium}</a> </li> 
                <li><a class="albumDetailTrackList" href="./detail-track.html">2. THE SCOTTS</a></li>
                <li><a class="albumDetailTrackList" href="./detail-track.html">3. Pursuit Of Happiness</a></li>
                <li><a class="albumDetailTrackList" href="./detail-track.html">4. Tequila Shots</a></li>
                <li><a class="albumDetailTrackList" href="./detail-track.html">5. The Void</a></li>
           </ol>`/****** */