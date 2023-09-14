var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
VANTA.NET({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 250.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x0,
    backgroundColor: 0xb6b6b6,
    showDots: false,
})
VANTA.WAVES({
    el: "#radio",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 135.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xd111b,
    shininess: 150.00,
    waveHeight: 40.00,
    waveSpeed: 1.30,
    zoom: 1.75
})