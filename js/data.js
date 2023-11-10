document.addEventListener("DOMContentLoaded", function() {
  var list = [
    { "location": "서울 관악구 신림동 신림역 1번출구" },
    { "location": "서울 관악구 신림동 신림역 2번출구" },
    { "location": "서울 관악구 신림동 신림역 3번출구" },
    { "location": "서울 관악구 신림동 신림역 4번출구" },
    { "location": "서울 관악구 신림동 신림역 5번출구" },
    { "location": "서울 관악구 신림동 신림역 6번출구" },
    { "location": "서울 관악구 신림동 신림역 7번출구" },
  ];

  var inputBar = document.querySelector('.input-bar');

  inputBar.addEventListener('input', function() {
    var searchTerm = inputBar.value.trim().toLowerCase();

    // 필터링된 결과 배열
    var filteredList = list.filter(function(item) {
      return item.location.toLowerCase().includes(searchTerm);
    });

    // 결과를 화면에 표시
    displayResults(filteredList);
  });

  function displayResults(results) {
    var screen = document.querySelector('.screen');
    screen.innerHTML = ''; // 이전 결과 지우기

    if (results.length === 0) {
      screen.innerHTML = '<p>일치하는 결과가 없습니다.</p>';
      return;
    }

    results.forEach(function(result) {
      var paragraph = document.createElement('p');
      paragraph.textContent = result.location;
      screen.appendChild(paragraph);
    });
  }
});

