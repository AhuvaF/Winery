const srcArray = ['./השראות/adv1.jpg',
'./השראות/adv2.jpg',
'./השראות/adv3.png',
'./השראות/adv4.jpg']
let index = 0

var getAllImages = () => {
    // גישה באמצעות שם תגית
    // מחזיר מערך של כל התמונות בדף
    let allImagesArray = document.getElementsByTagName('img');
    console.log(allImagesArray);
}
const getMainImage = () => {
    // css-גישה באמצעות בורר כמו ב
    // בוחר את הראשון שמתאים לבורר query selector 
    let mainImage = document.querySelector('.images-container img:first-child')
    return mainImage
}
const changeImage = (src = srcArray[(index++) % srcArray.length]) => {
    //attribute בורר לפי : css-גישה באמצעות בורר כמו ב
    let clickedImage = document.querySelector(`img[src="${src}"]`)
    // בוחר את כל האלמנטים שעונים על התנאי (מחזיר מערך של אלמנטים) query selector all 
    let allSmallImage = document.querySelectorAll('.images-container>div>img')

    allSmallImage.forEach((smallImage) => smallImage.classList.remove('current-image'))
    // clickedImage.classList.add('current-image')

    let mainImage = getMainImage()
    mainImage.setAttribute('src', src)
}
// פונקציה מובנית- מקבלת פונקציה ואיקס זמן
//  הפונקציה תופעל כל איקס זמןבא
let intervalID
function startTheSlide(){
    intervalID = setInterval(changeImage, 1 * 3000)
}
startTheSlide()
