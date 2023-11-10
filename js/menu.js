document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu-list');
    var menuImage = document.querySelector('.menu img');

    menu.addEventListener('click', function() {
        if (menuList.style.display === 'block') {
            menuList.style.display = 'none';
            menuImage.src = 'img/menu.png'; // 변경된 부분: 이미지 경로 변경
            menuImage.alt = '메뉴바'; // 변경된 부분: alt 텍스트 변경
        } else {
            menuList.style.display = 'block';
            var links = menuList.querySelectorAll('a');
            links.forEach(function(link) {
                link.style.display = 'block';
            });
            menuImage.src = 'img/menu-cancel.png'; // 변경된 부분: 이미지 경로 변경
            menuImage.alt = '메뉴취소'; // 변경된 부분: alt 텍스트 변경
        }
    });
});
