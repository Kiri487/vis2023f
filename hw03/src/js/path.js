const jsonUrl = "../userLocationData.json";
let currentIndex = 0;
let currentFloor = "1F";

function calculatePosition(x, y) {
    const minX = 13;
    const maxX = 34;
    const minY = -10;
    const maxY = 8;

    // Make sure x and y are in range
    x = Math.max(minX, Math.min(maxX, x));
    y = Math.max(minY, Math.min(maxY, y));

    const iconX = ((x - minX) / (maxX - minX)) * 100;
    const iconY = ((y - minY) / (maxY - minY)) * 100;

    return { x: iconX, y: iconY };
}

function updateIconPosition(floor, x, y) {
    const icon = document.getElementById("icon");

    // Update the floor where the icon is located
    const floorContainer = document.getElementById(`floor-${floor}`);
    if (!floorContainer) {
        console.error(`Floor container for floor ${floor} not found`);
        return;
    }
    floorContainer.appendChild(icon);

    // Update icon position
    const { x: iconX, y: iconY } = calculatePosition(x, y);
    icon.style.left = `${iconX}%`;
    icon.style.top = `${iconY}%`;

    console.log(`-----------Position info-----------`);
    console.log(`Now Floor:  ${floor}`);
    console.log(`Now X:  ${x}`);
    console.log(`Now Y:  ${y}`);
}

function loadjson() {
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const dataList = data.dataList;
            if (dataList && dataList.length > 0) {
                const point = dataList[currentIndex];
        
                if (point.Floor !== currentFloor) {
                    console.log(`Switched to Floor ${point.Floor}`);
                    currentFloor = point.Floor;
                    updateIconPosition(currentFloor, point.X, point.Y);
                } else {
                    updateIconPosition(currentFloor, point.X, point.Y);
                }
                currentIndex++;
        
                if (currentIndex >= dataList.length) {
                    currentIndex = 0;
                }
            }
        })
        .catch(error => console.error("Error fetching or parsing JSON:", error));
}
  
// Initialize icon position
loadjson();
  
// Updated every second
setInterval(loadjson, 1000);