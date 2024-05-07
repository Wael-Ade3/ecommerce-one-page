document.addEventListener("DOMContentLoaded", function() {
    // الكود هنا سيتم تشغيله بعد تحميل جميع العناصر في الصفحة
    let menu = document.querySelector(".menu");
    let close = document.querySelector(".close");
    let navlinks = document.querySelector(".nav-links");

    menu.onclick = () => {
        navlinks.style.left = '0';
    };
    close.onclick = () => {
        navlinks.style.left = '-60%';
    }
});