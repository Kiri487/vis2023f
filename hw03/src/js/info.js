const jsonUrl02 = "../AerobicData.json";

function loadFloor(){
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const dataList = data.dataList;
            if (dataList && dataList.length > 0) {
                const point = dataList[currentIndex];
                updateFloorInfo(point.Floor)
                currentIndex++;
                if (currentIndex >= dataList.length) {
                    currentIndex = 0;
                }
            }
        })
        .catch(error => console.error("Error fetching or parsing JSON:", error));
}

function loadjson() {
    fetch(jsonUrl02)
        .then(response => response.json())
        .then(data => {
            calorieData = data;
            if (calorieIndex < calorieData.length) {
                const point = calorieData[calorieIndex];
                updateInfo(point.Time, point.Distance, point.Calorie);
                calorieIndex++;
            } else {
                calorieIndex = 0;
            }
        })
        .catch(error => console.error("Error fetching JSON:", error));
}

function updateFloorInfo(floor) {
    const floorInfo = document.getElementById("floor-info");
    floorInfo.textContent = `Floor: ${floor}`;
}

function updateInfo(time, distance, calorie) {
    const timeInfo = document.getElementById("time-info");
    const distanceInfo = document.getElementById("distance-info");
    const calorieInfo = document.getElementById("calories-info");
    
    timeInfo.textContent = `Time: ${time} seconds`;
    distanceInfo.textContent = `Distance: ${distance.toFixed(2)} meters`;
    calorieInfo.textContent = `Calories: ${calorie.toFixed(2)} calories`;
}

let calorieIndex = 0;
let calorieData = null;

// Initialize icon position
loadFloor();
loadjson();

// Updated every second
setInterval(loadFloor, 1000);
setInterval(loadjson, 1000);