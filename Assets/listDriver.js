/* var searchCity = "";

var elOceanside = document.getElementById('link1');
searchCity = "Oceanside";
elOceanside.onclick = returnBreweriesInfo("Oceanside");

var elVista = document.getElementById('link2');
searchCity = "Vista";
elVista.onclick = returnBreweriesInfo(searchCity);


var elNorthPark = document.getElementById('link3');
searchCity = "North Park";
elNorthPark.onclick = returnBreweriesInfo(searchCity);


var elSanDiego = document.getElementById('link4');
searchCity = "San Diego";
elSanDiego.onclick = returnBreweriesInfo(searchCity);


var elMiraMesa = document.getElementById('link5');
searchCity = "Mira Mesa"
elMiraMesa.onclick = returnBreweriesInfo(searchCity);


var elChulaVista = document.getElementById('link6');
searchCity = "Chula Vista";
elChulaVista.onclick = returnBreweriesInfo(searchCity);



function returnOceanside(searchCity) {
    returnBreweriesInfo(searchCity);
}

*/


function build_list() {
    var brewery = [];
    for (let i = 0; i< 10; i++){
        brewery[i] = localStorage.getItem("name" + i);
        console.log(brewery[i]);
    }

}
