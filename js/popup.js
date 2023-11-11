var addedLocations = [];

    function addMapClicked(location) {
        if (!isLocationAdded(location)) {
            alert("지도에 추가 되었습니다");
            addedLocations.push(location);
        } else {
            alert("이미 추가된 위치입니다");
        }
    }

    function addBookmarkClicked(location) {
        if (!isLocationAdded(location)) {
            alert("북마크에 추가 되었습니다");
            addedLocations.push(location);
        } else {
            alert("이미 추가된 위치입니다");
        }
    }

    function isLocationAdded(location) {
        // 위치가 이미 배열에 있는지 확인
        return addedLocations.includes(location);
    }