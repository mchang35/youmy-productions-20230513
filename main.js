var TOTAL_NUM_PICS = 17;

/*
getCurrentPhotoNum
parameters: none
returns: the number of the currently selected photo, as a STRING
*/
function getCurrentPhotoNum() {
    let selectedPhoto = document.getElementById("selected-photo").getElementsByTagName("img")[0];
    let oldPhotoNum = selectedPhoto.src.slice(-6, -4);

    // if the number is not double digits
    if (oldPhotoNum.at(0).match(/[a-zA-Z]/)) {
        oldPhotoNum = oldPhotoNum.slice(1);
    }

    return oldPhotoNum
}

/*
switchPhotos
Changes the interface look so that the newly selected photo replaces
the current photo as the selected photo on the screen.
parameters: 
    - oldPhotoNum: the number of the currently selected photo, as a STRING
    - newPhotoNum: the number of the new selected photo, as a STRING
returns: nothing
*/
function switchPhotos(oldPhotoNum, newPhotoNum) {
    newPhotoId = 'photo' + newPhotoNum;
    let newPhoto = document.getElementById(newPhotoId);

    // make the previously selected photo UNselected
    let oldPhotoId = 'photo' + oldPhotoNum;

    let oldPhoto = document.getElementById(oldPhotoId);
    oldPhoto.classList.remove("selected");
    oldPhoto.classList.add("unselected");

    // make the selected photo the big one
    let selectedPhoto = document.getElementById("selected-photo");
    selectedPhoto.getElementsByTagName("img")[0].src = newPhoto.src;

    // change the label on the selected photo to be <new number> / <total # of pics>
    selectedPhoto.getElementsByTagName("p")[0].innerText = newPhotoNum + ' / ' + String(TOTAL_NUM_PICS);

    // change the class for new photo from unselected to selected
    newPhoto.classList.remove("unselected");
    newPhoto.classList.add("selected");
}

/*
selectPhoto
Executed when a user selects a photo manually from the scroll bar of
photos.
parameters:
    - picNum: the number of the newly selected photo, as a STRING
returns: nothing
*/
function selectPhoto(picNum) {
    let oldPhotoNum = getCurrentPhotoNum();

    switchPhotos(oldPhotoNum, picNum)
}

/*
scrollVisiblePhoto
Makes sure that the selected photo is visible in the gallery upon
selection/activation.
parameters: 
    - picNum: the number of the photo we want to be visible in the
    gallery, as a STRING
returns: nothing
*/
function scrollVisiblePhoto(picNum) {
    let currImage = document.getElementById("photo" + picNum);
    currImage.scrollIntoView({behavior: "smooth"});
}

/*
plusPhotoNum
Executed when a user presses either the next or the previous button.
parameters: 
    - change: an INT representing the change of photo number from the
    currently selected photo number (usually -1 or 1)
returns: nothing
*/
function plusPhotoNum(change) {
    // get id of current photo
    let oldPhotoNum = getCurrentPhotoNum();

    // get id of next or previous (new) photo
    let newPhotoNum = parseInt(oldPhotoNum) + change;
    
    if (newPhotoNum > TOTAL_NUM_PICS) {
        newPhotoNum = 1;
    } else if (newPhotoNum < 1) {
        newPhotoNum = TOTAL_NUM_PICS;
    }

    let newPhotoNumStr = String(newPhotoNum);

    // change/update the photos
    switchPhotos(oldPhotoNum, newPhotoNumStr);

    // make sure the selected photo is visible in the
    // scrollable gallery
    scrollVisiblePhoto(newPhotoNumStr);

}