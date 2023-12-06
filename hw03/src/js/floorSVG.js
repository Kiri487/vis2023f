function changeFloorSVG(checkbox) {
    var floorNumber = checkbox.id.split("-")[1];
    var image = document.getElementById("img-" + floorNumber);
    if (checkbox.checked == true){
        image.src = "../img/" + floorNumber + "_detailed.svg";
    } else {
        image.src = "../img/" + floorNumber + ".svg";
    }
}