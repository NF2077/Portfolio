/**
 * ==========================================================================
 * PORTFOLIO GLOBAL CORE ENGINE
 * Developer: NF2077
 * Features: Dynamic transparent header navbar & dynamic live taxonomy sorting.
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC HEADER TRANSPARENCY CONTROLLER
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.style.background = '#070a12';
                navbar.style.boxShadow = '0 12px 30px -10px rgba(0,0,0,0.6)';
            } else {
                navbar.style.background = 'rgba(7, 10, 18, 0.85)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // 2. LIVE GALLERY FILTER ENGINE (Secured Context Execution)
    const filterButtons = document.querySelectorAll('.btn-filter');
    const projectCards = document.querySelectorAll('.project-item-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Hapus kelas aktif dari seluruh barisan tombol filter
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Pasang kelas aktif ke tombol yang baru diklik
                button.classList.add('active');

                const selectedFilter = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (selectedFilter === 'all' || selectedFilter === cardCategory) {
                        card.classList.remove('hide');
                    } else {
                        card.classList.add('hide');
                    }
                });
            });
        });
    }

});
