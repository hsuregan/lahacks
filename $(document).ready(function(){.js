		$(document).ready(function(){
			
			var germany = {};
			var us = {};
			//average price of a can of coke
			//average price of a one night stay in major cities
			//MAJOR CITIES

			germany["currency"] = "euro";
			germany["name"] = "germany";
			germany["capital"] = "berlin";

			us["currency"] = "usd";
			us["name"] = "united states of america";
			us["capital"] = "washington dc";
			var from = us["currency"];
			var to = germany["currency"];
			var exchange = "https://www.google.com/finance/converter?a=1&from=" + from + "&to=" + to + "&meta=ei%3DIHkfVdiaM-f1igLUvIGQBw";
			//console.log(exchange);


			var x = document.getElementById("poop");
			console.log(x);
			x.innerHTML =germany["name"];
			x.style.color = "blue"; //one way of color change
			$('#poop').css("background-color", "yellow"); //another way 
			$('#currency').innerHTML = exchange;
			//x.css("color", "yellow");
		})

		// $.ajax({
  //       url: "http://devel.farebookings.com/api/curconversor/EUR/GBP/1/",
  //       dataType: 'jsonp',
  //       success: function (data) {

  //           alert(data.GBP);

  //       }


