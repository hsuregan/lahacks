		$(document).ready(

			function()
			{
				console.log("this is the weather:");
				console.log(dest["weather"]);
				//get_next_7_day_forcast(dest["weather"]);
				get_high_low(dest["name"], dest["country"]);
				console.log("poop");

			}
		);


function timeConverter(UNIX_timestamp){
	  var a = new Date(UNIX_timestamp*1000);
	  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  var year = a.getFullYear();
	  var month = months[a.getMonth()];
	  var date = a.getDate();
	  var hour = a.getHours();
	  var min = a.getMinutes();
	  var sec = a.getSeconds();
	  //var time = date + ',' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	  //return time;
	  return date;
}


       function b(latitude, longitude){

            //var apiKey = '706c386921e262c76e7f8801b02e8c85';
            var url = 'https://api.forecast.io/forecast/';
            var lati = latitude;
            var longi = longitude;
            var x = [];



            $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
            	//var length = data.daily.data.length;
            	var high = [];
          		var low = [];
            	for(i = 0; i < 6; i++)
            	{
            		x.push(data.daily.data[i].icon);
            		high.push(data.daily.data[i].temperatureMax);
            		low.push(data.daily.data[i].temperatureMin)
            	}
              //$('#weather').html('and the temperature is: ' + data.currently.temperature);
                           console.log(x);
                           get_next_7_day_forcast(x, high, low);
                           //get_high_low(x);

            });


            return x;

        }


// function getTemps(latitude, longitude, city, country)
// {
// 	var url_forcast = "https://api.forecast.io/forecast/706c386921e262c76e7f8801b02e8c85/" + latitude + "," + longitude;
// 	console.log("url is ", url_forcast);
// 	url_forcast = "https://api.forecast.io/forecast/706c386921e262c76e7f8801b02e8c85/48.856614,2.3522219";


// 	$.getJSON(url_forcast, function (json)
// 	{

// 				console.log("In getTemps json function");
// 		    	var maxTemp = json.daily[0].results[0].temperatureMax;
// 		    	var minTemp = json.daily[0].results[0].temperatureMin;
// 		    	console.log('Max temp: ', maxTemp);
// 		    	console.log('Min temp: ', minTemp);
// 	});
// }

function get_high_low(city, country)
{
		var url = "https://maps.googleapis.com/maps/api/geocode/json?address=+" + city + ",+" + country + "&key=AIzaSyBT6-6KYw_7sfruJivjSAMfVH699u-8ql8";

		console.log("url is " + url);

		var icons;
		$.getJSON(url, function (json) 
		{
		    var latitude = json.results[0].geometry.location.lat;
		 
		    var longitude = json.results[0].geometry.location.lng;

		    console.log('Latitude : ', latitude);
		    console.log('Longitude : ', longitude);
		    		//getTemps(latitude, longitude, city, country);
		    icons = b(latitude, longitude);
		    console.log(icons);

		});
		return icons;
}





function get_next_7_day_forcast(arr, high, low)
{
	console.log(high);
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
				  switch(arr[i]) {
				  	case "clear-day":
				  		skycons.add(icon, Skycons.CLEAR_DAY);
				  		document.getElementById("weather_date" + num).innerHTML = "<center>" + month + "/" + day + ": clear <br />H: " + high[i] + "F<br />L: " + low[i] +  "F</center>";
				 				  		//floatstuff(num);
		  				break;

				  	case "partly-cloudy-day":
				  		skycons.add(icon, Skycons.PARTLY_CLOUDY_DAY);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": partly cloudy<br />H: " + high[i] + "F<br />L: " + low[i] +  "F</center>";
				 				  		//floatstuff(num);
				 				  	break;

				  	case "partly-cloudy-night":
				  		skycons.add(icon, Skycons.PARTLY_CLOUDY_NIGHT);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": partly cloudy night<br />H: " + high[i] + "F<br />L: " + low[i] +  "F</center>";
				 				  		//floatstuff(num);
				 				  		break;
				  	case "cloudy":
				  		skycons.add(icon, Skycons.CLOUDY);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": cloudy<br />H: " + high[i] + "F<br />L: " + low[i] +  "F</center>";
				  						 				  		//floatstuff(num);


				  		break;
				  	case "rain":
				  		skycons.add(icon, Skycons.RAIN);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": rainy<br />H: " + high[i] +  "F<br />L: " + low[i] + "F</center>";
				  						 				  		//floatstuff(num);


				  		break;

				  	case "sleet":
				  		skycons.add(icon, Skycons.SLEET);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": sleet<br />H: " + high[i] + "F<br />L: " + low[i] +  "F</center>";
				  						 				  		//floatstuff(num);


				  		break;
				  	case "snow":
				  		skycons.add(icon, Skycons.SNOW);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": snowy<br />H: " + high[i] +"F<br />L: " + low[i] +  "F</center>";
				  						 				  		//floatstuff(num);

 
				  		break;
				  	case "wind":
				  		skycons.add(icon, Skycons.WIND);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": windy<br />H: " + high[i] +"F<br />L: " + low[i] +   "F</center>";
				  						 				  		//floatstuff(num);


				  		break;
				  	case "fog":
				  		skycons.add(icon, Skycons.FOG);
				  		document.getElementById("weather_date" + num).innerHTML ="<center>" + month + "/" + day + ": fog<br />H: " + high[i] + "F<br />L: " + low[i] +  "F</center>";
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



 