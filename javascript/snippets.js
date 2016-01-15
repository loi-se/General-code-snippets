
<script type = "text/javascript">

// -----------------------1. Control structures

//-------------If
if (a === b) {
  document.body.innerHTML += "a equals b";
}

//----------- If else
if (a === b) {
  document.body.innerHTML += "a equals b";
} else if (a === c) {
  document.body.innerHTML += "a equals c";
} else {
  document.body.innerHTML += "a does not equal either b or c";
}

//------------- While loop
while (c < 10) {
  c += 1;
  // …
}

//-----------do while loop
do {
  c += 1;
} while (c < 10);

//-------------for loop
var c;
for (c = 0; c < 10; c += 1) {
  // …
}

for (i=0;i<100;i++) {

}


//-------------for each loop
for (element in object) {
  // …
}

var sum = 0;
var obj = {prop1: 5, prop2: 13, prop3: 8};

for each (var item in obj) {
  sum += item;
}

//--------------Switch
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

//--------------With
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


//--------Dictionairy
var dictionary = {
    "sample1": 1,
    "sample2": 2
}

if(dictionary.hasOwnProperty("sample1"))
{
    console.log("sample1 key found and its value is"+ dictionary["sample1"]);
}

// ------Hashtable
var hashPetName = {
    dog: "Rex",
    cat: "Mistigri"
  }
  
  console.log("My dog's name is " + hashPetName["dog"]
      + " and my cat's name is " + hashPetName["cat"] );

// Iterate trough it:
for (var key in hashPetName){
  console.log(key + " -> " + hashPetName[key]));   
  // if (key == "name") doSomething();
}

// Call function with 2 parameters:
sb.Append("<tr onclick='ToonPlanning(" + planning.ProjectId + ", " + planning.PlanningId + ")'>");

function ToonPlanning(projectId, planningId) {
    ShowLoader();
    setTimeout(function () {
        window.parent.location.href = "/project/planning/______.aspx?projectId=" + projectId + "&planningId=" + planningId;
    }, 25);
}


</script>
