
let cardPi=document.querySelector('.card-item')
cardPi.addEventListener('click',function(){

})

const moreDitail = (item) => {
    let changePick=document.querySelector('.images-container')
    let container = document.querySelector('.mainPickFirsPage')
    container.innerHTML=' ';
    changePick.innerHTML=' ';
    // buttonSal=document.querySelector('.button')
    // buttonSal.style.paddingTop='10%'
    changePick.style.width=0
    document.documentElement.scrollTop = 0;
    let moreD=document.querySelector('.moreD')
    let divDit = document.createElement('div');
    let newImg = document.createElement('img');
    let h1 = document.createElement('h1');
 
    newImg.src=`./תמונות יין/${item.src}`
    h1.style.marginRight='40%'
    h1.innerText=item.תיאור+"  "+item.מחיר+" ₪"
    h1.style.fontSize='1200%'
    newImg.style.width = '30%'; // התאמת גודל התמונה
    newImg.style.marginRight='35%'
    changePick.width=0
    divDit.append(newImg,h1,buttonSal)
    moreD.append(divDit)
}
