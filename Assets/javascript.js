
    function returnBreweriesInfo() {
    
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=breweries&location=Oceanside&limit=10&sortby=distance"; 

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

      var brewAddress10 = response.businesses[i].location.display_address[0];
      var brewAddress11 = response.businesses[i].location.display_address[0];
      var brewAddress12 = response.businesses[i].location.display_address[0];
      var brewAddress13 = response.businesses[i].location.display_address[0];
      var brewAddress14 = response.businesses[i].location.display_address[0];
      var brewAddress15 = response.businesses[i].location.display_address[0];
      var brewAddress16 = response.businesses[i].location.display_address[0];
      var brewAddress17 = response.businesses[i].location.display_address[0];
      var brewAddress18 = response.businesses[i].location.display_address[0];
      var brewAddress19 = response.businesses[i].location.display_address[0];


      var brewAddress20 = response.businesses[i].location.display_address[1];
      var brewAddress21 = response.businesses[i].location.display_address[1];
      var brewAddress22 = response.businesses[i].location.display_address[1];
      var brewAddress23 = response.businesses[i].location.display_address[1];
      var brewAddress24 = response.businesses[i].location.display_address[1];
      var brewAddress25 = response.businesses[i].location.display_address[1];
      var brewAddress26 = response.businesses[i].location.display_address[1];
      var brewAddress27 = response.businesses[i].location.display_address[1];
      var brewAddress28 = response.businesses[i].location.display_address[1];
      var brewAddress29 = response.businesses[i].location.display_address[1];

      var brewPhone0 = response.businesses[i].display_phone;
      var brewPhone1 = response.businesses[i].display_phone;
      var brewPhone2 = response.businesses[i].display_phone;
      var brewPhone3 = response.businesses[i].display_phone;
      var brewPhone4 = response.businesses[i].display_phone;
      var brewPhone5 = response.businesses[i].display_phone;
      var brewPhone6 = response.businesses[i].display_phone;
      var brewPhone7 = response.businesses[i].display_phone;
      var brewPhone8 = response.businesses[i].display_phone;     
      var brewPhone9 = response.businesses[i].display_phone;

      var brewReviews0 = response.businesses[i].url;
      var brewReviews1 = response.businesses[i].url;
      var brewReviews2 = response.businesses[i].url;
      var brewReviews3 = response.businesses[i].url;
      var brewReviews4 = response.businesses[i].url;
      var brewReviews5 = response.businesses[i].url;
      var brewReviews6 = response.businesses[i].url;
      var brewReviews7 = response.businesses[i].url;
      var brewReviews8 = response.businesses[i].url;
      var brewReviews9 = response.businesses[i].url;

      var brewClosed0 = response.businesses[i].is_closed;
      var brewClosed1 = response.businesses[i].is_closed;
      var brewClosed2 = response.businesses[i].is_closed;
      var brewClosed3 = response.businesses[i].is_closed;
      var brewClosed4 = response.businesses[i].is_closed;
      var brewClosed5 = response.businesses[i].is_closed;
      var brewClosed6 = response.businesses[i].is_closed;
      var brewClosed7 = response.businesses[i].is_closed;
      var brewClosed8 = response.businesses[i].is_closed;
      var brewClosed9 = response.businesses[i].is_closed;

      //Below this will stringify the json fields in order to 
      localStorage.setItem("name0", JSON.stringify(brewName0));
      localStorage.setItem("lat0", JSON.stringify(brewLat0));
      localStorage.setItem("lon0", JSON.stringify(brewLon0));
      localStorage.setItem("address10", JSON.stringify(brewAddress10));
      localStorage.setItem("address20", JSON.stringify(brewAddress20));
      localStorage.setItem("phone0", JSON.stringify(brewPhone0));
      localStorage.setItem("closed0", JSON.stringify(brewClosed0));

      localStorage.setItem("name1", JSON.stringify(brewName1));
      localStorage.setItem("lat1", JSON.stringify(brewLat1));
      localStorage.setItem("lon1", JSON.stringify(brewLon1));
      localStorage.setItem("address11", JSON.stringify(brewAddress11));
      localStorage.setItem("address21", JSON.stringify(brewAddress21));
      localStorage.setItem("phone1", JSON.stringify(brewPhone1));
      localStorage.setItem("closed1", JSON.stringify(brewClosed1));

      localStorage.setItem("name2", JSON.stringify(brewName2));
      localStorage.setItem("lat2", JSON.stringify(brewLat2));
      localStorage.setItem("lon2", JSON.stringify(brewLon2));
      localStorage.setItem("address12", JSON.stringify(brewAddress12));
      localStorage.setItem("address22", JSON.stringify(brewAddress22));
      localStorage.setItem("phone2", JSON.stringify(brewPhone2));
      localStorage.setItem("closed2", JSON.stringify(brewClosed2));

      localStorage.setItem("name3", JSON.stringify(brewName3));
      localStorage.setItem("lat3", JSON.stringify(brewLat3));
      localStorage.setItem("lon3", JSON.stringify(brewLon3));
      localStorage.setItem("address13", JSON.stringify(brewAddress13));
      localStorage.setItem("address23", JSON.stringify(brewAddress23));
      localStorage.setItem("phone3", JSON.stringify(brewPhone3));
      localStorage.setItem("closed3", JSON.stringify(brewClosed3));

      localStorage.setItem("name4", JSON.stringify(brewName4));
      localStorage.setItem("lat4", JSON.stringify(brewLat4));
      localStorage.setItem("lon4", JSON.stringify(brewLon4));
      localStorage.setItem("address14", JSON.stringify(brewAddress14));
      localStorage.setItem("address24", JSON.stringify(brewAddress24));
      localStorage.setItem("phone4", JSON.stringify(brewPhone4));
      localStorage.setItem("closed4", JSON.stringify(brewClosed4));

      localStorage.setItem("name5", JSON.stringify(brewName5));
      localStorage.setItem("lat5", JSON.stringify(brewLat5));
      localStorage.setItem("lon5", JSON.stringify(brewLon5));
      localStorage.setItem("address15", JSON.stringify(brewAddress15));
      localStorage.setItem("address25", JSON.stringify(brewAddress25));
      localStorage.setItem("phone5", JSON.stringify(brewPhone5));
      localStorage.setItem("closed5", JSON.stringify(brewClosed5));

      localStorage.setItem("name6", JSON.stringify(brewName6));
      localStorage.setItem("lat6", JSON.stringify(brewLat6));
      localStorage.setItem("lon6", JSON.stringify(brewLon6));
      localStorage.setItem("address16", JSON.stringify(brewAddress16));
      localStorage.setItem("address26", JSON.stringify(brewAddress26));
      localStorage.setItem("phone6", JSON.stringify(brewPhone6));
      localStorage.setItem("closed6", JSON.stringify(brewClosed6));

      localStorage.setItem("name7", JSON.stringify(brewName7));
      localStorage.setItem("lat7", JSON.stringify(brewLat7));
      localStorage.setItem("lon7", JSON.stringify(brewLon7));
      localStorage.setItem("address17", JSON.stringify(brewAddress17));
      localStorage.setItem("address27", JSON.stringify(brewAddress27));
      localStorage.setItem("phone7", JSON.stringify(brewPhone7));
      localStorage.setItem("closed7", JSON.stringify(brewClosed7));

      localStorage.setItem("name8", JSON.stringify(brewName8));
      localStorage.setItem("lat8", JSON.stringify(brewLat8));
      localStorage.setItem("lon8", JSON.stringify(brewLon8));
      localStorage.setItem("address18", JSON.stringify(brewAddress18));
      localStorage.setItem("address28", JSON.stringify(brewAddress28));
      localStorage.setItem("phone8", JSON.stringify(brewPhone8));
      localStorage.setItem("closed8", JSON.stringify(brewClosed8));

      localStorage.setItem("name9", JSON.stringify(brewName9));
      localStorage.setItem("lat9", JSON.stringify(brewLat9));
      localStorage.setItem("lon9", JSON.stringify(brewLon9));
      localStorage.setItem("address19", JSON.stringify(brewAddress19));
      localStorage.setItem("address29", JSON.stringify(brewAddress29));
      localStorage.setItem("phone9", JSON.stringify(brewPhone9));
      localStorage.setItem("closed9", JSON.stringify(brewClosed9));
      };
    });

$(document).ready(function() {
  $('.sidenav').sidenav();
});
