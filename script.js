
// $(document).ready(function() {
//   $("#driver").click(function(event) {
//     $("#stage").load("index.html");
//   });
// });

// function loadDoc(url, callback) {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       callback(this);
//     }
//   };
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }

function myFunction(xhttp) {
  document.getElementById("example").innerHTML = xhttp.responseText;

// Document Event Listener
document.addEventListener("click", function(){
  document.getElementById("example").innerHtml = "Hello World";
});
// Handling Events
mybutton.addEventListener("click", function(){
  alert("Click!!");
}

function addAChild(){
  let newElem = document.createElement("div");
  newElem.innerHTML ="This is a new Element()";
  let container + document.getElementById("container");
  container.appendChild(newElem);
}

// Manipulate the button by removing or repositioning
// let myButton = document.getElementsByTagName("button");
// let myButton = document.getElementById("mybutton");

// Example to innerHTML addWord Button
function addWords() {
  document.getElementById("example").innerHTML ="Welcome to FRT!";
}

// HTTP Request
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("example").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "info.txt", true);
  // Add the below here
  xhttp.send();
}
// Math console log for all math equations
console.log(Math);
console.log(Hello World);
