let slideIndex = 1;


function plusslides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides (n) {
    let i
    let slides = document.getElementsByClassName("slides");
    let dot = document.getElementsByClassName("dots")
    console.log(slides)
    if (n > slides.length) {slideIndex = 1 }
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length ; i++) {
        slides[i].style.display = "none" ;
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace("active", "") ;
    // }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";

}
// -------------------------------------------------------------------------------------
// const images = document.querySelectorAll('.slides'); 
// const buttons = document.querySelectorAll('.dots'); 

// let currentIndex = 0; 


// function updateCarousel(index) {
//   images.forEach(img => img.classList.remove('active'));
//   buttons.forEach(btn => btn.classList.remove('active'));

//   images[index].classList.add('active');
//   buttons[index].classList.add('active');
// }

// // คลิกที่จุด
// buttons.forEach((btn, idx) => {
//   btn.addEventListener('click', () => {
//     currentIndex = idx;
//     updateCarousel(currentIndex);
//   });
// });

// delay timing ------------------------------------------------------
function myFunction() {
    console.log("เรียกฟังก์ชันแล้ว", new Date().toLocaleTimeString());
  }
  
  // เรียกทุก ๆ 2000 มิลลิวินาที (2 วินาที)
  const intervalId = setInterval(plusslides(1), 200);
  intervalId()

  
  // หยุดเรียกหลัง 10 วินาที
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("หยุดเรียกฟังก์ชัน");
  }, 10000);

  