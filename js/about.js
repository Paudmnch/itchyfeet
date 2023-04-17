

//when I CLICK on Header-menubtn
//I TOGGLE the class `isActive` to Header-nav 

const headerButton = document.querySelector(`.Header-menubtn`)
console.log(headerButton)

const headerNav = document.querySelector(`.Header-nav`)
console.log(headerNav)

headerButton.addEventListener(`click` , ()=>{
     headerNav.classList.toggle(`isActive`)
})