var favCount = 0;

let fbrewery = [];

function addFav(infoName, infoAdd1, infoAdd2, infoPhone) {
    var elFav = [];
    var elID = "";
    // add to array
    fbrewery.push([infoName, infoAdd1, infoAdd2, infoPhone, favCount]);
    elID = "fav" + favCount;
    elFav[favCount] = document.getElementById(elID);
    elFav[favCount].children[0].textContent = infoName;
    favCount++;
}

function delFav() {
    document.getElementById("fav0").innerHTML = "";
    document.getElementById("fav1").innerHTML = "";
    document.getElementById("fav2").innerHTML = "";
    document.getElementById("fav3").innerHTML = "";
    document.getElementById("fav4").innerHTML = "";
    document.getElementById("fav5").innerHTML = "";
    document.getElementById("fav6").innerHTML = "";
    document.getElementById("fav7").innerHTML = "";
    document.getElementById("fav8").innerHTML = "";
    document.getElementById("fav9").innerHTML = "";
}

function favInfo(brewery) {
    var htmlName = "Name: " + fbrewery[brewery][0];
    var htmlAdd1 = "Address: " + fbrewery[brewery][1];
    var htmlAdd2 = "         " + fbrewery[brewery][2];
    var htmlPhone = "Phone: " + fbrewery[brewery][3];
  
    document.getElementById("name-info").innerHTML = htmlName;
    document.getElementById("address1-info").innerHTML = htmlAdd1;
    document.getElementById("address2-info").innerHTML = htmlAdd2;
    document.getElementById("phone-info").innerHTML = htmlPhone;    
  }

