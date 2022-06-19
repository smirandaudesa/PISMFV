let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); // metodo para convertir el string en objeto literal clave valor
let q = queryStringObj.get('búsqueda');
console.log(q)

let resultado = document.querySelector('.tituloDetail')
resultado.innerHTML = `resultado de busqueda para: ${q}`
console.log(resultado.innerHTML)
fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${q}`)
.then(function(result){
    return result.json()
})
.then(function(info){
 // for recorriendo data 
    console.log(info)
    if (info.data.length == 0){
        resultado.innerHTML = ` no hay resultado de busqueda para: ${q}`

    }


})
.then(function(){
    document.querySelector(".gif").style.display = "none"
})
.catch(function (error) {
    console.log('el error fue ' + error);
})
