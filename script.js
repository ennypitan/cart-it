





// Image Slider
const mainImage = document.getElementById('mainImg');
const smallImage = document.getElementsByClassName('small-img');


smallImage[0].addEventListener('click',()=>{
    mainImage.src = smallImage[0].src;
});
smallImage[1].addEventListener('click',()=>{
    mainImage.src = smallImage[1].src;
});
smallImage[2].addEventListener('click',()=>{
    mainImage.src = smallImage[2].src;
});
smallImage[3].addEventListener('click',()=>{
    mainImage.src = smallImage[3].src;
});