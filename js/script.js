					var dest = {};
					var origin = {};
					//average price of a can of coke
					//average price of a one night stay in major cities
					//MAJOR CITIES
					dest["weather"] = ["RAIN", "CLEAR_DAY", "WIND", "CLEAR_DAY", "FOG", "SLEET"];
					dest["currency"] = "eur";
					dest["name"] = "nanjing";
					dest["capital"] = "nanjing";
					dest["country"] = "china";
					dest["Time Zone"] = ""
					dest["Elevation"] = "80"
					dest["latitude"] = 80;
					dest["longitude"] = 80;
					dest["population"] = 100000;
										dest["pop dens"] = 546456;

					dest["Postal Code"] = 80930;
										dest["website"] = "www.kaohsiung.com";
										dest["flag"] = "http://en.wikipedia.org/wiki/Los_Angeles#/media/File:Flag_of_Los_Angeles,_California.svg";
					dest["Abstract"] = "POOOOP Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";


					origin["weather"] = "sunny";
					origin["currency"] = "usd";
					origin["name"] = "LA";
					origin["capital"] = "washington dc";
					origin["country"] = "usa";
					origin["Time Zone"] = "IDK"
					origin["Elevation"] = "80"
					origin["latitude"] = 80;
					origin["longitude"] = 80;
					origin["population"] = 100000;
															origin["pop dens"] = 100000;


		$(document).ready(



				function(){

					document.getElementById("destination").innerHTML = "<span style='color: #00FFFF'>" + origin["name"] + "</span>"+" &nbsp; <span style='color: #00CCFF'>  ✈ </span> &nbsp; <span style='color: #0099FF'>  ✈ </span> &nbsp; <span style='color: #0066ff'>  ✈ </span> &nbsp; " + dest["name"];
					var to = dest["currency"];
					var from = origin["currency"];
						$.ajax({
								url: "http://devel.farebookings.com/api/curconversor/"+from+"/"+to+"/1/",
								dataType: 'jsonp',
								success: function (data) 
								{
									//alert(data[to]);
									document.getElementById("currency").innerHTML = document.getElementById("currency").innerHTML + "<span style='font-size: 25px !important; padding-bottom: 10px !important'><br /> 1 " + from + " = " + data[to] + " " + to + "</span>";

									//document.getElementById("currency").style.size = "25px";
									//$('#currency').innerHTML = data[to];
									//alert(ugh);
					        	}
							}
					); 



					//var exchange = "https://www.google.com/finance/converter?a=1&from=" + from + "&to=" + to + "&meta=ei%3DIHkfVdiaM-f1igLUvIGQBw";
					//console.log(exchange);


					//var x = document.getElementById("poop");
					//console.log(x);
					//x.innerHTML =germany["name"];
					//x.style.color = "blue"; //one way of color change
					//$('#currency').css("background-color", "yellow"); //another way 
					//alert(ugh);
					//$('#currency').html = exchange;
					//x.css("color", "yellow");


				}

				



		

		)



