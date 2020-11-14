var favCount = 0;
// fbrewery = [name, add1, add2, phone]

let fbrewery = [];

function addFav(infoName, infoAdd1, infoAdd2, infoPhone) {
    var elFav = [];
    var elID = "";
    // add to array
    fbrewery.push([infoName, infoAdd1, infoAdd2, infoPhone, favCount]);
    elID = "fav" + favCount;
    console.log("elID = " + elID);
    elFav[favCount] = document.getElementById(elID);
    console.log(elFav[favCount]);
    elFav[favCount].children[0].textContent = infoName;
    favCount++;
}

function delFav() {
    console.log("Removing from array");
    // del from array
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


function build_list() {
    var brewery = [];
    for (let i = 0; i< 10; i++){
        brewery[i] = localStorage.getItem("name" + i);
        console.log(brewery[i]);
    }

}
