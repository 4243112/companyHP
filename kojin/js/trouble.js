// メガメニュー（複数）のホバー動作
document.addEventListener('DOMContentLoaded', () => {
    const menuTriggers = document.querySelectorAll('.js-hover-menu');

    menuTriggers.forEach((trigger) => {
        const menu = trigger.querySelector('.mega-menu');

        trigger.addEventListener('mouseenter', () => {
            trigger.classList.add('is-active');
            if (menu) menu.classList.add('is-active');
        });

        trigger.addEventListener('mouseleave', () => {
            trigger.classList.remove('is-active');
            if (menu) menu.classList.remove('is-active');
        });
    });

    // トップへ戻るボタンの機能
    const scrollTopBtn = document.querySelector('.scroll-top');

    // スクロール位置を監視
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    // クリック時にトップへスクロール
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});