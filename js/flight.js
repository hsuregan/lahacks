//flights
var flights =
[
	{distance: 10403, duration: 5000, flight_numbers: ["AA1188","CI1188"], flight_time: 100},
	{distance: 10239, duration: 5000, flight_numbers: ["ZZ1188", "DE1188"], flight_time: 100},
	{distance: 10290, duration: 5000, flight_numbers: ["DI1188", "CA1188"], flight_time: 100}
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
			content = content + "<div class='row'><div class='col-md-6'><center><strong><u>Flight Numbers</u></strong><br />" + Flight_Numbers + "</center>" +"<div><strong><u>Distance</u></strong><br /> " + flights[i].distance + " KM </div></div>" +"<div class='col-md-6'>" +"<div><strong><u>Trip Duration</u></strong> " + flights[i].duration + "hrs </div>" +"<div><strong><u>Flight Duration</u></strong> " + flights[i].flight_time + "hrs </div></div></div>";


			 $('#flights').append(content);
		}
		//$('#flights').append("<div id = "">poop</div>");
		//alert("shit");
		//console.log(flights["distance"])
		//$('#flights').innerHTML
		//$('#Abstract').innerHTML = dest["Abstract"];
	}
)