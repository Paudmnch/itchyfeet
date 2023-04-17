let contadorimg = 0

// cuando hago CLICK en la clase SIGUIENTE 
//contadorimg aumenta en 1

const siguiente = document.querySelector(`.siguiente`)
console.log(siguiente)

const sliderImg = document.querySelectorAll(`.Sliderimg`)
console.log(sliderImg)

const anterior = document.querySelector(`.anterior`)
console.log(anterior)



siguiente.addEventListener(`click` , ()=>{
    contadorimg = contadorimg + 1
    console.log(contadorimg)

    if(contadorimg>=3){
        contadorimg = 0
    }

    sliderImg.forEach( (eachImg , i) =>{
        sliderImg[i].classList.remove(`isActive`)
    })

    sliderImg[contadorimg].classList.add(`isActive`)
})

// cuando hago CLICK en la clase ANTERIOR 
//contadorimg disminuye en 1

anterior.addEventListener(`click` , ()=>{
    contadorimg = contadorimg - 1
    console.log(contadorimg)

    if(contadorimg <= -1){
        contadorimg = 2
    }

    sliderImg.forEach((eachImg , i)=>{
        sliderImg[i].classList.remove(`isActive`)
    })

    sliderImg[contadorimg].classList.add(`isActive`)
})


//when I CLICK on Header-menubtn
//I TOGGLE the class `isActive` to Header-nav 

const headerButton = document.querySelector(`.Header-menubtn`)
console.log(headerButton)

const headerNav = document.querySelector(`.Header-nav`)
console.log(headerNav)

headerButton.addEventListener(`click` , ()=>{
     headerNav.classList.toggle(`isActive`)
})