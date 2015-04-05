					// dest["weather"] = ["RAIN", "CLEAR_DAY", "WIND", "CLEAR_DAY", "FOG", "SLEET"];
					// dest["currency"] = "eur";
					// dest["name"] = "kaohsiung";
					// dest["capital"] = "kaohsiung";
					// dest["country"] = "taiwan";
					// dest["Time Zone"] = "IDK"
					// dest["Elevation"] = "80"
					// dest["latitude"] = 80;
					// dest["longitude"] = 80;


					// origin["weather"] = "sunny";
					// origin["currency"] = "usd";
					// origin["name"] = "LA";
					// origin["capital"] = "washington dc";
					// origin["country"] = "usa";
					// origin["Time Zone"] = "IDK"
					// origin["Elevation"] = "80"
					// origin["latitude"] = 80;
					// origin["longitude"] = 80;
					//					dest["Postal Code"] = 80930;



						// <div class="tile_title" id="time_zone" style="font-size: 20px !important; text-align: left">Time Zone:</div>

						// <div class="tile_title" id="population" style="font-size: 20px !important; text-align: left">Population:</div>
						// <div class="tile_title" id="pop_density" style="font-size: 20px !important; text-align: left">Population Density:</div>

						// <div class="tile_title" id="elevation" style="font-size: 20px !important; text-align: left">Elevation:</div>
						// <div class="tile_title" id="postal_code" style="font-size: 20px !important; text-align: left">Postal Code:</div>
						// <div class="tile_title" id="dlatitude" style="font-size: 20px !important; text-align: left">Latitude:</div>
						// <div class="tile_title" id="dlongitude" style="font-size: 20px !important; text-align: left">Longitude:</div>



		$(document).ready(

			function()
			{
				$('#time_zone').append("&nbsp;" + dest["Time Zone"]);
				$('#population').append("&nbsp;" + dest["population"]);
								$('#pop_density').append("&nbsp;" + dest["pop dens"]);

				$('#elevation').append("&nbsp;" + dest["Elevation"]);
				$('#postal_code').append("&nbsp;" + dest["Postal Code"]);
				$('#dlatitude').append("&nbsp;" + dest["latitude"]);
				$('#dlongitude').append("&nbsp;" + dest["longitude"]);
				$('#website_link').append(dest["website"]);
				$('#flag_name').append(dest["name"]);
				$('#flag').append('<iframe src="' + dest["flag"] + '"width="100%" height="500" margin="0" padding="0" border="none" overflow="hidden" scrolling="no"></iframe>');

				//document.getElementsByTagName('website_link').innerHTML = "poop";//dest["website"];


				// document.getElementsByTagName('time_zone').innerHTML = 	document.getElementsByTagName('time_zone').innerHTML + " " + dest["Time Zone"];
				// document.getElementsByTagName('population').innerHTML = document.getElementsByTagName('population').innerHTML + " " + dest["population"];
				// document.getElementsByTagName('elevation').innerHTML = document.getElementsByTagName('elevation').innerHTML + " " + dest["Elevation"];
				// document.getElementsByTagName('postal_code').innerHTML = document.getElementsByTagName('postal_code').innerHTML + " " + dest["Postal Code"];
				// document.getElementsByTagName('dlatitude').innerHTML = document.getElementsByTagName('dlatitude').innerHTML + " " + dest["latitude"];
				// document.getElementsByTagName('dlongitude').innerHTML = document.getElementsByTagName('dlongitude').innerHTML + " " + dest["longitude"];


			}
		);
