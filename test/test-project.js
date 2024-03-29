AOS.init();
// let listImage = document.querySelector(".list-images");
// let imgs = document.querySelectorAll(".slide-item");
// let btnLeft = document.querySelector(".btn-left");
// let btnRight = document.querySelector(".btn-right");
// let item1 = document.querySelector(".item-1");
// let indexItems = document.querySelectorAll(".index-item");

// let current = 0;
// let length = imgs.length;

// const handleChangeSlide = () => {
//   current++;
//   if (current === length) {
//     current = 0;
//     let width = imgs[0].offsetWidth;
//     listImage.style.transform = `translateX(${-width * current}px)`;
//     document.querySelector(".active").classList.remove("active");
//     document.querySelector(`.item-${current + 1}`).classList.add("active");
//   } else {
//     let width = imgs[0].offsetWidth;
//     listImage.style.transform = `translateX(${-width * current}px)`;
//     document.querySelector(".active").classList.remove("active");
//     document.querySelector(`.item-${current + 1}`).classList.add("active");
//   }
// };

// let handelEventChangeSlide = setInterval(() => {
//   handleChangeSlide();
// }, 4000);

// btnRight.addEventListener("click", () => {
//   clearInterval(handelEventChangeSlide);
//   handleChangeSlide();
//   handelEventChangeSlide = setInterval(() => handleChangeSlide(), 4000);
// });

// btnLeft.addEventListener("click", () => {
//   clearInterval(handelEventChangeSlide);
//   if (current === 0) {
//     current = length - 1;
//     let width = imgs[0].offsetWidth;
//     listImage.style.transform = `translateX(${-width * current}px)`;
//     document.querySelector(".active").classList.remove("active");
//     document.querySelector(`.item-${current + 1}`).classList.add("active");
//   } else {
//     current--;
//     let width = imgs[0].offsetWidth;
//     listImage.style.transform = `translateX(${-width * current}px)`;
//     document.querySelector(".active").classList.remove("active");
//     document.querySelector(`.item-${current + 1}`).classList.add("active");
//   }

//   handelEventChangeSlide = setInterval(() => handleChangeSlide(), 4000);
// });


// for (let i = 0; i < indexItems.length; i++) {
//   document.querySelector(`.item-${i + 1}`).addEventListener("click", () => {
//     clearInterval(handelEventChangeSlide);
//     current = i;
//     let width = imgs[0].offsetWidth;
//     listImage.style.transform = `translateX(${-width * current}px)`;
//     document.querySelector(".active").classList.remove("active");
//     document.querySelector(`.item-${i + 1}`).classList.add("active");
//     handelEventChangeSlide = setInterval(() => handleChangeSlide(), 4000);
//   });
// }

// let countryItems = document.querySelectorAll('.country-item');

// countryItems.forEach((e,index)=>{
//   e.addEventListener('click',()=>{
//     document.querySelector('.active').classList.remove('active');
//     document.querySelector(`.item-${index}`).classList.add('active');
//   })
// })


let rightNav = document.querySelector('#rightNav');
let toggleRightNav = document.querySelector('#toggle-rightNav');


toggleRightNav.addEventListener('click',()=>{
  let currentValueRight = rightNav.style.right
  if (currentValueRight === "1%"){
    rightNav.style.right = '-9%';
    toggleRightNav.style.rotate = "180deg";
  }else if(currentValueRight === "-9%" ){
    rightNav.style.right = "1%" ;
    toggleRightNav.style.rotate = "unset"
  } 
  
})

