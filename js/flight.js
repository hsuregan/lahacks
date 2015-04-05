//flights
var flights =
[
	{distance: 10403, duration: 5000, flight_numbers: [30,31], flight_time: 100},
	{distance: 10239, duration: 5000, flight_numbers: [32, 33], flight_time: 100},
	{distance: 10290, duration: 5000, flight_numbers: [34, 35], flight_time: 100}
];
//km

$(document).ready(function()
	{

		for(i = 0; i < flights.length; i ++) //go through 
		{
			var Flight_Numbers = "";
			for(n = 0; n < flights[i].flight_numbers.length; n++)
			{
				Flight_Numbers = Flight_Numbers + flights[i].flight_numbers[n] + " ";
			}
			// console.log()
			var content = (i==0) ? "" : "<hr >";
			content = content + "<div class='row'><div class='col-md-6'><center><strong>Flight Numbers </strong><br />" + Flight_Numbers + "</center>" +"<div><strong>Distance</strong><br /> " + flights[i].distance + " KM </div></div>" +"<div class='col-md-6'>" +"<div><strong>Trip Duration</strong> " + flights[i].duration + " </div>" +"<div><strong>Flight Duration</strong> " + flights[i].flight_time + " </div></div></div>";


			 $('#flights').append(content);
		}
		//$('#flights').append("<div id = "">poop</div>");
		//alert("shit");
		//console.log(flights["distance"])
		//$('#flights').innerHTML
		//$('#Abstract').innerHTML = dest["Abstract"];
	}
)