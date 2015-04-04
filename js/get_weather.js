		$(document).ready(

			function()
			{
				  var skycons = new Skycons({"color": "white"});
				  // on Android, a nasty hack is needed: {"resizeClear": true}

				  // you can add a canvas by it's ID...
				  switch(dest["weather"]) {
				  	case "CLEAR_DAY":
				  		skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
				  		break;

				  	case "PARTLY_CLOUDY_DAY":
				  		skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
				  		break;
				  	case "PARTLY_CLOUDY_NIGHT":
				  		skycons.add("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
				  		break;
				  	case "CLOUDY":
				  		skycons.add("icon1", Skycons.CLOUDY);
				  		break;
				  	case "RAIN":
				  		skycons.add("icon1", Skycons.RAIN);
				  		break;
				  	case "SLEET":
				  		skycons.add("icon1", Skycons.SLEET);
				  		break;
				  	case "SNOW":
				  		skycons.add("icon1", Skycons.SNOW);
				  		break;
				  	case "WIND":
				  		skycons.add("icon1", Skycons.WIND);
				  		break;
				  	case "FOG":
				  		skycons.add("icon1", Skycons.FOG);
				  		break;
				  }


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
		);



