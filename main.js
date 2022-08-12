// window.functionName=selectPhoto;

function selectPhoto(pic_id) {
    console.log("A photo has been clicked! Its ID is " + pic_id);

    let clickedPhoto = document.getElementById(pic_id);

    // make the previously selected photo UNselected
    let selectedPhoto = document.getElementById("selected-photo");
    let oldPhotoSrc = selectedPhoto.src;

    console.log("The old photo's src is: " + oldPhotoSrc);

    let oldPhotoId = oldPhotoSrc.slice(7, -4);

    console.log("Old photo id:" + oldPhotoId);

    let oldPhoto = document.getElementById(oldPhotoId);
    oldPhoto.classList.remove("selected");
    oldPhoto.classList.add("unselected");

    // make the selected photo the big one
    selectedPhoto.src = clickedPhoto.src;
    selectedPhoto.classList.remove()

    // change the class for new photo from unselected to selected
    clickedPhoto.classList.remove("unselected");
    clickedPhoto.classList.add("selected");
}