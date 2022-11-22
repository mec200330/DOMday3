const inputDays =document.querySelector('#noches')
const calcularCoste = document.querySelector('#costeFast')
const citySelector = document.querySelector('#ciudad')
const hotel=document.querySelector('#costeHotel')
const viaje=document.querySelector('#costeViaje')
const coche=document.querySelector('#alquilerCoche')
const total=document.querySelector('#costeTotal')

calcularCoste.onclick = () =>{
const numDays = inputDays.value
const cityCoste = citySelector.value
costeHotel(numDays)
costeAlquilerCoche(numDays)
costeAvion(numDays, cityCoste)

hotel.textContent=costeHotel(numDays)
viaje.textContent=costeAvion(numDays, cityCoste)
coche.textContent=costeAlquilerCoche(numDays)
total.textContent= hotel.value*1+viaje.value*1+coche.value*1

}

costeHotel =(num)=>{

const precio = 140
let valorHotel = num*precio
return valorHotel
}

costeAvion=(num, city)=>{

    let total = 0
    if(city=='oviedo' && num>=1 && num <=3){

        total = num*15
    }else if(city=='tokio' && num>=1 && num <=3){
       total = num*700
    }else if(city =='madrid' && num>=1 && num <=3){
        total = num*90
    }else if(city== 'barcelona' && num>=1 && num <=3){
        total = num*90
    }else if(city=='oviedo' && num>3 ){
        total = (num*15)- ((num*15)*0.1)
    }else if(city=='tokio' && num>3){
        total=(num*700)-((num*700)*0.1)
    }else if(city =='madrid' && num>3){
         total=(num*90)-((num*90)*0.1)
    }else if(city== 'barcelona' && num>3){
        total=(num*90)-((num*90)*0.1)
    }
    return total
}
costeAlquilerCoche=(num)=>{

let alquilerValor = num*40
let total = 0
if(num>=3 && num<=6){
total = alquilerValor-20
}else if(num>=7){
    total=alquilerValor-50
}else if(num>=1 && num<=2){
    total=alquilerValor
}
return total
}