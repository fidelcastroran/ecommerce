const imgs = document.querySelectorAll(".img a");
let imgId=1;

const imgDiv = document.querySelectorAll('.img');

imgs.forEach((img)=>{
    img.addEventListener('click',()=>{
        // e.preventDefault();
        imgId=img.dataset.id;

        imgDiv.forEach((img)=>{
          img.classList.remove('active');
         });
        
        img.parentElement.classList.add('active');
      moveImage();
    });
});      


function moveImage()
{
    const imgWidth= document.querySelector('.main-image img:first-child').clientWidth;
    let width=(imgId-1)*imgWidth;
    document.querySelector('.main-image').style.transform=` translateX(${-width}px)`;
}

const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const qtyTxt = document.querySelector('#qty');

minusBtn.addEventListener('click',()=>{
    let qtty= parseInt(qtyTxt.value);
    if(qtty>0){
        qtty--;
        qtyTxt.value=qtty;
    }
});
plusBtn.addEventListener('click',()=>{
    let qtty=parseInt(qtyTxt.value);
    if(qtty>=0){
        qtty++;
        qtyTxt.value=qtty;
    }
});