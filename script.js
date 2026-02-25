document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // منع إغلاق القائمة فوراً عند الضغط
            navMenu.classList.toggle('show');
        });

        // إغلاق القائمة عند الضغط في أي مكان خارجها
        document.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    }
});
