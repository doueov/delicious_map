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
      searchResultElement.innerHTML = results.map(function (result, index) {
        // a 태그로 감싸주고 href를 #로 설정하여 일단 클릭할 수 있도록 만듭니다.
        return '<a href="#" class="result-link" data-index="' + index + '">' + result.location + '</a><br>';
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

  // 클릭한 위치의 인덱스를 저장할 변수
  var selectedIndex;

  // 검색 결과에서 각 링크에 대한 클릭 이벤트 리스너 추가
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('result-link')) {
      // 클릭한 위치의 인덱스를 가져옴
      selectedIndex = event.target.dataset.index;
      
      // 클릭한 위치에 해당하는 정보를 가져옴
      var selectedResult = list[selectedIndex].location;
      
      // add-bookmark-popup 클래스를 가진 요소를 가져와서 내용을 설정하고 보이도록 함
      var addBookmarkPopup = document.querySelector('.add-bookmark-popup');
      // addBookmarkPopup.innerHTML = '선택한 위치: ' + selectedResult;
      addBookmarkPopup.style.display = 'block';
    }
  });

  // 추가, 북마크 창을 클릭하면 숨김
  document.querySelector('.add-bookmark-popup').addEventListener('click', function () {
    this.style.display = 'none';
  });
});
