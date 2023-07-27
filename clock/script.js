function Time() {

 // Creating object of the Date class
 var date = new Date();

 // Get current hour

 var year = date.getYear() - 100 + 3031;

 var month = date.getMonth() + 1;

 var day = date.getDate();

 var hour = date.getHours();
 // Get current minute
 var minute = date.getMinutes();
 // Get current second
 var second = date.getSeconds();

 // Variable to store AM / PM
 var period = "";

 // Assigning AM / PM according to the current hour
 if (hour >= 12) {
 period = "PM";
 } else {
 period = "AM";
 }

 // Converting the hour in 12-hour format
 if (hour == 0) {
 hour = 12;
 } else {
 if (hour > 12) {
 hour = hour - 12;
 }
 }

 // Updating hour, minute, and second
 // if they are less than 10
 year = update(year);
 month = update(month);
 day = update(day);
 hour = update(hour);
 minute = update(minute);
 second = update(second);

 // Adding time elements to the div
 document.getElementById("digital-clock").innerText = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second + " " + period;

 // Set Timer to 1 sec (1000 ms)
 setTimeout(Time, 1000);
}

 // Function to update time elements if they are less than 10
 // Append 0 before time elements if they are less than 10
function update(t) {
 if (t < 10) {
 return "0" + t;
 }
 else {
 return t;
 }
}

Time();
