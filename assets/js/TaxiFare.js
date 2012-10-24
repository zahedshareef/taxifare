function TaxiFare() {
// calculates taxi fare based upon miles travelled
// and the hour of the day in military time (0-23).

var baseFare = 14;
var costPerMile = 7.00;
var nightSurcharge = 0.50; // 8pm to 6am, every night //its flat 0.50 and not per mile

var milesTravelled = Number(document.getElementById("miles").value) || 0;
if ((milesTravelled < 1) || (milesTravelled > 200)) {
alert ("You must enter 1 - 200 miles");
document.getElementById("miles").focus();
return false;
}

var pickupTime = Number(document.getElementById("putime").value) || 0;
if ((pickupTime == "") || (pickupTime < 0) || (pickupTime > 23)) {  // note the hours are 0-23.  There is no 24 hour, midnight is 0 hours
alert ("The time must be 0-23 hours");
document.getElementById("putime").focus();
return false;
}

var cost = baseFare + (costPerMile * milesTravelled);

// add the nightSurcharge to the cost if it is after
// 8pm or before 6am
if (pickupTime >= 20 || pickupTime < 6) {
cost += nightSurcharge;
}
alert("Your taxi fare is $"  + cost.toFixed(2));
}
