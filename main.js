var TOTAL_NUM_PICS;
var SCREEN_WIDTH = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var MOBILE_SIZE = 820;

// for galleries
/*
getCurrentPhotoNum
parameters: none
returns: the number of the currently selected photo, as a STRING
*/
function getCurrentPhotoNum() {
    let selectedPhoto = document.getElementById("selected-photo").getElementsByTagName("img")[0];
    let oldPhotoNum = selectedPhoto.src.slice(-7, -5);

    // if the number is not double digits
    if (oldPhotoNum.at(0).match("/")) {
        oldPhotoNum = oldPhotoNum.slice(1);
    }

    return oldPhotoNum;
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
    // selectedPhoto.getElementsByTagName("p")[0].innerText = newPhotoNum + ' / ' + String(TOTAL_NUM_PICS);
    document.getElementById("selected-pic-num").innerHTML = newPhotoNum;

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

/*---------------------------------------------------------*/
// for specific project pages!

function clickProject(projectName) {
    let url = new URL(window.location);
    let searchParams = url.searchParams;

    searchParams.delete('projectName');
    searchParams.set('projectName', projectName);
    url.search = searchParams.toString();
    let newURL = url.toString();
    newURL = newURL.replace('projects.html', 'project.html');
    window.location.href = newURL;
}

async function loadProject() {
    let projects = await (await fetch('movies.json')).json();

    let url = new URL(window.location);
    let searchParams = url.searchParams;
    let projectName = searchParams.get('projectName');

    let selectedMovie = projects[projectName];

    let moviePhotoImg = document.getElementById("movie-photo");
    let moviePlayerDiv = document.getElementById("movie-player");
    let movieNameP = document.getElementById("movie-name");
    let movieYearP = document.getElementById("movie-year");
    let movieDescDiv = document.getElementById("movie-desc");
    let moviePosterImg = document.getElementById("movie-poster");
    let movieSelectedPhoto = document.getElementById("selected-photo");
    let moviePhotoOptions = document.getElementById("photo-options");
    let movieNumPics = document.getElementById("num-pics");

    moviePhotoImg.src = selectedMovie.photo;

    let moviePlayerData = selectedMovie.movieplayer;
    if ("thumbnail" in moviePlayerData) {
        let thumbnailImg = document.createElement("img");
        thumbnailImg.setAttribute("id","movie-player-thumbnail");
        thumbnailImg.src = moviePlayerData.thumbnail;
        let linkA = document.createElement("a");
        linkA.href = moviePlayerData.link;
        linkA.appendChild(thumbnailImg);
        moviePlayerDiv.appendChild(linkA);

    } else {
        let iframe = document.createElement("iframe");
        iframe.classList.add("w-100");
        iframe.classList.add("h-75");
        iframe.setAttribute("frameborder","0");
        iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        iframe.setAttribute("allowfullscreen","true");
        iframe.src = moviePlayerData.iframesrc;
        moviePlayerDiv.appendChild(iframe);
    }
    
    movieNameP.innerHTML = selectedMovie.name;
    movieYearP.innerHTML = selectedMovie.year;
    
    for (let i in selectedMovie.description) {
        let par = document.createElement("p");
        par.style.textAlign = "justify";
        par.innerHTML = selectedMovie.description[i];
        movieDescDiv.appendChild(par);
    }

    moviePosterImg.src = selectedMovie.poster;

    let photoDir = selectedMovie.gallery_path;

    // setting up the selected photo
    let selectedImg = movieSelectedPhoto.getElementsByTagName("img")[0];
    selectedImg.setAttribute("src","Images/" + photoDir + "/1.webp");

    // setting up the gallery
    TOTAL_NUM_PICS = selectedMovie.num_imgs;
    movieNumPics.innerHTML = String(TOTAL_NUM_PICS);
    for (let i = 0; i < TOTAL_NUM_PICS; i++) {
        let img = document.createElement("img");
        let id = "photo" + String(i + 1);
        img.setAttribute("id", id);
        if (i == 0) {
            img.classList.add("selected");
        } else {
            img.classList.add("unselected");
        }
        img.setAttribute("src", "Images/" + photoDir + "/" + String(i + 1) + ".webp");
        img.setAttribute("onclick", "selectPhoto('" + String(i + 1) + "');");

        moviePhotoOptions.appendChild(img);
    }

    remainingContentTop('project');
}

/*--------------------------------------------------------*/

function remainingContentTop(page) {
    let pagePhoto;
    if (page == 'project') {
        pagePhoto = document.getElementById("movie-photo");
    } else {
        pagePhoto = document.getElementById("header-img");
    }
    let topMargin = pagePhoto.height;

    // let screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (SCREEN_WIDTH > MOBILE_SIZE) {
        if (page == 'projects') {
            topMargin = topMargin - 300;
        } else if (page == 'contact') {
            topMargin = topMargin - 100;
        } else if (page = 'project') {
            topMargin = topMargin + 100;
        } else if (page = 'about') {
            topMargin = topMargin - 200;
        }
    } else {
        if (page == 'projects') {
            topMargin = topMargin - 120;
        } else if (page == 'contact') {
            topMargin = topMargin - 50;
        }
    }
    
    document.getElementsByClassName("remaining-content")[0].style.top = String(topMargin) + "px";
}

function constructProject(isDesktop, posterPath, movieName, year, outerDiv) {
    let col = document.createElement("div");
    if (isDesktop) {
        col.classList.add("col");
    }
    col.classList.add("movie-content");
    outerDiv.appendChild(col);
    let moviePoster = document.createElement("img");
    moviePoster.classList.add("movie-poster");
    moviePoster.setAttribute("src", posterPath);
    console.log("movie name: " + movieName);
    console.log("lower case movie name: " + movieName.toLowerCase());
    moviePoster.setAttribute("onclick","clickProject('" + movieName.toLowerCase() + "');");
    col.appendChild(moviePoster);
    
    let nameYearRow = document.createElement("div");
    nameYearRow.classList.add("row");
    let nameCol = document.createElement("div");
    nameCol.classList.add("col");
    let nameP = document.createElement("p");
    nameP.style.textAlign = "left";
    nameP.innerHTML = movieName;
    nameCol.appendChild(nameP);
    nameYearRow.appendChild(nameCol);

    let yearCol = document.createElement("div");
    yearCol.classList.add("col");
    let yearP = document.createElement("p");
    yearP.style.textAlign = "right";
    yearP.innerHTML = year;
    yearCol.appendChild(yearP);
    nameYearRow.appendChild(yearCol);

    col.appendChild(nameYearRow);
}

// projects page
async function loadProjects() {
    let projects = await (await fetch('movies.json')).json();

    if (projects.length < 0) {
        return
    }

    let projectContentDiv = document.getElementById("project-content");

    if (SCREEN_WIDTH > MOBILE_SIZE) {
        let count = 0;
        let row;
        for (let project in projects) {
            let posterPath = project.poster;
            let movieName = project.name;
            let year = project.year;
            if (count % 2 == 0) {
                projectContentDiv.appendChild(row);
                row = document.createElement("div");
                row.classList.add("row");
            }
            constructProject(true, posterPath, movieName, year, row);
        }
    } else {
        console.log("mobile screen");
        for (let project in projects) {
            let posterPath = projects[project].poster;
            let movieName = projects[project].name;
            let year = projects[project].year;
            constructProject(false, posterPath, movieName, year, projectContentDiv);
        }
    }

    remainingContentTop('projects');
    
}