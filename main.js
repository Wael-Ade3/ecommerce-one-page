document.addEventListener("DOMContentLoaded", function() {
    // الكود هنا سيتم تشغيله بعد تحميل جميع العناصر في الصفحة
    let menu = document.querySelector(".menu");
    let close = document.querySelector(".close");
    let navlinks = document.querySelector(".nav-links");
    let next = document.querySelector(".next");
    let previous = document.querySelector(".previous");
    let mainImg = document.querySelector(".main-photo :nth-child(3)")

    // Start nav
    menu.onclick = () => {
        navlinks.style.left = '0';
    };
    close.onclick = () => {
        navlinks.style.left = '-60%';
    }
    // End nav
    
    // Start LeftHeader Functoin
    let images = ["image-product-1.jpg","image-product-2.jpg","image-product-3.jpg","image-product-4.jpg"]
    let numImg = 0;
    next.onclick = () => {
        if (numImg < 3) {
            numImg++;
            mainImg.src = `images/${images[numImg]}`
            console.log(numImg)
        }
    }
    previous.onclick = () => {
        if (numImg > 0) {
            numImg--;
            mainImg.src = `images/${images[numImg]}`
            console.log(numImg)
        }
    }
    // End LeftHeader Functoin
});