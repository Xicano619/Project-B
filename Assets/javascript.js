function returnBreweriesInfo(searchCity) {
    
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=breweries&location=" + searchCity +"&limit=10&sortby=distance"; 

    $.ajax({
      url: queryURL,
      headers: {
        'Authorization' : 'Bearer EwKlpX7pyuR5IUSe_oV1U-UW6jjAkir-ffvzqKOSrC4IaKVE5pUr6Wc2Ssp_UD5sjzdkL34h0t9hzvyzYTSmMcksIfHo_NXNLo-qttFlBn9X-9eTbCy6jrtlxDamX3Yx'
      },
      method: "GET",
    }).then(function(response) {
      //Store the Region Center Coordinates
      var centerLat = response.region.center.latitude;
      var centerLong = response.region.center.longitude;
      
      //Display in console log the region center lattitude and longitude
      console.log(response.region.center.latitude);
      console.log(response.region.center.longitude);

      //Creating variables to store the brewery/business information
      for (let i = 0; i< response.businesses.length; i++){
      var brewName0 = response.businesses[0].name;
      var brewName1 = response.businesses[1].name;
      var brewName2 = response.businesses[2].name;
      var brewName3 = response.businesses[3].name;
      var brewName4 = response.businesses[4].name;
      var brewName5 = response.businesses[5].name;
      var brewName6 = response.businesses[6].name;
      var brewName7 = response.businesses[7].name;
      var brewName8 = response.businesses[8].name;
      var brewName9 = response.businesses[9].name;

      var brewLat0 = response.businesses[0].coordinates.latitude;
      var brewLat1 = response.businesses[1].coordinates.latitude;
      var brewLat2 = response.businesses[2].coordinates.latitude;
      var brewLat3 = response.businesses[3].coordinates.latitude;
      var brewLat4 = response.businesses[4].coordinates.latitude;
      var brewLat5 = response.businesses[5].coordinates.latitude;
      var brewLat6 = response.businesses[6].coordinates.latitude;
      var brewLat7 = response.businesses[7].coordinates.latitude;
      var brewLat8 = response.businesses[8].coordinates.latitude;
      var brewLat9 = response.businesses[9].coordinates.latitude;

      var brewLon0 = response.businesses[0].coordinates.longitude;
      var brewLon1 = response.businesses[1].coordinates.longitude;
      var brewLon2 = response.businesses[2].coordinates.longitude;
      var brewLon3 = response.businesses[3].coordinates.longitude;
      var brewLon4 = response.businesses[4].coordinates.longitude;
      var brewLon5 = response.businesses[5].coordinates.longitude;
      var brewLon6 = response.businesses[6].coordinates.longitude;
      var brewLon7 = response.businesses[7].coordinates.longitude;
      var brewLon8 = response.businesses[8].coordinates.longitude;
      var brewLon9 = response.businesses[9].coordinates.longitude;

      var brewAddress10 = response.businesses[0].location.display_address[0];
      var brewAddress11 = response.businesses[1].location.display_address[0];
      var brewAddress12 = response.businesses[2].location.display_address[0];
      var brewAddress13 = response.businesses[3].location.display_address[0];
      var brewAddress14 = response.businesses[4].location.display_address[0];
      var brewAddress15 = response.businesses[5].location.display_address[0];
      var brewAddress16 = response.businesses[6].location.display_address[0];
      var brewAddress17 = response.businesses[7].location.display_address[0];
      var brewAddress18 = response.businesses[8].location.display_address[0];
      var brewAddress19 = response.businesses[9].location.display_address[0];


      var brewAddress20 = response.businesses[0].location.display_address[1];
      var brewAddress21 = response.businesses[1].location.display_address[1];
      var brewAddress22 = response.businesses[2].location.display_address[1];
      var brewAddress23 = response.businesses[3].location.display_address[1];
      var brewAddress24 = response.businesses[4].location.display_address[1];
      var brewAddress25 = response.businesses[5].location.display_address[1];
      var brewAddress26 = response.businesses[6].location.display_address[1];
      var brewAddress27 = response.businesses[7].location.display_address[1];
      var brewAddress28 = response.businesses[8].location.display_address[1];
      var brewAddress29 = response.businesses[9].location.display_address[1];

      var brewPhone0 = response.businesses[0].display_phone;
      var brewPhone1 = response.businesses[1].display_phone;
      var brewPhone2 = response.businesses[2].display_phone;
      var brewPhone3 = response.businesses[3].display_phone;
      var brewPhone4 = response.businesses[4].display_phone;
      var brewPhone5 = response.businesses[5].display_phone;
      var brewPhone6 = response.businesses[6].display_phone;
      var brewPhone7 = response.businesses[7].display_phone;
      var brewPhone8 = response.businesses[8].display_phone;     
      var brewPhone9 = response.businesses[9].display_phone;

      var brewReviews0 = response.businesses[0].url;
      var brewReviews1 = response.businesses[1].url;
      var brewReviews2 = response.businesses[2].url;
      var brewReviews3 = response.businesses[3].url;
      var brewReviews4 = response.businesses[4].url;
      var brewReviews5 = response.businesses[5].url;
      var brewReviews6 = response.businesses[6].url;
      var brewReviews7 = response.businesses[7].url;
      var brewReviews8 = response.businesses[8].url;
      var brewReviews9 = response.businesses[9].url;

      var brewClosed0 = response.businesses[0].is_closed;
      var brewClosed1 = response.businesses[1].is_closed;
      var brewClosed2 = response.businesses[2].is_closed;
      var brewClosed3 = response.businesses[3].is_closed;
      var brewClosed4 = response.businesses[4].is_closed;
      var brewClosed5 = response.businesses[5].is_closed;
      var brewClosed6 = response.businesses[6].is_closed;
      var brewClosed7 = response.businesses[7].is_closed;
      var brewClosed8 = response.businesses[8].is_closed;
      var brewClosed9 = response.businesses[9].is_closed;

      //Below this will stringify the json fields in order to 
      localStorage.setItem("name0", brewName0);
      localStorage.setItem("lat0", brewLat0);
      localStorage.setItem("lon0", brewLon0);
      localStorage.setItem("address10", brewAddress10);
      localStorage.setItem("address20", brewAddress20);
      localStorage.setItem("phone0", brewPhone0);
      localStorage.setItem("closed0", brewClosed0);
      localStorage.setItem("reviews0", brewReviews0);


      localStorage.setItem("name1", brewName1);
      localStorage.setItem("lat1", brewLat1);
      localStorage.setItem("lon1", brewLon1);
      localStorage.setItem("address11", brewAddress11);
      localStorage.setItem("address21", brewAddress21);
      localStorage.setItem("phone1", brewPhone1);
      localStorage.setItem("closed1", brewClosed1);
      localStorage.setItem("reviews1", brewReviews1);

      localStorage.setItem("name2", brewName2);
      localStorage.setItem("lat2", brewLat2);
      localStorage.setItem("lon2", brewLon2);
      localStorage.setItem("address12", brewAddress12);
      localStorage.setItem("address22", brewAddress22);
      localStorage.setItem("phone2", brewPhone2);
      localStorage.setItem("closed2", brewClosed2);
      localStorage.setItem("reviews2", brewReviews2);

      localStorage.setItem("name3", brewName3);
      localStorage.setItem("lat3", brewLat3);
      localStorage.setItem("lon3", brewLon3);
      localStorage.setItem("address13", brewAddress13);
      localStorage.setItem("address23", brewAddress23);
      localStorage.setItem("phone3", brewPhone3);
      localStorage.setItem("closed3", brewClosed3);
      localStorage.setItem("reviews3", brewReviews3);

      localStorage.setItem("name4", brewName4);
      localStorage.setItem("lat4", brewLat4);
      localStorage.setItem("lon4", brewLon4);
      localStorage.setItem("address14", brewAddress14);
      localStorage.setItem("address24", brewAddress24);
      localStorage.setItem("phone4", brewPhone4);
      localStorage.setItem("closed4", brewClosed4);
      localStorage.setItem("reviews4", brewReviews4);

      localStorage.setItem("name5", brewName5);
      localStorage.setItem("lat5", brewLat5);
      localStorage.setItem("lon5", brewLon5);
      localStorage.setItem("address15", brewAddress15);
      localStorage.setItem("address25", brewAddress25);
      localStorage.setItem("phone5", brewPhone5);
      localStorage.setItem("closed5", brewClosed5);
      localStorage.setItem("reviews5", brewReviews5);

      localStorage.setItem("name6", brewName6);
      localStorage.setItem("lat6", brewLat6);
      localStorage.setItem("lon6", brewLon6);
      localStorage.setItem("address16", brewAddress16);
      localStorage.setItem("address26", brewAddress26);
      localStorage.setItem("phone6", brewPhone6);
      localStorage.setItem("closed6", brewClosed6);
      localStorage.setItem("reviews6", brewReviews6);

      localStorage.setItem("name7", brewName7);
      localStorage.setItem("lat7", brewLat7);
      localStorage.setItem("lon7", brewLon7);
      localStorage.setItem("address17", brewAddress17);
      localStorage.setItem("address27", brewAddress27);
      localStorage.setItem("phone7", brewPhone7);
      localStorage.setItem("closed7", brewClosed7);
      localStorage.setItem("reviews7", brewReviews7);

      localStorage.setItem("name8", brewName8);
      localStorage.setItem("lat8", brewLat8);
      localStorage.setItem("lon8", brewLon8);
      localStorage.setItem("address18", brewAddress18);
      localStorage.setItem("address28", brewAddress28);
      localStorage.setItem("phone8", brewPhone8);
      localStorage.setItem("closed8", brewClosed8)
      localStorage.setItem("reviews8", brewReviews8);

      localStorage.setItem("lat9", brewLat9);
      localStorage.setItem("lon9", brewLon9);
      localStorage.setItem("address19", brewAddress19);
      localStorage.setItem("address29", brewAddress29);
      localStorage.setItem("phone9", brewPhone9);
      localStorage.setItem("closed9", brewClosed9);
      localStorage.setItem("reviews9", brewReviews9);
      }
    });

    function breweryInfo(brewery) {
        var infoName = "Name: " + localStorage.getItem("name" + brewery);
        var infoAdd1 = "Address: " + localStorage.getItem("address1" + brewery);
        var infoAdd2 = "         " + localStorage.getItem("address2" + brewery);
        var infoPhone = "Phone: " + localStorage.getItem("phone" + brewery);
        var infoReviews = "Yelp Review: " + localStorage.getItem("reviews" + brewery);
      
        document.getElementById("location-info").innerHTML = infoName;
        document.getElementById("location-info").innerHTML = infoAdd1;
        document.getElementById("location-info").innerHTML = infoAdd2;
        document.getElementById("location-info").innerHTML = infoPhone;
        document.getElementById("location-info").innerHTML = infoReviews;  
      }

$(document).ready(function() {
  $('.sidenav').sidenav();
});
