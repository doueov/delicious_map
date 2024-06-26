var map = null; // 전역 변수로 지도 선언

// 지도 초기화 함수
function initMap() {
    var mapOptions = {
        center: new kakao.maps.LatLng(37.571, 126.9778),
        level: 3
    };

    map = new kakao.maps.Map(document.getElementById('map'), mapOptions);

    // 지도 중심이 변경되었을 때 이벤트 리스너
    kakao.maps.event.addListener(map, 'center_changed', function () {
        var level = map.getLevel();
        var latlng = map.getCenter();
        resultDiv.innerHTML = message;
    });

    // 지도 클릭 이벤트 리스너
    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        var latlng = mouseEvent.latLng;

        var marker = new kakao.maps.Marker({
            position: latlng
        });
        marker.setMap(map);

        var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';

        var clickLatlngDiv = document.getElementById('clickLatlng');
        clickLatlngDiv.innerHTML = message;
    });
}

// 초기화 함수 호출
initMap();

// 지도 관련 함수들
function setCenter() {
    var moveLatLon = new kakao.maps.LatLng(37.571, 126.9778);
    map.setCenter(moveLatLon);
}

function panTo() {
    var moveLatLon = new kakao.maps.LatLng(37.571, 126.9778);
    map.panTo(moveLatLon);
}

function resizeMap() {
    var mapContainer = document.getElementById('map');
    mapContainer.style.width = '800px';
    mapContainer.style.height = '800px';
    map.relayout();
}

function relayout() {
    map.relayout();
}
