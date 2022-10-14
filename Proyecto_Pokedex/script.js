let characters = JSON.parse(poke_file).result // [{}, {}, {}, ...]
let input_character_name = document.getElementById("input_character_name")
let container = document.getElementById("container")


function search_character_button_click() {  
  let results = ""                         
  console.log("presionaste Buscar")
  
  let res_characters = search_characters(input_character_name.value) 
  for(let i = 0; i<res_characters.length; i++) {
    results += `
      <p> <br/>
        <span class="name">${res_characters[i].name}</span><br/>
        <img src="${res_characters[i].ThumbnailImage}"><br/>
        <span class="number">N°${res_characters[i].id}</span><br/>
        <span class="ty2">Type: <br/> ${res_characters[i].type}</span><br/>
        <span class="ty2">Abilities: <br/> ${res_characters[i].abilities}</span><br/>
        <span class="ty2">Weakness: <br/>${res_characters[i].weakness} </span><br/>
        <span class="ty2">Height: <br/>${res_characters[i].height}</span><br/>
        <span class="ty2">Number<br/>${res_characters[i].number}</span><br/>
    `
  }
  
  container.innerHTML = results
}

function search_character_button_click2() {  // Funcion que dentro de la misma se encuentra un bucle for que isnpecciona el API(poke_api) 
  let results = ""                           // y muestra los resultados que desde la funcion search_character coincidan
  console.log("presionaste Buscar")

  let res_characters = search_characters(input_character_name.value)
  for(let i = 0; i<res_characters.length; i++) {                       //Si se cumple la condicional mostrara este texto en el html
    results += `                                    
      <p> <br/>
        <span class="name">${res_characters[i].name}</span><br/>
        <img src="${res_characters[i].ThumbnailImage}"><br/>
        <span class="number">N°${res_characters[i].id}</span><br/>
        <span class="ty2">Type: <br/> ${res_characters[i].type}</span><br/>
        <span class="ty2">Abilities: <br/> ${res_characters[i].abilities}</span><br/>
        <span class="ty2">Weakness: <br/>${res_characters[i].weakness} </span><br/>
        <span class="ty2">Height: <br/>${res_characters[i].height}</span><br/>
        <span class="ty2">Number<br/>${res_characters[i].number}</span><br/>
    `
  }
  container.innerHTML = results

}

// solo encuentra uno
// function search_character(character_name) { 
//   let longitud_cadena = character_name.length
//   for(let i = 0;i<characters.length;i++) {
//     if(characters[i].name.substring(0,longitud_cadena) == character_name) {
//        return characters[i]
//     }
//   }
// }
  

// Encuentra todos los que coincidan
function search_characters(character_name) {                                  //La funcion
  let results = []                                                            //La variable results no tiene nada adentro 
  let longitud_cadena = character_name.length                                 // esta variable contiene al nombre de caracter como parametro el cual tiene 
  for(let i = 0;i<characters.length;i++) {                                    // el metodo .lenght que sirve para recorer cadenas de texto
    if(characters[i].name.substring(0,longitud_cadena) === character_name) {   //esta condicional revisa que los caracteres(letras) introducidos 
      results.push(characters[i])                                             //coincidan con las iniciales de los nombres de todos los pokemones
    }                                                                         //que inicien con esa(s) letras
  }
  return results
}