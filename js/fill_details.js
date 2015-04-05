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
				if(dest["Abstract"].length != 0)
					$('#Abstract').append(dest["Abstract"]);

				if(dest["Time Zone"].length != 0)
					$('#time_zone').append("Time Zone: &nbsp;" + dest["Time Zone"]);

				if(dest["population"].length != 0)
					$('#population').append("Population: &nbsp;" + dest["population"]);
				
				if(dest["pop dens"].length != 0)
					$('#pop_density').append("Population Density: &nbsp;" + dest["pop dens"]);

				if(dest["Elevation"].length != 0)
					$('#elevation').append("Elevation: &nbsp;" + dest["Elevation"]);

				if(dest["Postal Code"].length != 0)
					$('#postal_code').append("Postal Code: &nbsp;" + dest["Postal Code"]);
				
				if(dest["latitude"].length != 0)
					$('#dlatitude').append("Latitude: &nbsp;" + dest["latitude"]);
			
				if(dest["longitude"].length != 0)
					$('#dlongitude').append("Longitude: &nbsp;" + dest["longitude"]);
				
				if(dest["website"].length != 0)
					$('#website').append('<a id="website_link" href="' + dest["website"] + '">' + dest["website"] + '<br />');
				
				if(dest["flag"].length != 0)
				{
					//$('#details').append('<br /><iframe src="' + dest["flag"] + '"width="100%" height="450" margin="0" padding="0" border="0px" overflow="hidden" scrolling="no"></iframe>');


				}

				//document.getElementsByTagName('website_link').innerHTML = "poop";//dest["website"];
				$('#Demographics').css('padding-bottom', '25px');
								$('#Demographics').css('background-color', 'blue');




				// document.getElementsByTagName('time_zone').innerHTML = 	document.getElementsByTagName('time_zone').innerHTML + " " + dest["Time Zone"];
				// document.getElementsByTagName('population').innerHTML = document.getElementsByTagName('population').innerHTML + " " + dest["population"];
				// document.getElementsByTagName('elevation').innerHTML = document.getElementsByTagName('elevation').innerHTML + " " + dest["Elevation"];
				// document.getElementsByTagName('postal_code').innerHTML = document.getElementsByTagName('postal_code').innerHTML + " " + dest["Postal Code"];
				// document.getElementsByTagName('dlatitude').innerHTML = document.getElementsByTagName('dlatitude').innerHTML + " " + dest["latitude"];
				// document.getElementsByTagName('dlongitude').innerHTML = document.getElementsByTagName('dlongitude').innerHTML + " " + dest["longitude"];


			}
		);
