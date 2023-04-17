//cuando MOUSEOVER en Main-h
//le AÑADIMOS la clase isActive a Main-h
//le QUITAMOS la clase isActive a ESE Main-h
//Y le QUITO la clase isActive a TODAS Main-img
//le AÑADO la clase isActive a ESA Main-img


//  $(`.Main-h`).mouseover( function(){

//     const i = $(`.Main-h`).index($(this))

//     $(`.Main-h`).addClass(`isActive`)
//     $(`.Main-h`).eq(i).removeClass(`isActive`)
//     $(`.Main-img`).removeClass(`isActive`)
//     $(`.Main-img`).eq(i).addClass(`isActive`
// })

//JS Vanilla

const titulos = document.querySelectorAll('.Main-h');
const imagen = document.querySelectorAll('.Main-img');

titulos.forEach((eachTitulo, i) => {
  eachTitulo.addEventListener('mouseover', () => {
    titulos.forEach((element) => {
      element.classList.add('isActive');
    });
    eachTitulo.classList.remove('isActive');

    imagen.forEach((element) => {
      element.classList.remove('isActive');
    });
    imagen[i].classList.add('isActive');
  });
});



//cuando MOUSEOUT en Main-h
//le QUITAMOS la clase isActive a TODOS Main-h
//le QUITAMOS la clase isActive a Main-img

// $(`.Main-h`).mouseout( function(){

//     $(`.Main-h`).removeClass(`isActive`)
//     $(`.Main-img`).removeClass(`isActive`)

// })

//when I CLICK on Header-menubtn
//I TOGGLE the class `isActive` to Header-nav 

const headerButton = document.querySelector(`.Header-menubtn`)
console.log(headerButton)

const headerNav = document.querySelector(`.Header-nav`)
console.log(headerNav)

headerButton.addEventListener(`click` , ()=>{
     headerNav.classList.toggle(`isActive`)
})



