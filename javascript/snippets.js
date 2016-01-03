<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
<script type = "text/javascript">

//---------------------------------- 0. Ajax calls
function ShowCurrentTime() {
    $.ajax({
        type: "POST",
        url: "Default.aspx/GetCurrentTime",
        data: '{name: "' + $("#<%=txtUserName.ClientID%>")[0].value + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function(response) {
            alert(response);
        }
    });
}

function OnSuccess(response) {
    alert(response.d);
    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

    alert('Your OS: ' + OSName);
}


// -----------------------1. Control structures

//If
if (a === b) {
  document.body.innerHTML += "a equals b";
}

// If else
if (a === b) {
  document.body.innerHTML += "a equals b";
} else if (a === c) {
  document.body.innerHTML += "a equals c";
} else {
  document.body.innerHTML += "a does not equal either b or c";
}

// While loop
while (c < 10) {
  c += 1;
  // …
}

// do while loop
do {
  c += 1;
} while (c < 10);

// for loop
var c;
for (c = 0; c < 10; c += 1) {
  // …
}

for (i=0;i<100;i++) {

}


// for each loop
for (element in object) {
  // …
}

// Switch
switch(i) {
case 1:
  // …
  break;
case 2:
  // …
  break;
default:
  // …
  break;
}

// With
with (expression) {
  // statement
}


//-------------------------------- 2. Data Structures:
// -----------Array
var fruits = ["Apple", "Orange", "Donkey"];

alert(fruits[0]);
alert(fruits[1]);
alert(fruits[2]);

alert(fruits.length);

// add value
fruits.push("mango");

// loop trough it
var arrayLength = fruits.length;
for (var i = 0; i < arrayLength; i++) {
    alert(fruits[i]);
}


//---------- Stack
var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]
alert(i);            // displays 5

//---------- Queue
var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]
alert(i);              // displays 2













</script>
