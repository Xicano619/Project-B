  function returnBreweriesInfo(searchCity) {
    
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=breweries&location=" + searchCity +"&limit=10&sortby=distance"; 

  $.ajax({
    url: queryURL,
    headers: {
      Authorization:
        "Bearer EwKlpX7pyuR5IUSe_oV1U-UW6jjAkir-ffvzqKOSrC4IaKVE5pUr6Wc2Ssp_UD5sjzdkL34h0t9hzvyzYTSmMcksIfHo_NXNLo-qttFlBn9X-9eTbCy6jrtlxDamX3Yx",
    },
    method: "GET",
  }).then(function (response) {
    //Store the Region Center Coordinates
    var centerLat = response.region.center.latitude;
    var centerLong = response.region.center.longitude;

      //Creating variables to store the brewery/business information
      var brewName = [];
      var brewLat = [];
      var brewLon = [];
      var brewAddress1 = [];
      var brewAddress2 = [];
      var brewPhone = [];
      var brewReviews = [];
      var brewClosed = [];
      var elList = [];
      var elID = "";
      var j = 1;
      for (let i = 0; i< response.businesses.length; i++){
        brewName[i] = response.businesses[i].name;
        brewLat[i] = response.businesses[i].coordinates.latitude;
        brewLon[i] = response.businesses[i].coordinates.longitude;
        brewAddress1[i] = response.businesses[i].location.display_address[0];
        brewAddress2[i] = response.businesses[i].location.display_address[1];
        brewPhone[i] = response.businesses[i].display_phone;
        brewReviews[i] = response.businesses[i].url;
        brewClosed[i] = response.businesses[i].is_closed;
        localStorage.setItem("name" + i, brewName[i]);
        elID = "list" + i;
        elList[i] = document.getElementById(elID);
        elList[i].children[0].textContent = brewName[i];
        localStorage.setItem("lat" + i, brewLat[i]);
        localStorage.setItem("lon" + i, brewLon[i]);
        localStorage.setItem("address1" + i, brewAddress1[i]);
        localStorage.setItem("address2" + i, brewAddress2[i]);
        localStorage.setItem("phone" + i, brewPhone[i]);
        localStorage.setItem("reviews" + i, brewReviews[i]);
        localStorage.setItem("closed" + i, brewClosed[i]);
      };
    });
  }

  function breweryInfo(brewery) {
    var infoName = localStorage.getItem("name" + brewery);
    var infoAdd1 = localStorage.getItem("address1" + brewery);
    var infoAdd2 = localStorage.getItem("address2" + brewery);
    var infoPhone = localStorage.getItem("phone" + brewery);
    var htmlName = "Name: " + infoName;
    var htmlAdd1 = "Address: " + infoAdd1;
    var htmlAdd2 = "         " + infoAdd2;
    var htmlPhone = "Phone: " + infoPhone;
    document.getElementById("name-info").innerHTML = htmlName;
    document.getElementById("address1-info").innerHTML = htmlAdd1;
    document.getElementById("address2-info").innerHTML = htmlAdd2;
    document.getElementById("phone-info").innerHTML = htmlPhone;
    addFav(infoName,infoAdd1,infoAdd2, infoPhone);
  }

    $(document).ready(function() {
      $('.sidenav').sidenav();
    });
