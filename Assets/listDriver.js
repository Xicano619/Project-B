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
    var elClearButton = document.getElementById("clearBtn");
    elClearButton.onclick = function(event) {
        delFav();
    }
}

function delFav() {
    favCount = 0;
    fbrewery = [];
    document.getElementById("fav0").innerHTML = "<a href=\"javascript:favInfo(0)\"></a>";
    document.getElementById("fav1").innerHTML = "<a href=\"javascript:favInfo(1)\"></a>";
    document.getElementById("fav2").innerHTML = "<a href=\"javascript:favInfo(2)\"></a>";
    document.getElementById("fav3").innerHTML = "<a href=\"javascript:favInfo(3)\"></a>";
    document.getElementById("fav4").innerHTML = "<a href=\"javascript:favInfo(4)\"></a>";
    document.getElementById("fav5").innerHTML = "<a href=\"javascript:favInfo(5)\"></a>";
    document.getElementById("fav6").innerHTML = "<a href=\"javascript:favInfo(6)\"></a>";
    document.getElementById("fav7").innerHTML = "<a href=\"javascript:favInfo(7)\"></a>";
    document.getElementById("fav8").innerHTML = "<a href=\"javascript:favInfo(8)\"></a>";
    document.getElementById("fav9").innerHTML = "<a href=\"javascript:favInfo(9)\"></a>";
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

