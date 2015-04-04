		$(document).ready(

				function(){
					
					var dest = {};
					var origin = {};
					//average price of a can of coke
					//average price of a one night stay in major cities
					//MAJOR CITIES

					dest["currency"] = "eur";
					dest["name"] = "Germany";
					dest["capital"] = "berlin";

					origin["currency"] = "usd";
					origin["name"] = "USA";
					origin["capital"] = "washington dc";


					document.getElementById("destination").innerHTML = origin["name"] + " &nbsp; &nbsp;  ✈  &nbsp; &nbsp; " + dest["name"];
					var to = dest["currency"];
					var from = origin["currency"];
						$.ajax({
								url: "http://devel.farebookings.com/api/curconversor/"+from+"/"+to+"/1/",
								dataType: 'jsonp',
								success: function (data) {
									//alert(data[to]);
									document.getElementById("currency").innerHTML = document.getElementById("currency").innerHTML + "<br /> 1 " + from + " = " + data[to] + " " + to;
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
					$('#currency').css("background-color", "yellow"); //another way 
					//alert(ugh);
					//$('#currency').html = exchange;
					//x.css("color", "yellow");


				}

				



		

		)



