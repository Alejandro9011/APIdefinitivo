const alive= "greenCircle.jpg"
const dead= "redCircle.webp"
const unknown= "purpleCircle.png"

const apiRick=async (pagina,nombre)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    if (nombre) {
      url += "&name=" + nombre;
    }
    const api=await fetch(url);
    const data=await api.json();
    console.log(data);

    divRes=document.querySelector("#resultado")
    divRes.innerHTML=""
    let condition;
    data.results.map(item=>{
        divItem=document.createElement('div')
        if(item.status === "Alive"){
          condition=alive
        }else if(item.status === "Dead"){
          condition=dead
        }else{
          condition=unknown
        }
                                                                       //let condition = item.status === "Alive"? alive: dead
        divItem.innerHTML=`
        <div id="resultado">
          <div class="car-character">
                <img src="${item.image}" alt="">
                <div class="description-card">
                   <h2>${item.name}</h2>
                      <div class="extraInformation">
                         <img  id="imagen" src="${condition}" alt="">
                         <span>${item.status}</span>
                       </div>
                         <h3>${item.species}</h3>
                         <p>${item.gender}</p>
                 </div>
           </div>
        </div>
     `
      divRes.appendChild(divItem);
    });  
}
 apiRick()

const buscarPersonajes = () => {
  const nombre = document.querySelector(".nombre-personaje").value;
  apiRick(1, nombre);
};

   
  