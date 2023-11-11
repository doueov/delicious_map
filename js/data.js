document.addEventListener("DOMContentLoaded", function () {
  var list = [
    { "location": "서울 관악구 신림동 신림역 1번 출구" },
    { "location": "서울 관악구 신림동 신림역 2번 출구" },
    { "location": "서울 관악구 신림동 신림역 3번 출구" },
    { "location": "서울 관악구 신림동 신림역 4번 출구" },
    { "location": "서울 관악구 신림동 신림역 5번 출구" },
    { "location": "서울 관악구 신림동 신림역 6번 출구" },
    { "location": "서울 관악구 신림동 신림역 7번 출구" },
  ];

  // 검색 버튼 클릭 시 이벤트 리스너 실행.
  document.querySelector('.btn-search').addEventListener('click', function () {
    // 입력된 검색어 가져오기.
    var searchTerm = document.querySelector('.input-bar').value;

    // 검색어와 일치하는 항목 찾기.
    var results = list.filter(function (item) {
      return item.location.includes(searchTerm);
    });

    // 결과를 출력할 요소 가져오기.
    var searchResultElement = document.querySelector('.search-result');
    // .bookmark 클래스를 가진 요소 가져오기.
    var bookmarkElement = document.querySelector('.bookmark');

    // 결과 표시.
    if (results.length > 0) {
      // 결과가 있으면 각 위치를 줄 바꿈과 함께 표시.
      searchResultElement.innerHTML = results.map(function (result) {
        // 개행을 추가하여 각 위치가 새로운 줄에 표시되도록 변경합니다.
        return result.location + '<br>';
      }).join('');

      // .bookmark 클래스를 가진 요소 비우기.
      bookmarkElement.innerHTML = '';
    } else {
      // 결과가 없으면 메시지 표시.
      searchResultElement.textContent = '검색 결과가 없습니다.';
      // .bookmark 클래스를 가진 요소 비우기.
      bookmarkElement.innerHTML = '';
    }
  });
});
