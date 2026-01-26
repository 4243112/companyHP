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
});
