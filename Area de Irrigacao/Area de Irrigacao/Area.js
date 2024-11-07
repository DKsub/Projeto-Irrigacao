const listaIrrigacao = [...document.querySelectorAll(".area")]


const CriarPorcent = () =>{

    listaIrrigacao.forEach(elem =>{

       elem.innerHTML = "Irrigação: 0%"

       let area = Math.round(Math.random() * 100)

       elem.innerHTML = area + "%"

       if(area >=60){
         elem.classList.add("Marqued")
       } else{
        elem.classList.remove("Marqued")
       }
        

    });
}


Intervalo = setInterval(CriarPorcent, 4000) 



