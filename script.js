/**
 * ==========================================================================
 * PORTFOLIO MAIN CORE LOGIC
 * Author: NF2077
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    const navbar = document.querySelector('.navbar');

    // Mengubah transparansi Navbar saat pengguna melakukan scrolling halaman
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = '#090d16';
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(9, 13, 22, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

});
