AOS.init();
let listImage = document.querySelector(".list-images");
let imgs = document.querySelectorAll(".slide-item");
let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");
let item1 = document.querySelector(".item-1");
let indexItems = document.querySelectorAll(".index-item");

// side-bar 
let rightNav = document.querySelector('#rightNav');
let toggleRightNav = document.querySelector('#toggle-rightNav');


let current = 0;
let length = imgs.length;


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


const handleChangeSlide = () => {
  current++;
  if (current === length) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${-width * current}px)`;
    const prevActiveElement = document.querySelector('.index-item.active');

    if (prevActiveElement) {
      prevActiveElement.classList.remove('active');
    }
    document.querySelector(`.item-${current + 1}`).classList.add("active");
  } else {
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${-width * current}px)`;
    const prevActiveElement = document.querySelector('.index-item.active');
    
    if (prevActiveElement) {
      prevActiveElement.classList.remove('active');
    }
    document.querySelector(`.item-${current + 1}`).classList.add("active");
  }
};


let handelEventChangeSlide = setInterval(() => {
  handleChangeSlide();
}, 4000);

btnRight.addEventListener("click", () => {
  clearInterval(handelEventChangeSlide);
  handleChangeSlide();
  handelEventChangeSlide = setInterval(() => handleChangeSlide(), 4000);
});

btnLeft.addEventListener("click", () => {
  clearInterval(handelEventChangeSlide);
  if (current === 0) {
    current = length - 1;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${-width * current}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(`.item-${current + 1}`).classList.add("active");
  } else {
    current--;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${-width * current}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(`.item-${current + 1}`).classList.add("active");
  }

  handelEventChangeSlide = setInterval(() => handleChangeSlide(), 4000);
});


// Lấy tất cả các phần tử có cùng class
const elements = document.querySelectorAll('.index-item');

// Xử lý sự kiện click cho từng phần tử
elements.forEach((element, index) => {
  element.addEventListener('click', () => {
    // Loại bỏ lớp "active" khỏi phần tử trước đó
    const prevActiveElement = document.querySelector('.index-item.active');
    if (prevActiveElement) {
      prevActiveElement.classList.remove('active');
    }

    // Thêm lớp "active" vào phần tử hiện tại
    element.classList.add('active');
    clearInterval(handelEventChangeSlide);
    current = index;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${-width * current}px)`;
    handelEventChangeSlide = setInterval(() => handleChangeSlide(), 4000);
  });
});









