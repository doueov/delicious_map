document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu-list');
    var menuImage = document.querySelector('.menu img');

    menu.addEventListener('click', function() {
        if (menuList.style.display === 'block') {
            menuList.style.display = 'none';
            menuImage.src = 'img/menu.png';
            menuImage.alt = '메뉴바';
        } else {
            menuList.style.display = 'block';
            var links = menuList.querySelectorAll('a');
            links.forEach(function(link) {
                link.style.display = 'block';
            });
            menuImage.src = 'img/menu-cancel.png';
            menuImage.alt = '메뉴취소';
        }
    });

    // 추가: 화면 크기가 700px 이하이고 메뉴가 닫혀있는 경우 menu-list를 감춤
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 700 && menuList.style.display !== 'block') {
            menuList.style.display = 'none';
        }
    });
});
