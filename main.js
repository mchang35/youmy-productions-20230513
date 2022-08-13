// window.functionName=selectPhoto;

function selectPhoto(picNum) {
    console.log("A photo has been clicked! Its ID is " + picNum);

    let selectedPhoto = document.getElementById("selected-photo").getElementsByTagName("img")[0];
    let oldPhotoNum = selectedPhoto.src.slice(-6, -4);
    if (oldPhotoNum.at(0).match(/[a-zA-Z]/)) {
        oldPhotoNum = oldPhotoNum.slice(1);
    }

    if (picNum==oldPhotoNum) {
        console.log("We are selecting the same picture");
        return;
    }

    clickedPhotoId = 'photo' + picNum;

    let clickedPhoto = document.getElementById(clickedPhotoId);

    // make the previously selected photo UNselected
    let oldPhotoId = 'photo' + oldPhotoNum;
    console.log("Old photo id: " + oldPhotoId);

    let oldPhoto = document.getElementById(oldPhotoId);
    oldPhoto.classList.remove("selected");
    oldPhoto.classList.add("unselected");

    // make the selected photo the big one
    selectedPhoto.src = clickedPhoto.src;

    // change the class for new photo from unselected to selected
    clickedPhoto.classList.remove("unselected");
    clickedPhoto.classList.add("selected");
}