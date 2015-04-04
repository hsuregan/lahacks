		$(document).ready(

			function()
			{
				get_next_7_day_forcast(dest["weather"]);
				var ugh = get_high_low("paris", "france");
				console.log("poop");

			}
		);

function get_next_7_day_forcast(arr)
{
				var today = new Date();
				var day = today.getDate();
				var month = today.getMonth() + 1;
				var skycons = new Skycons({"color": "white"});
				  // on Android, a nasty hack is needed: {"resizeClear": true}

				for(i = 0; i < arr.length; i ++)
				{
				 day = day + i;
				 var num = i + 1;
				 var icon = "icon" + num;

				  // you can add a canvas by it's ID...
				  switch(dest["weather"][i]) {
				  	case "CLEAR_DAY":
				  		skycons.add(icon, Skycons.CLEAR_DAY);
				  		document.getElementById("weather_date" + num).innerHTML = "<center>" + month + "/" + day + ": clear" + "</center>";
				 				  		//floatstuff(num);
		  		break;

				  	case "PARTLY_CLOUDY_DAY":
				  		skycons.add(icon, Skycons.PARTLY_CLOUDY_DAY);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": partly cloudy"  + "</center>";
				 				  		//floatstuff(num);

				  	case "PARTLY_CLOUDY_NIGHT":
				  		skycons.add(icon, Skycons.PARTLY_CLOUDY_NIGHT);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": partly cloudy night" + "</center>";
				 				  		//floatstuff(num);

				  	case "CLOUDY":
				  		skycons.add(icon, Skycons.CLOUDY);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": cloudy" + "</center>";
				  						 				  		//floatstuff(num);


				  		break;
				  	case "RAIN":
				  		skycons.add(icon, Skycons.RAIN);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": rainy" + "</center>";
				  						 				  		//floatstuff(num);


				  		break;

				  	case "SLEET":
				  		skycons.add(icon, Skycons.SLEET);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": sleet" + "</center>";
				  						 				  		//floatstuff(num);


				  		break;
				  	case "SNOW":
				  		skycons.add(icon, Skycons.SNOW);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": snowy" + "</center>";
				  						 				  		//floatstuff(num);

 
				  		break;
				  	case "WIND":
				  		skycons.add(icon, Skycons.WIND);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": windy" + "</center>";
				  						 				  		//floatstuff(num);


				  		break;
				  	case "FOG":
				  		skycons.add(icon, Skycons.FOG);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": fog" + "</center>";
				  						 				  		//floatstuff(num);


				  		break;
				  }
				 };


										




				  //skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);

				  // ...or by the canvas DOM element itself.

				  // if you're using the Forecast API, you can also supply
				  // strings: "partly-cloudy-day" or "rain".

				  // start animation!
				  skycons.play();

				  // you can also halt animation with skycons.pause()

				  // want to change the icon? no problem:

				  // want to remove one altogether? no problem:

}

function getTemps(latitude, longitude, city, country)
{
	var url_forcast = "https://api.forecast.io/forecast/706c386921e262c76e7f8801b02e8c85/" + latitude + "," + longitude;
	console.log("url is ", url_forcast);
	url_forcast = "https://api.forecast.io/forecast/706c386921e262c76e7f8801b02e8c85/48.856614,2.3522219";


	$.getJSON(url_forcast, function (json)
	{

				console.log("In getTemps json function");
		    	var maxTemp = json.daily[0].results[0].temperatureMax;
		    	var minTemp = json.daily[0].results[0].temperatureMin;
		    	console.log('Max temp: ', maxTemp);
		    	console.log('Min temp: ', minTemp);
	});
}

function get_high_low(city, country)
{
		var url = "https://maps.googleapis.com/maps/api/geocode/json?address=+" + city + ",+" + country + "&key=AIzaSyBT6-6KYw_7sfruJivjSAMfVH699u-8ql8";

		console.log("url is " + url);

		$.getJSON(url, function (json) 
		{
		    var latitude = json.results[0].geometry.location.lat;
		 
		    var longitude = json.results[0].geometry.location.lng;

		    console.log('Latitude : ', latitude);
		    console.log('Longitude : ', longitude);
		    		//getTemps(latitude, longitude, city, country);
		    b(latitude, longitude);


		});

}



       function b(latitude, longitude){

            var apiKey = '706c386921e262c76e7f8801b02e8c85';
            var url = 'https://api.forecast.io/forecast/';
            var lati = latitude;
            var longi = longitude;
            var data;

            $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
              console.log(data.currently.temperature);
              //$('#weather').html('and the temperature is: ' + data.currently.temperature);
            });
        }